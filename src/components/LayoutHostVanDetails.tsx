import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { VanData } from "../pages/vans/Vans";


export default function LayoutHostVanDetails() {

    const [van, setVan] = useState({} as VanData);
    const params = useParams();

    useEffect(() => {
        fetch("/api/host/vans/" + params.id)
            .then(res => res.json())
            .then(data => setVan(data.vans[0]))
    }, [])

    return <>
        <Link to={"../.."} relative="path">&larr; Back to all vans</Link>
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
                <NavLink to={"info"}
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
            <Outlet context={{ van:van }} />
        </div>
    </>
}

