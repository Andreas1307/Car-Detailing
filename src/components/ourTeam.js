import React from "react";
import '../App.css'


const OurTeam = () => {
    return (
        <div className="our-team">
            <h3>Our Team</h3>
            <h2>Professional Experts Team</h2>
            <div>
                <span>
                    <img src="./img/team1.png" />
                    <h1>Morgan Reed</h1>
                    <p>Customer Service Manager</p>
                </span>
                <span>
                    <img src="./img/team2.png" />
                    <h1>Taylor Brooks</h1>
                    <p>Protection Specialist</p>
                </span>
                <span>
                    <img src="./img/team3.png" />
                    <h1>Alex Carter</h1>
                    <p>Lead Detailer</p>
                </span>
                <span>
                    <img src="./img/team4.png" />
                    <h1>Jordan Rivers</h1>
                    <p>Interior Specialist</p>
                </span>
            </div>
        </div>
    )
}
export default OurTeam