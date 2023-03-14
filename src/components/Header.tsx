import { Link, NavLink } from 'react-router-dom'
import logopng from './../assets/logog.png'

export default function Header() {
    return <nav>
        <Link className='logo' to="/">
            <img src={logopng} />
        </Link>
        <NavLink to="about"
            className={({ isActive }) => isActive ? "isActive" : ""}>About</NavLink>
        <NavLink to="vans"
            className={({ isActive }) => isActive ? "isActive" : ""}>Vans</NavLink>
        <NavLink to="host"
            className={({ isActive }) => isActive ? "isActive" : ""}>Host</NavLink>
    </nav>
}