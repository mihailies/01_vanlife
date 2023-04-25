import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { VanData } from "../vans/Vans";
import { requireAuth } from "../../util";

export async function loader(data: { request: Request }) {
    await requireAuth(data.request);
    return getHostVans()
}

export default function HostVans() {
    const vans = useLoaderData() as VanData[];

    const vansList = vans.map(van => {
        return <Link key={van.id} to={van.id}>
            <div className="host-van" key={van.id}>
                <img src={van.imageUrl} />
                <div>
                    <h2>{van.name}</h2>
                    <h4>${van.price}/day</h4>
                </div>
            </div></Link>
    })

    return <div className="host-vans">
        <h1>Your listed vans</h1>
        <div>
            {vansList}
        </div>
    </div>
}