import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";


const Header = () => {

  return (
    <header>
    <ul className={classes.up}>
      <li>
        <NavLink  to='/about'>About</NavLink>
      </li>
      <li>
        <NavLink  to=''>Store</NavLink>
      </li>
      <li>
        <NavLink  to='/home'>Home</NavLink>
      </li>
      <li>
        <NavLink to="/contactus">Contact Us</NavLink>
      </li>
    </ul>
      <h1 className={classes.down}>Neffex Legendry showcase</h1>
    </header>
  );
};

export default Header;
