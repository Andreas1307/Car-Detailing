import React from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import '../App.css';

const Navbar = () => {
    const [isTrue, setTrue] = useState(false);
    return (
        <nav>
            <img src="./img/logo.png" alt="Logo" />
            <div style={{ right: isTrue ? "0px" : "-190px" }} className="navOpt">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
                <span onClick={() => setTrue(false)}>
                    <FontAwesomeIcon icon={faClose} />
                </span>
            </div>
            <span onClick={() => setTrue(true)}>
                <FontAwesomeIcon icon={faBars} />
            </span>
            <div>
                <button>Book</button>
            </div>
        </nav>
    );
};
export default Navbar