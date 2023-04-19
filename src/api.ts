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