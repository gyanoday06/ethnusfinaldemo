import React, { useState } from "react";
import { Link } from 'react-router-dom';
import wall2 from "../siteImages/wall2.jpg";
import wall4 from "../siteImages/wall4.jpg";
import img1 from "../siteImages/img1.png";
import img2 from "../siteImages/img2.png";

function HeaderNew() {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
       
            <header>
                <div className="owl-carousel owl-theme">
                    <div className="item">
                        <img src={wall2} alt="" />
                        <div className="cover">
                            <div className="container">
                                <div className="dropdown">
                                    <button className="dropbtn" onClick={toggleDropdown}>
                                        Hospitals <span className="caret"></span>
                                    </button>
                                    {showDropdown && (
                                        <div className="dropdown-content">
                                            <a href="#">Hospital 1 (City 1)</a>
                                            <a href="#">Hospital 2 (City 2)</a>
                                            <a href="#">Hospital 3 (City 3)</a>
                                        </div>
                                    )}
                                </div>
                                <div className="header-content">
                                    <div className="line"></div>
                                    <h2>Experience Top-Tier Health Services 🏥</h2>
                                    <h1>From Our Exceptional Team and State-of-the-Art Facilities 🌟</h1>
                                    <h4>24/7 Care, Unrivaled Affection, and Affordable Rates 💖🌼</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={wall4} alt="" />
                        </div>
                </div>
                 
            </header>

           
       
    );
}

export default HeaderNew;
