import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import Cartctx from "../../Store/creat-context";


const Header = () => {
const cartctx =  useContext(Cartctx)
const logged = cartctx.loggedIn
  return (
    <header>
    <ul className={classes.up}>
      {!logged && <li>
        <NavLink  to='/auth'>Login</NavLink>
      </li>}
      {logged && <li>
        <NavLink  to='/about'>About</NavLink>
      </li>}
      {logged && <li>
        <NavLink  to=''>Store</NavLink>
      </li>}
      <li>
        <NavLink  to='/home'>Home</NavLink>
      </li>
      {logged && <li>
        <NavLink to="/contactus">Contact Us</NavLink>
      </li>}
    </ul>
      <h1 className={classes.down}>Neffex Legendry showcase</h1>
    </header>
  );
};

export default Header;
