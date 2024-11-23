import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css';

const Testimonials = () => {
    const [isBoxOn, setBoxOn] = useState(false)
  const leftArrow = () => {
    setBoxOn(false)
  }
  const rightArrow = () => {
    setBoxOn(true)
  }

    return (
        <div className="testimonials">
            <button onClick={leftArrow}>▲</button>
            <button onClick={rightArrow}>▲</button>
            <h3>What Customers Say</h3>
            <h2>Clients Testimonials</h2>
            <div className="box">
               <div style={{left: isBoxOn ? "-100%" : "0%"}}>
                <span>
                    <img src="./img/client1.png" />
                    <p>
                    Absolutely outstanding service! I had my car detailed yesterday, and the results blew me away. The attention to detail was phenomenal—my car looks brand new inside and out! The team took the time to thoroughly clean every corner, from the carpets to the engine bay. They even managed to remove stains I thought were permanent. The shine on the exterior is flawless, and the interior smells amazing. I can’t believe how much better my car looks and feels. Highly recommend this service to anyone who wants their car to look and feel like it just rolled off the showroom floor. Worth every penny!
                    </p>
                    <h3>Sarah T.</h3>
                </span>
            </div>
            <div style={{right: isBoxOn ? "0%" : "-100%"}}>
                  <span>
                    <img src="./img/client2.png" />
                    <p>
                    I’ve used several detailing services in the past, but this one is by far the best. From start to finish, the service was top-notch. My car hasn't looked this good in years! The team was professional, friendly, and really took their time to make sure everything was spotless. The exterior had a perfect shine, and the interior was immaculate—no crumbs, no dust, and the upholstery was like new again. It feels like I’m driving a brand new car. I couldn’t be happier with the results and will definitely be coming back for regular detailing. Highly recommend!
                    </p>
                    <h3>John M.</h3>
                </span>
            </div> 
            </div>
            
        </div>
    )
}
export default Testimonials