import React from "react";
import classes from './Item.module.css'
import { useContext } from "react";
import Cartctx from "../../Store/creat-context";


const ItemList = () => {
  const productsArr = [
    {
      title: "Album 1",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      
      quantity:1
    },

    {
      title: "Album 2",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

        quantity:1  
    },

    {
      title: "Album 3",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

        quantity:1  
    },

    {
      title: "Album 4",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",

        quantity:1  
    },
  ];
  const ctx = useContext(Cartctx)
  const addItemHandler = (item) => {
    ctx.addItem(item)
  };

  let Items = productsArr.map((item) => {
    return (
        <div key={item.title} className={classes.box}>
      <div>
        <div className={classes.album}>{item.title}</div>{" "}
        <div className={classes.picture}>
          <img src={item.imageUrl} alt={item.title} />
        </div>{" "}
        <div className={classes.price}>{item.price}</div>
        <div className={classes.button_List}>
        <button onClick={addItemHandler.bind(this, item)}>Add to Cart</button>
        </div>
      </div>
      </div>
    );
  });

  return <React.Fragment>
    <h3 className={classes.music}> Music </h3>
    {Items}
    </React.Fragment>;
};

export default ItemList;
