import React from "react";
import { ChangeEvent } from "react";

export function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ user: "", password: "" });

    function formHandler(ev: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = ev.target;
        setLoginFormData(prev => {
            return { ...prev, [name]: value }
        })
    }

    function submitHandler(ev: React.FormEvent<HTMLFormElement>) {
        ev.preventDefault();
        console.log(loginFormData);
    }

    return <div className="login">
        <div className="main-container">
            <h1> Sign in to yout account</h1>
            <form onSubmit={submitHandler}>
                <input type="email" placeholder="Enter email address" name="user"
                    onChange={formHandler} value={loginFormData.user} />
                <input type="password" placeholder="Enter password" name="password"
                    onChange={formHandler} value={loginFormData.password} />
                <button type="submit">Log in</button>
            </form>
        </div>
    </div>
}