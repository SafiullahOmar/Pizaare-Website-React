import React ,{useState} from 'react'
import logo from "../Assets/pizza.jpeg";
import {Link} from "react-router-dom";
import {} from "../Style/navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder';
function Navbar() {

    const[openLinks,setOPenLinks]=useState(false);
    const toggleNavbar=()=>{
        setOPenLinks(!openLinks);

    };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={logo} alt="logo" />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/home">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon></ReorderIcon>
        </button>
      </div>
    </div>
  );
}

export default Navbar
    