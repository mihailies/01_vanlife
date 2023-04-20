export async function getVans(vanId?: string) {

    let url = vanId ? `/api/vans/${vanId}` : "/api/vans";
    let res = await fetch(url);
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    let data = await res.json();
    return data.vans;
}

export async function getHostVans(vanId?: string) {

    let url = vanId != undefined ? `/api/host/vans/${vanId}` : "/api/host/vans";
    let res = await fetch(url);

    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    let data = await res.json();
    // if(vanId != undefined){
    //     return data.vans[0]
    // }
    return data.vans;
}

export async function loginUser(creds: {email: string, password: string}) {    
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}