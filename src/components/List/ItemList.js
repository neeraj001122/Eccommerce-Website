import React from "react";
import classes from './Item.module.css'
import { useContext, useEffect } from "react";
import Cartctx from "../../Store/creat-context";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const ItemList = (props) => {
  const cartctx = useContext(Cartctx);
  useEffect(() => {
    cartctx.resCart();
  }, [])
  const cartshow = () => {
    cartctx.resCart();
    props.onOpen();
  };
  let tottal = 0;
  cartctx.data.forEach((element) => {
    tottal = tottal + element.obj.quantity;
  });
  const ctx = useContext(Cartctx)
  const addItemHandler = async(item) => {
    ctx.addItem(item)
  };
  let Items = props.itemList.map((item) => {
    return (
        <div key={item.title} className={classes.box}>
      <div className={classes.div}>
        <div className={classes.album}>{item.title}</div>{" "}
        <Link to={'/'+item.key}>
        <div className={classes.picture}>
          <img className={classes.img} src={item.imageUrl} alt={item.title} />
        </div>{" "}
        </Link>
        <div className={classes.price}>{'$'+item.price}</div>
        <div className={classes.button_List}>
        <button onClick={addItemHandler.bind(this, item)}>Add to Cart</button>
        </div>
      </div>
      </div>
    );
  });

  return <React.Fragment>
      <button className={classes.button} onClick={cartshow}>
        Cart {tottal}
      </button>
    <h3 className={classes.music}> Music </h3>
    {Items}
    <Footer />
    </React.Fragment>;
};

export default ItemList;
