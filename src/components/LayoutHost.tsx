import { Link, NavLink, Outlet } from "react-router-dom";

export default function LayouHost() {
    return <div className="layout-host">
        <nav>
            <NavLink to="/host"
                end
                className={({ isActive }) => isActive ? "isActive" : ""}>Dashboard</NavLink>
            <NavLink to="/host/income"
                className={({ isActive }) => isActive ? "isActive" : ""}>Income</NavLink>
            <NavLink to="/host/vans"
                className={({ isActive }) => isActive ? "isActive" : ""}>Vans</NavLink>
            <NavLink to="/host/reviews"
                className={({ isActive }) => isActive ? "isActive" : ""}>Reviews</NavLink>
        </nav>
        <div style={{ marginLeft: "26px" }}>
            <Outlet />
        </div>

    </div>
}