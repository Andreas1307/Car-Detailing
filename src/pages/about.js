import React from 'react';
import '../App.css';
import { Link } from "react-router-dom"
import Navbar from '../components/navbar.js';
import Contact from '../components/contact.js';
import Faq from '../components/faq.js';
import Footer from '../components/footer.js';
import OurTeam from '../components/ourTeam.js';

const AboutPage = () => {
    return (
        <div>
            <Navbar />
            <div className="protect-car">
            <div>
                <h3>About Us</h3>
                <h2>The Best Car Detailing <br /> Since 2001</h2>
                <p>
                Since 2001, we've been delivering top-tier car detailing services, transforming vehicles with precision and care. Using advanced techniques and premium products, we ensure every car shines inside and out. From deep interior cleaning to flawless exterior polishing, we provide comprehensive care. With decades of experience, we're your trusted partner in keeping your car pristine.
                </p>
            </div>
            <img src="./img/about-img.png" />
        </div>
            <OurTeam />
            <Faq />
            <Footer />
        </div>
    )
}
export default AboutPage