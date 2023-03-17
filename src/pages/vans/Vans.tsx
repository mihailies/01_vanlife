import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../../api.js"

export interface VanData {
    id: string;
    name: string;
    price: string;
    description: string;
    imageUrl: string;
    type: string;
}

export default function Vans() {
    const [vans, setVans] = React.useState([] as VanData[]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const type = searchParams.get("type") || "";

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans();
                setVans(data.vans)
            } catch (e) {
                setError(e as any);
            } finally {
                setLoading(false)
            }

        }
        loadVans()
    }, [])


    if (error) {
        return <div className="main-container"
            style={{ margin: "none" }}>
            <h4>!!! Error loading: {(error as any).message || ""}</h4>
        </div>
    }


    let filteredVans = vans;
    if (type) {
        filteredVans = vans.filter(van =>
            van.type == type
        )
    }

    let elems = filteredVans.map((el: VanData) => {
        return <Van key={el.id} data={el} searchParams={searchParams} />
    })




    return <div className="vans">
        <div className="main-container">
            <h1>
                Explore our van options
            </h1>
            <div className="filter-container">
                <button className={`van-type ${type == "simple" ? type : "default"}`}
                    onClick={() => setSearchParams({ type: "simple" })}>Simple</button>
                <button className={`van-type ${type == "luxury" ? type : "default"}`}
                    onClick={() => setSearchParams({ type: "luxury" })}>Luxury</button>
                <button className={`van-type ${type == "rugged" ? type : "default"}`}
                    onClick={() => setSearchParams({ type: "rugged" })}>Rugged</button>
                <button className="clear"
                    onClick={() => setSearchParams({})}>Clear filter</button>

                {/* <Link className={`van-type ${type == "simple" ? type : "default"}`} to={"?type=simple"}>Simple</Link>
                <Link className={`van-type ${type == "luxury" ? type : "default"}`} to={"?type=luxury"}>Luxury</Link>
                <Link className={`van-type ${type == "rugged" ? type : "default"}`} to={"?type=rugged"}>Rugged</Link>
                <Link className="clear" to={"."}>Clear filter</Link> */}
            </div>
            <div className="vans-list">

                {loading ? <div className="preloader-container">
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                </div> : null}

                {elems}
            </div>
        </div>
    </div>
}

export function Van(props: { data: VanData, searchParams: URLSearchParams }) {
    const data = props.data;
    // console.log(props.searchParams.toString());
    return <Link to={data.id}
        state={{ search: "?" + props.searchParams.toString() }}>
        <div className="van-content">
            <img src={data.imageUrl} />
            <div className="van-title-price">
                <h3>{data.name} </h3>
                <div className="van-price">
                    <h3>${data.price}</h3>
                    <span>/day</span>
                </div>
            </div>
            <div className={"van-type " + data.type}>{data.type}</div>
        </div>
    </Link>
}