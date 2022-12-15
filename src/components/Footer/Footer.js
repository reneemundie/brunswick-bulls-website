import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Footer.css';
import PhoneIcon from '../../assets/phone.png';
import EmailIcon from '../../assets/email.png';
import LocationIcon from '../../assets/location.png';
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';
import Twitter from '../../assets/twitter.png';

const Footer = () => {
  return (
    <>
        <footer className="footer" id="footer">
            <ul className="policies" id="policies">
                <h3>POLICIES</h3>
                <li><CustomLink to="/termsofservice">TERMS OF SERVICE</CustomLink></li>
                <li><CustomLink to="/privacypolicy">PRIVACY POLICY</CustomLink></li>
            </ul>
            <ul className="contact" id="contact">
                <h3>CONTACT INFO</h3>
                <li>+61 407 032 307 <img src={ PhoneIcon } alt="phone icon" id="phone-icon" /></li>
                <li><a href="mailto:admin@brunswickbulls.com">ADMIN@BRUNSWICKBULLS.COM <img src={ EmailIcon } alt="email icon" id="email-icon" /></a></li>
                <li>BRUNSWICK, MELBOURNE <img src={ LocationIcon } alt="location icon" id="location-icon" /></li>
            </ul>
            <ul className="socials" id="socials">
                <li><a href="https://facebook.com"><img src={ Facebook } alt="Facebook icon" id="facebook" /></a></li>
                <li><a href="https://instagram.com"><img src={ Instagram } alt="Instagram icon" id="instagram" /></a></li>
                <li><a href="https://twitter.com"><img src={ Twitter } alt="Twitter icon" id="twitter" /></a></li>
            </ul>
            <ul className="copyright" id="copyright">
                <li><CustomLink to="/copyrightpolicy">&copy; 2022, BRUNSWICK BULLS</CustomLink></li>
            </ul>
        </footer>
    </>
  );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={ isActive ? "active" : "" }>
            <Link to={ to } { ...props }>
                { children }
            </Link>
        </li>
    );
}

export default Footer;