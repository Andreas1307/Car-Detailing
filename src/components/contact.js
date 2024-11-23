import React from "react";
import '../App.css';


const Contact = () => {
    return(
        <div className="contact">
            <div className="box">
                <h3>Contact Us Now</h3>
                <h2>Get In Touch</h2>
                <p>
                We’d love to hear from you! Whether you have questions, want to schedule an appointment, or need more details about our services, our team is here to assist you. Contact us today via phone, email, or our online form. Let us bring your car back to its showroom shine – we’re just a message away!
                </p>
                <div>
                <h4>📞</h4>
                <span>
                    <h1>Phone</h1>
                    <p>123-456-789</p>
                </span>
                </div>
                <div>
                <h4>✉</h4>
                <span>
                    <h1>Email</h1>
                    <p>info@luxeautospa</p>
                </span>
                </div>
            </div>
            <div className="clientInfo">
                <div>
                    <span>
                        <p>Name</p>
                        <input type="text" />
                    </span>
                    <span>
                        <p>Surname</p>
                        <input type="text" />
                    </span>
                </div>
                <div>
                    <span>
                        <p>Phone</p>
                        <input type="text" />
                    </span>
                    <span>
                        <p>Email</p>
                        <input type="email" />
                    </span>
                </div>
                <div>
                    <p>Enter Message</p>
                    <textarea></textarea>
                </div>
                <button>Send</button>
            </div>
        </div>
    )
}
export default Contact