import React from 'react';
import logo from "../images/logo.svg"
import background from "../images/desktop/image-header.jpg"

const Header = () => {
    return (
        <>
            <div>
                <img src={background} alt="header background pic" style={{ width: '100%' }} />
                <img src={logo} alt="logo" />
                <ul>
                    <li> About</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
                <h1>{"We are creatives".toUpperCase()}</h1>
            </div>
        </>
    )
}

export default Header;