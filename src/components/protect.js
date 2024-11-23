import React from "react";
import { Link } from "react-router-dom"
import '../App.css';


const ProtectCar = () => {
    return (
        <div className="protect-car">
            <div>
                <h3>Car Care</h3>
                <h2>Protect Your Vehicle With <br /> Our Ceramic Layer</h2>
                <p>
                Our advanced ceramic coating protects your car from the elements, adding a durable, hydrophobic shield that repels water and dirt. Enjoy a lasting, glossy finish that enhances color depth and keeps your vehicle looking pristine for years.
                </p>
                <span>
                    <Link className="bookBtn">Book An Appointment</Link>
                    <Link className="contactBtn">Contact</Link>
                </span>
            </div>
            <img src="./img/protect-car.png" />
        </div>
    )
}

export default ProtectCar