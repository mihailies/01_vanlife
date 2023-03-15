import { useOutletContext } from "react-router-dom";
import { VanData } from "../vans/Vans";


export default function HostVanPhotos() {
    const { van } = useOutletContext() as { van: VanData };
    return <section>
        <img src={van.imageUrl} style={{ width: "150px", height: "150px" }} />
    </section>
}