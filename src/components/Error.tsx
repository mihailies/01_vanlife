import { Navigate, useRouteError } from "react-router-dom";


export default function Error() {
    const err: any = useRouteError();

    if (err.status == 302 &&
        err.headers?.map?.location) {
        return <Navigate to={err.headers?.map?.location} />
    }

    const sadFaceStyle: React.CSSProperties = {
        display: "inline-flex",
        border: "1px solid rgb(159 160 128)",
        borderRadius: "30px",
        padding: "5px",
        width: "60px",
        height: "60px",
        justifyContent: "center",
        alignItems: "center",
        transform: "rotate(90deg)",
        boxShadow: "rgb(148 148 148 / 61%) 12px -1px 13px 0px",
        backgroundColor: "rgb(255 251 143)",
        color: "rgb(112 111 78)",

    }

    return <div className="main-container" style={{ margin: 0 }}>
        <h1><pre><div style={sadFaceStyle}>:(</div> Error !</pre></h1>
        <h3>{err.message}</h3>
        <h4>{err.statusText}</h4>
        <h4>{err.status}</h4>
    </div>
}