import React from "react";

const Cartctx =  React.createContext({
    items: [],
    quantity:0,
    addItem: () => {},
    removeItem: () => {}
})

export default Cartctx;