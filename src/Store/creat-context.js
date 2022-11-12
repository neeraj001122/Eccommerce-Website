import React from "react";

const Cartctx =  React.createContext({
    items: [],
    quantity:0,
    addItem: () => {},
    removeItem: () => {},
    token:"",
    loggedIn:false,
    login:(token) => {}
})

export default Cartctx;