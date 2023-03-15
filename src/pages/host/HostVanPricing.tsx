import { useOutletContext } from "react-router-dom"
import { VanData } from "../vans/Vans";

export default function HostVanDetail() {
    const { van } = useOutletContext() as { van: VanData };

    return <section>
        <h3>Prices: ${van.price}/day</h3>
    </section>
}