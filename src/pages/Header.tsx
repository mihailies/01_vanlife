import { Link } from 'react-router-dom'
import logopng  from './../assets/logog.png'

export default function Header() {
    return <nav>
        <Link className='logo' to="/">
            <img src={logopng} />
        </Link>
        <Link to="about">About</Link>
        <Link to="vans">Vans</Link>
    </nav>
}