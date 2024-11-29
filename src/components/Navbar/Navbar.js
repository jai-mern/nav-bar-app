import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">MyApp</Link>
      </div>
      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobile ? "✖" : "☰"}
      </button>
      <ul className={isMobile ? "nav-links nav-links-mobile" : "nav-links"}>
        <li>
          <Link to="/" onClick={() => setIsMobile(false)}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsMobile(false)}>About</Link>
        </li>
        <li>
          <Link to="/services" onClick={() => setIsMobile(false)}>Services</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsMobile(false)}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
