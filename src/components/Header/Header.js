import React from "react";
import classes from './Header.module.css'

const Header = () => {
    return (
        <React.Fragment> 
            <p className={classes.up}>Home       Store      About</p>
            <h1 className={classes.down}>Neffex Legendry showcase</h1>
        </React.Fragment>
    )
}

export default Header;