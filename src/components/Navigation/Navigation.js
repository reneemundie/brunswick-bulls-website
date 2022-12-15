import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import Logo from '../../assets/logo.png';


export default function Navigation() {
//   const [navOpen, setNavOpen] = useState(false)

//   const toggleNav = () => {
//     setNavOpen(!navOpen)
//   }

  return (
      <nav className="nav" id="nav">
        <ul className="nav-logo" id="nav-logo">
            <Link to="/"><img src={ Logo } alt="logo" id="nav-logo" /></Link>
        </ul>
        <ul className="nav-links" id="nav-links">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/clubinfo">CLUB INFO</Link></li>
            <li><Link to="/news-events">NEWS & EVENTS</Link></li>
            <li><Link to="/fixture">FIXTURE</Link></li>
            <li><Link to="/playerstats">PLAYER STATS</Link></li>
            <li><Link to="/contact">CONTACT US</Link></li>
        </ul>
      </nav>
  );
}