import { useNavigate } from "react-router-dom"

export default function About() {
    const navigate = useNavigate();
    return <div className="about">

        <img className="about-img" />
        <div className="main-container">
            <h1>
                Don’t squeeze in a sedan when you could relax in a van.
            </h1>

            <p>
                Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)
            </p>

            <p>
                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
            </p>

            <div className="orange-section">
                <h2>
                    Your destination is waiting.<br/>                    
                    Your van is ready.
                </h2>
                <br />      
                <button className="black"
                 onClick={() => {
                    navigate("/vans")
                 }}>Explore our vans</button>
            </div>
        </div>

    </div>
}