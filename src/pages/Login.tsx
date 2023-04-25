import { Form, useLoaderData, useNavigation, useActionData, Navigate } from "react-router-dom";
import { loginUser } from "../api";
import { log } from "../util";


export function loader(par: { request: any }) {
    const { request } = par;
    return {
        message: new URL(request.url).searchParams.get("message"),
        redirectTo: new URL(request.url).searchParams.get("redirectTo") || "/host"
    }
}

export interface AuthLoginData {
    loggedInSuccess: boolean;
    message?: string;
    error?: string;
}

export async function action(act: any): Promise<AuthLoginData> {
    const request: Request = act.request;
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    let actionData: AuthLoginData = await loginUser({ email, password }).then(data => {
        console.log(data);
        localStorage.setItem("loggedin", "true")
        return { loggedInSuccess: true, message: "" };
    }).catch((e) => {
        return { loggedInSuccess: false, error: e.message };
    }).finally(() => {
        return { loggedInSuccess: false, message: "" };
    })

    return actionData
}

export function Login() {
    const loaderData = useLoaderData() as { message: string, redirectTo: string };    
    const navigation = useNavigation();
    const actionData: AuthLoginData = useActionData() as AuthLoginData;

    return <div className="login">
        <div className="main-container">
            {actionData?.loggedInSuccess && <Navigate to={loaderData.redirectTo} />}
            <h1> Sign in to yout account</h1>
            {loaderData.message && <h3 style={{ color: "red" }}>{loaderData.message}</h3>}
            {actionData?.error && <h3 style={{ color: "red" }}>{actionData.error}</h3>}
            <Form replace method="post">
                <input type="email" placeholder="Enter email address" name="email" />
                <input type="password" placeholder="Enter password" name="password" />
                <button type="submit" disabled={navigation.state === "submitting"}>
                    {navigation.state === "submitting" ? "Loging in..." : "Log in"}
                </button>
            </Form>
        </div>
    </div>
}