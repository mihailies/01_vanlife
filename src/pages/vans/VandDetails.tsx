import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { VanData } from "./Vans";
export default function VanDetails() {
    const params = useParams();
    const [data, setVanData] = useState({} as VanData);
    const location = useLocation();

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(resData => setVanData(resData.vans))

    }, []);

    const prevSearchParams = location.state?.search || "";

    return <div className="van-details-content">
        <div className="main-container">
            <Link to={`..${prevSearchParams}`}
                relative="path"
            >&larr; Back to all vans</Link>
            <img src={data.imageUrl} />
            <div className={"van-type " + data.type}>{data.type}</div>
            <h1>{data.name} </h1>
            <div className="van-price">
                <h3>${data.price}</h3>
                <span>/day</span>
            </div>
            <div>
                {data.description}
            </div>
            <button className="">Rent this van</button>
        </div>
    </div>

}