import { Link, useNavigate } from "react-router-dom";

export default function NotFound404() {

    const navigate = useNavigate();

    return <div className="main-container">
        <h1>Sorry, the page you were looking for was not found.</h1>
        <button onClick={()=> navigate("/")} className="black">Return to home page</button>
    </div>
}