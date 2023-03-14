import React from "react";

export interface VanData {
    id: string;
    name: string;
    price: string;
    description: string;
    imageUrl: string;
    type: string;
}

export default function Vans() {
    const [vans, setVans] = React.useState([]);

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setVans(() => data.vans)
            })
    }, [])

    let elems = vans.map((el: VanData) => {
        return <Van key={el.id} data={el} />
    })


    return <div className="vans">
        <div className="main-container">
            <h1>
                Explore our van options
            </h1>
            <div className="vans-list">
                {elems}
            </div>
        </div>
    </div>
}

export function Van(props: { data: VanData }) {
    const data = props.data;
    return <div className="van-content">
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
}