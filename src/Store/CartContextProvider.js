import { useState } from "react";
import Cartctx from "./creat-context";
import axios from "axios";
const CartContextProvider = (props) => {
   const [items, setItems] = useState([])
   const email = localStorage.getItem('email')
   const [cartData, setCartData] = useState([])
   const addItemHandler = async(item) => {
   let arrayHasItem = false;
   console.log(cartData)
   cartData.forEach((iitem) => {
    if(iitem.obj.title === item.title)
    {
        arrayHasItem=true;
        // newArray[index].quantity++
    }
   })
   if(arrayHasItem === true)
   {
    alert('Item has already been add')
   }
   else{
    setItems([...items,item])
    const obj={
      ...item
    }
    const res = await axios.post(`https://crudcrud.com/api/5fd58db7d0dc48069b4680b8595b4d9a/cart${email}`,{
      obj
    })
    console.log(res)
   }
   console.log(cartData)
   console.log(items)
};

const removeItemHandler = () => {

};

const cartResHandler = async() => {
  const email = localStorage.getItem('email')
  const res =  await axios.get(`https://crudcrud.com/api/5fd58db7d0dc48069b4680b8595b4d9a/cart${email}`)
   setCartData(res.data)
}

const CartCtx = {
   items: items,
   quantity:0,
   addItem: addItemHandler,
   removeItem: removeItemHandler,
   resCart:cartResHandler,
   data:cartData
};
return (
   <Cartctx.Provider value={CartCtx} >{props.children}</Cartctx.Provider>
)
};

export default CartContextProvider;