import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLoaderData, useParams } from "react-router-dom";
import { getHostVans } from "../../api";
import { VanData } from "../vans/Vans";
import { requireAuth } from "../../util";

export async function loader(data:{params: any, request: Request}) {
    await requireAuth(data.request);
    return getHostVans(data.params.id);
}

export default function HostVanDetail() {
    const van = useLoaderData() as VanData;

    return <>
        <Link to={".."} relative="path">&larr; Back to all vans</Link>
        <div className="host-van-details">
            <div className="top-details" >
                <img src={van.imageUrl} />
                <div>
                    <div className={"van-type " + van.type}>{van.type}</div>
                    <h1>{van.name}</h1>
                    <h3>${van.price} <small>/ day</small></h3>
                </div>
            </div>
            <nav>
                <NavLink to={"."}
                    end
                    className={({ isActive }) => isActive ? "isActive" : ""} >
                    Details</NavLink>
                <NavLink to={"pricing"}
                    className={({ isActive }) => isActive ? "isActive" : ""} >
                    Pricing</NavLink>
                <NavLink to={"photos"}
                    className={({ isActive }) => isActive ? "isActive" : ""} >
                    Photos</NavLink>
            </nav>
            <Outlet context={{ van }} />
        </div>
    </>
}

