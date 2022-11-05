import React from "react";
import { useContext } from "react";
import Cartctx from "../../Store/creat-context";
import classes from './Header.module.css'

const Header = (props) => {
    const cartctx = useContext(Cartctx)
    const cartshow = () => {
        props.onOpen()
    } 
    let tottal = 0
     cartctx.items.forEach(element => {
       tottal = tottal + element.quantity     
     }); 

    return (
        <React.Fragment> 
            <p className={classes.up}>Home       Store      About {<button className={classes.button} onClick={cartshow}>Cart {tottal}</button>}</p>
            <h1 className={classes.down}>Neffex Legendry showcase</h1>
        </React.Fragment>
    )
}

export default Header;