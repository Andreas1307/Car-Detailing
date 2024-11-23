import React from 'react';
import '../App.css';
import { Link } from "react-router-dom"
import Navbar from '../components/navbar.js';
import Contact from '../components/contact.js';
import Faq from '../components/faq.js';
import Footer from '../components/footer.js';
import Services from '../components/services.js';
import Testimonials from '../components/testimonials.js';



const ContactPage = () =>{
    return (
        <div>
            <Navbar />
           

                <div className="protect-car">
            <div>
               <h3>We Are anywhere</h3>
               <h2>
                    We can come to you,<br /> or you can visit us!
                    </h2>
                    <p>
                    Enjoy flexible car detailing services! Whether we come to your location or you visit our facility, our expert team ensures flawless results. Experience the same high-quality care wherever you are. Choose the option that suits you best!
                    </p>
                <span>
                    <Link className='bookBtn'>Book An Appointment</Link>
                </span>
            </div>
            <img className='contactImg' src='./img/contact-img.png' />
        </div>
                
            <Contact />
            <Testimonials />
            <Footer />
            
        </div>
    )
}
export default ContactPage