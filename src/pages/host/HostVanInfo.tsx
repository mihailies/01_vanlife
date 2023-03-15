import { useOutletContext } from "react-router-dom"
import { VanData } from "../vans/Vans";

export default function HostVanInfo() {
    const { van } = useOutletContext() as { van: VanData };

    return <section>
        <h4>Name: <span>{van.name}</span></h4>
        <h4>Category:<span> {van.type}</span></h4>
        <h4>Description: <span>{van.description}</span></h4>
        <h4>Visibility: <span>Public </span></h4>
    </section>

}