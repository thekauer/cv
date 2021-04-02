import './Footer.css'
import '../../index.css'
import hc from './images/hc.png'
import React from 'react';
const Footer = () => {
    return (
    <footer className="footer">
        <img className="hc" src={hc} alt="Nagy kontrasztos verzió" />
        <span className="right leftmost">UTF-8</span>
        <span className="right">CRLF</span>
    </footer>
    );
}


export default Footer;