import React from "react";
import classes from './Item.module.css'
import Button from "../UI/Button";


const ItemList = () => {
  const productsArr = [
    {
      title: "Album 1",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Album 2",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Album 3",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Album 4",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  let Items = productsArr.map((item) => {
    return (
        <section>
      <div key={item.title}>
        <div className={classes.album}>{item.title}</div>{" "}
        <div className={classes.picture}>
          <img src={item.imageUrl} alt={item.title} />
        </div>{" "}
        <div className={classes.price}>{item.price}</div>
        <div className={classes.button}>
        <Button>Add to Cart</Button>
        </div>
      </div>
      </section>
    );
  });

  return <React.Fragment>
    <h3 className={classes.music}> Music </h3>
    {Items}
    </React.Fragment>;
};

export default ItemList;
