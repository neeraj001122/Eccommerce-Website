import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Cartctx from "../../Store/creat-context";
import classes from "./Header.module.css";


const Header = (props) => {
  const cartctx = useContext(Cartctx);
  const cartshow = () => {
    props.onOpen();
  };
  let tottal = 0;
  cartctx.items.forEach((element) => {
    tottal = tottal + element.quantity;
  });

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
      <button className={classes.button} onClick={cartshow}>
        Cart {tottal}
      </button>
    </ul>
      <h1 className={classes.down}>Neffex Legendry showcase</h1>
    </header>
  );
};

export default Header;
