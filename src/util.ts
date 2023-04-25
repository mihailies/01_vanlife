
import { json, redirect } from "react-router-dom";

export function log(str: any) {
    console.log(str);
}

export async function requireAuth(request: Request) {
    const isLoggedIn = localStorage.getItem("loggedin");
    const redirectTo = (new URL(request.url)).pathname;

    if (!isLoggedIn) {
        throw redirect(
            `/login?message=You must login first.&redirectTo=${redirectTo}`
        );
        // throw json(
        //     { message: "not logged in" },
        //     { status: 302 }
        // );
    }
    return null;
}