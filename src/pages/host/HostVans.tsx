import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import VanDetails from "../vans/VandDetails";
import { VanData } from "../vans/Vans";

export default function HostVans() {
    const [vans, setVans] = useState([] as VanData[]);
    useEffect(() => {
        fetch("/api/host/vans")
            .then((res) => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vansList = vans.map(van => {
        return <Link key={van.id} to={"/host/vans/" + van.id + "/info"}>
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