import React, { Suspense, useState } from "react";
import { Link, useLoaderData, useSearchParams, defer, Await } from "react-router-dom";
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
    return defer({ vans: getVans() })
}

export default function Vans() {

    const [searchParams, setSearchParams] = useSearchParams();
    const type = searchParams.get("type") || "";
    const loaderData = useLoaderData() as { vans: Promise<VanData[]> };



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
            <Suspense fallback={<h2>Vans are loading...</h2>}>
                <Await resolve={loaderData.vans}>
                    {
                        (vans) => {
                            let filteredVans: VanData[] = vans;
                            if (type) {
                                filteredVans = vans.filter((van: VanData) =>
                                    van.type == type
                                )
                            }

                            let elems = filteredVans.map((el: VanData) => {
                                return <Van key={el.id} data={el} searchParams={searchParams} />
                            })
                            return <div className="vans-list">
                                {elems}
                            </div>                          
                        }
                    }
                </Await>
            </Suspense>

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