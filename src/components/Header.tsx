import React from 'react';
import logo from "../images/logo.svg";
import arrow from "../images/icon-arrow-down.svg";

const Header = () => {
    return (
        <>
            <div className="background">

                <ul>
                    <li className="header-menu logo"><img src={logo} alt="logo" /></li>
                    <li className="header-menu">About</li>
                    <li className="header-menu">Services</li>
                    <li className="header-menu">Projects</li>
                    <li className="header-menu">Contact</li>
                </ul>

                <h1 className="slogan">{"We are creatives".toUpperCase()}</h1>
                <img className="arrow" src={arrow} alt="arrow" />
            </div>
        </>
    )
}

export default Header;