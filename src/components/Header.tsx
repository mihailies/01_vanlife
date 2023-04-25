import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    return <nav>
        <Link className='logo' to="/">
            <img src="/logog.png" />
        </Link>
        <NavLink to="about"
            className={({ isActive }) => isActive ? "isActive" : ""}>About</NavLink>
        <NavLink to="vans"
            className={({ isActive }) => isActive ? "isActive" : ""}>Vans</NavLink>
        <NavLink to="host"
            className={({ isActive }) => isActive ? "isActive" : ""}>Host</NavLink>
        <Link to="login"           >
            <img
                src="user_icon.png"
                className="login-icon"
            />
        </Link>
        <button 
         title='(fro Development purpose) Clear loggedin loscal storage'
        onClick={() => localStorage.removeItem("loggedin")}>[logout]</button>
    </nav>
}