import React from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import Services from './components/services.js';
import ProtectCar from './components/protect.js';
import Banner from './components/banner.js'
import Testimonials from './components/testimonials.js';
import Contact from './components/contact.js';
import Faq from './components/faq.js';
import Footer from './components/footer.js';
import { Link } from "react-router-dom"

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className='homepage'>
        <div>
          <h3>Best Car Detail</h3>
          <h2>Book Your Detailing <br /> Appointment <br /> Online Today</h2>
          <p>
          Enjoy the convenience of booking your premium detailing service online. Choose your date, time, and package, and let us deliver a pristine, showroom-quality finish. Transform your vehicle – book today!
         </p>
          <span>
            <Link >Book an Appointment</Link>
            <Link className='contactBtn'>Contact</Link>
          </span>
        </div>
        <div>
          <img src='./img/pic1.png' />
        </div>
        <div>
        <img src='./img/pic2.png' />
        </div>
      </div>
      <div className='brilliance'>
        <div className='box'>
          <div className='sec-div'>
          <h3>Simply The Best</h3>
          <h2>Bringing Back Shine, <br /> Inside and Out</h2>
          <p>
          Our meticulous detailing process revives every inch of your vehicle, restoring that showroom shine both inside and out. From deep-cleaned interiors to a flawless exterior finish, we bring back the brilliance your car deserves
          </p>
          <div className='icon-div'>
          <div>
            <img src='./img/money-icon.png' />
            <span>
              <h2>Secure Transactions</h2>
              <p>Enjoy secure, hassle-free transactions every step.</p>
              </span>
          </div>
          <div>
            <img src='./img/car-icon.png' />
            <span>
              <h2>Showroom Standard</h2>
              <p>Get showroom-quality finish with our expert detailing.</p>
              </span>
          </div>
          </div>
        </div>
        </div>
        <div className='box'>
          <span className='info'>
            <h1>10</h1>
            <h2>PROFESSIONALS</h2>
          </span>
          <span className='info'>
            <h1>110</h1>
            <h2>Happy Customers</h2>
          </span>
          <span className='info'>
            <h1>118</h1>
            <h2>Cars Detailed</h2>
          </span>
        </div>
      </div>
      <div className='quality-services'>
        <div>
        <img src='./img/quality-2.png' />
        <img src='./img/quality-1.png' />
        </div>
        <div>
          <h3>Top Services</h3>
          <h2>Car Care You Can Trust, <br /> Quality You’ll Love</h2>
          <p>
          Our team is dedicated to delivering exceptional car care with attention to every detail. Using premium products and proven techniques, we make sure your car looks its best, every time. Trust us for results you’ll notice and quality you’ll love.
          </p>
          <span>
            <Link to={"/contact"}>Book An Appointment</Link>
            <Link>Contact</Link>
          </span>
        </div>
      </div>
      <Services />
      <ProtectCar />
      <Banner />
      <Testimonials />
      <Contact />
      <Faq />
      <Footer />
    </div>
  )
}
export default Homepage