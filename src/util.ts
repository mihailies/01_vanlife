
import { json, redirect } from "react-router-dom";

export function log(str: any) {
    console.log(str);
}

export async function requireAuth() {
    const isLoggedIn = false;
    if (!isLoggedIn) {        
        throw redirect("/login?message=You must login first.");
        // throw json(
        //     { message: "not logged in" },
        //     { status: 302 }
        // );
    }
}