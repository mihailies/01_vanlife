import React, { useState } from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { getVans } from "../../api.js"

export interface VanData {
    id: string;
    name: string;
    price: string;
    description: string;
    imageUrl: string;
    type: string;
}

export function loader() {
    return getVans();
}

export default function Vans() {
    
    const [searchParams, setSearchParams] = useSearchParams();
    const type = searchParams.get("type") || "";
    const vans = useLoaderData() as VanData[];

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
            </div>
            <div className="vans-list">
                {elems}
            </div>
        </div>
    </div>
}

export function Van(props: { data: VanData, searchParams: URLSearchParams }) {
    const data = props.data;
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