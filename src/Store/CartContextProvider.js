import { useState } from "react";
import Cartctx from "./creat-context";
const CartContextProvider = (props) => {
  const [items, setItems] = useState([])
const addItemHandler = (item) => {
   let newArray = [...items];
   let arrayHasItem = false
   newArray.forEach((iitem,index) => {
    if(iitem.title === item.title)
    {
        arrayHasItem=true;
        newArray[index].quantity++
    }
   })
   if(arrayHasItem === true)
   {
     setItems(newArray)
   }
   else{
    setItems([...items,item])
   }
   console.log(items)
};

const removeItemHandler = () => {

};

   const CartCtx = {
        items: items,
        quantity:0,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    };

    return <Cartctx.Provider value={CartCtx}>{props.children}</Cartctx.Provider>
};

export default CartContextProvider;