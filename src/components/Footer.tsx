import React from 'react';
import { GalleryMobile, socialIcons } from './data';
import logo from "../images/logo.svg";
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <ul className="pic-gallery">
                {GalleryMobile.map(pic => {
                    return (
                        <li className="pic-item"><img className="footer-img" src={pic.img} alt={pic.id + " footer pic"} /></li>
                    )
                })}

            </ul>
            <div className="footer-container">
                <img className="footer-logo" src={logo} alt="logo" />
                <ul>
                    <li className="footer-menu">About</li>
                    <li className="footer-menu">Services</li>
                    <li className="footer-menu">Projects</li>
                </ul>

                {socialIcons.map(icon => { return <img className="social-icons" src={icon.img} alt={icon.id + " icon"} /> })}
            </div>
        </>
    )
}

export default Footer;