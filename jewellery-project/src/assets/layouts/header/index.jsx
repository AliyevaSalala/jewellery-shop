import React from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../images/site-logo-free-img.png";
import { useState } from "react";

import "./index.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="header-top">
          <img src={Logo} alt="logo" />
          {menuOpen ? (
            <FaTimes className="menu-icon" onClick={toggleMenu} />
          ) : (
            <FaBars className="menu-icon" onClick={toggleMenu} />
          )}
        </div>
        <div className={`header-bottom ${menuOpen ? "open" : ""}`}>
          <nav>
            <ul>
              <li>
                <NavLink to="/" className="navbar">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="navbar">
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink to="/store" className="navbar">
                  Store
                </NavLink>
              </li>
              <li>
                <NavLink to="/Earings" className="navbar">
                  Earings
                </NavLink>
              </li>
              <li>
                <NavLink to="/Rings" className="navbar">
                  Rings
                </NavLink>
              </li>
              <li>
                <NavLink to="/Necklace" className="navbar">
                  Necklace
                </NavLink>
              </li>
              <li>
                <NavLink to="/account" className="navbar">
                  My account
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="navbar">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="cards">
            <p>
              Cart/$<span>2400</span>
              <FaBasketShopping className="basket" />
              <sup className="count">0</sup>
            </p>{" "}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
