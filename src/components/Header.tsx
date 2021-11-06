import React from 'react';
import logo from "../images/logo.svg";
import arrow from "../images/icon-arrow-down.svg";

const Header = () => {
    return (
        <>
            <div className="background">
                <img src={logo} alt="logo" />
                <ul>
                    <li> About</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>

                <h1>{"We are creatives".toUpperCase()}</h1>
                <img src={arrow} alt="arrow" />
            </div>
        </>
    )
}

export default Header;