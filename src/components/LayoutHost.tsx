import { Link, NavLink, Outlet } from "react-router-dom";

export default function LayouHost() {
    return <div className="layout-host">
        <nav>
            <NavLink to="."
                end
                className={({ isActive }) => isActive ? "isActive" : ""}>Dashboard</NavLink>
            <NavLink to="income"
                className={({ isActive }) => isActive ? "isActive" : ""}>Income</NavLink>
            <NavLink to="vans"
                className={({ isActive }) => isActive ? "isActive" : ""}>Vans</NavLink>
            <NavLink to="reviews"
                className={({ isActive }) => isActive ? "isActive" : ""}>Reviews</NavLink>
        </nav>
        <div className="main-container" >
            <Outlet />
        </div>

    </div>
}