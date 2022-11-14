import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import AuthContext from "../../Store/AuthenticationContext";


const Header = () => {
const authctx =  useContext(AuthContext)
const logged = authctx.loggedIn
const logoutHandler = () => {
  authctx.logout();
};
console.log(logged)
  return (
    <div>
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
      { logged &&
      <li>
        <button className={classes.button} onClick={logoutHandler}>Logout</button>
      </li>
      }
    </ul>
      <h1 className={classes.down}>Neffex Legendry showcase</h1>
    </div>
  );
};

export default Header;
