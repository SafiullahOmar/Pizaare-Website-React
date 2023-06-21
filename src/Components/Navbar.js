import React from 'react'
import logo from "../Assets/pizza.jpeg";
import {Link} from "react-router-dom";
import {} from "../Style/navbar.css"
function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={logo} alt="logo" />
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </div>
  );
}

export default Navbar
    