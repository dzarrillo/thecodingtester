import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
    return(
        <footer className="footer" >
            <NavLink className="footer-link" to="#">About</NavLink>
            <NavLink className="footer-link" to="#">Contact Us</NavLink>
        </footer>
    );
    
}

export default Footer;