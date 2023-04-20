import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { loginUser } from "../api";
import { log } from "../util";


export function loader(par: { request: any }) {
    const { request } = par;
    return new URL(request.url).searchParams.get("message")
}


export function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" });
    const message = useLoaderData() as any;
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState(null) as any;

    function formHandler(ev: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = ev.target;
        setLoginFormData(prev => {
            return { ...prev, [name]: value }
        })
    }

    function submitHandler(ev: React.FormEvent<HTMLFormElement>) {
        ev.preventDefault();
        setStatus("submitting");
        setError(null);
        loginUser(loginFormData).then(data => {
            console.log(data)
        }).catch(err => {
            setError(err);
        }).finally(() => setStatus("idle"));

    }

    return <div className="login">
        <div className="main-container">
            <h1> Sign in to yout account</h1>
            {message && <h3 style={{ color: "red" }}>{message}</h3>}
            {error && <h3 style={{ color: "red" }}>{error.message}</h3>}
            <form onSubmit={submitHandler}>
                <input type="email" placeholder="Enter email address" name="email"
                    onChange={formHandler} value={loginFormData.email} />
                <input type="password" placeholder="Enter password" name="password"
                    onChange={formHandler} value={loginFormData.password} />
                <button type="submit" disabled={status == "submitting"}>
                    {status == "submitting" ? "Loging in..." : "Log in"}
                </button>
            </form>
        </div>
    </div>
}