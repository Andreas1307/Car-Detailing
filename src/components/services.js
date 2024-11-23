import React from "react";
import { Link } from "react-router-dom"
import '../App.css';

const Services = () => {
    return (
        <div className="services">
            <h3>Premium Services</h3>
            <h2>Transform your car with <br /> precision detailing</h2>
            <div>
                <span>
                    <img src="./img/wash.jpg" />
                    <p>Deep Wash</p>
                </span>
                <span>
                    <img src="./img/interior-detail.png" />
                    <p>Interior Detail</p>
                </span>
                <span>
                    <img src="./img/wheel-detail.png" />
                    <p>Wheel Detail</p>
                </span>
                <span>
                    <img src="./img/lether-detail.png" />
                    <p>Lether Detail</p>
                </span>
                <span>
                    <img src="./img/ceramic.jpg" />
                    <p>Ceramic Layer</p>
                </span>
                <span>
                    <img src="./img/polish.jpg" />
                    <p>Car Polishing</p>
                </span>
            </div>
        </div>
    )
}
export default Services