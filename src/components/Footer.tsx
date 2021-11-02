import React from 'react';
import { GalleryMobile, socialIcons } from './data';

const Footer = () => {
    return (
        <>
            {GalleryMobile.map(pic => {
                return (
                    <img src={pic.img} alt={pic.id + " footer pic"} />
                )
            })}
            <div>
                <ul>
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                </ul>
            </div>
            {socialIcons.map(icon => { return <img src={icon.img} alt={icon.id + " icon"} /> })}
        </>
    )
}

export default Footer;