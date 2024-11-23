import React from 'react';
import '../App.css';
import { Link } from "react-router-dom"
import Navbar from '../components/navbar.js';
import Contact from '../components/contact.js';
import Faq from '../components/faq.js';
import Footer from '../components/footer.js';
import Services from '../components/services.js';
import Testimonials from '../components/testimonials.js';

const ServicesPage = () => {
    return (
        <div>
            <Navbar />
            <Services />
            <div className="protect-car">
            <div>
                <h3>We Are The Best</h3>
                <h2>Deep Washing</h2>
                <p>
                Our Deep Washing service goes beyond surface cleaning, delivering a comprehensive cleanse that restores your vehicle's brilliance. Using advanced techniques and high-quality products, we remove dirt, grime, and environmental contaminants from every corner of your car's exterior.
                </p>
                <h4>1-2 Hours</h4>
                <span>
                    <h1>$99</h1>
                    <Link className='bookBtn'>Book An Appointment</Link>
                </span>
            </div>
            <img src="./img/wash.jpg" />
        </div>
        <div className="protect-car secDiv">
            <div>
                <h3>Choose Us</h3>
                <h2>Interior Detail</h2>
                <p>
                Interior detailing provides a deep clean for your car’s cabin, revitalizing every surface. From carpets to leather, we remove dirt, stains, and odors, leaving your vehicle fresh, sanitized, and looking like new.
                </p>
                <h4>2-3 Hours</h4>
                <span>
                    <h1>$150</h1>
                    <Link className='bookBtn'>Book An Appointment</Link>
                </span>
            </div>
            <img src="./img/interior-detail.png" />
        </div>
        <div className="protect-car">
            <div>
                <h3>We Are Here</h3>
                <h2>Wheel Detail</h2>
                <p>
                Our Car Wheel Detailing service meticulously cleans and restores your wheels to their original shine. Using specialized tools and premium cleaners, we remove brake dust, grime, and stubborn stains, enhancing both appearance and longevity for a flawless, head-turning finish
                </p>
                <h4>30-45 Minutes</h4>
                <span>
                    <h1>$50</h1>
                    <Link className='bookBtn'>Book An Appointment</Link>
                </span>
            </div>
            <img src="./img/wheel-detail.png" />
        </div>
        <div className="protect-car secDiv">
            <div>
                <h3>Choose Us</h3>
                <h2>Lether Detail</h2>
                <p>
                Our Leather Detailing service restores and protects your car’s leather surfaces. We use premium conditioners and gentle cleaning techniques to remove stains, restore suppleness, and shield against cracking, ensuring your leather stays luxurious and long-lasting.
                </p>
                <h4>1-2 Hours</h4>
                <span>
                    <h1>$110</h1>
                    <Link className='bookBtn'>Book An Appointment</Link>
                </span>
            </div>
            <img src="./img/lether-detail.png" />
        </div>
        <div className="protect-car">
            <div>
                <h3>We Are Fast</h3>
                <h2>Ceramic Layer</h2>
                <p>
                Our Ceramic Layer service provides a durable, high-gloss coating that protects your car's paint from scratches, UV rays, and contaminants. Enjoy a showroom shine and long-lasting protection with this advanced, professional-grade treatment.
                </p>
                <h4>1-2 Hours</h4>
                <span>
                    <h1>$170</h1>
                    <Link className='bookBtn'>Book An Appointment</Link>
                </span>
            </div>
            <img src="./img/ceramic.jpg" />
        </div>
        <div className="protect-car secDiv">
            <div>
                <h3>Choose Us</h3>
                <h2>Car Polishing</h2>
                <p>
                Car Polishing restores your vehicle’s shine by eliminating scratches, swirl marks, and oxidation. Using advanced techniques and premium products, we enhance the paint’s clarity and protect its finish, ensuring your car looks as good as new.
                </p>
                <h4>2-3 Hours</h4>
                <span>
                    <h1>$210</h1>
                    <Link className='bookBtn'>Book An Appointment</Link>
                </span>
            </div>
            <img src="./img/lether-detail.png" />
        </div>
            <Testimonials />
            <Footer />
        </div>
    )
}
export default ServicesPage