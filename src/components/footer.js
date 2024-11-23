import React from "react";
import '../App.css';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faSnapchat } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className="footer-box">
                <div className="box">
                    <h2>Help</h2>
                    <p>Customer Support</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Accessibility</p>
                    <p>Location</p>
                </div>
                <div className="box">
                    <h2>Menu</h2>
                    <Link >Home</Link>
                    <Link >About</Link>
                    <Link >Services</Link>
                    <Link >Contact</Link>
                </div>
                
                <div className="box">
                    <h2>Exterior Detailing</h2>
                    <p>Interior Detailing</p>
                    <p>Full Detail Package</p>
                    <p>Ceramic Coating</p>
                    <p>Paint Protectio</p>
                    <p>Headlight Restoration</p>
                </div>
                <div className="box">
                    <h2>Social Media</h2>
                    <div>
                   <span><FontAwesomeIcon icon={faFacebook} /></span> 
                   <span><FontAwesomeIcon icon={faTwitter} /></span> 
                   <span><FontAwesomeIcon icon={faInstagram} /></span> 
                   <span><FontAwesomeIcon icon={faSnapchat} /></span> 
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer