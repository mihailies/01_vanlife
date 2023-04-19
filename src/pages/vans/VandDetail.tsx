import { Link, useLoaderData, useLocation, useParams } from "react-router-dom";
import { getVans } from "../../api";
import { VanData } from "./Vans";

export function loader(p: any) {
    const { params } = p;
    return getVans(params.id);
}

export default function VanDetail() {
    const location = useLocation();
    const data = useLoaderData() as VanData;

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