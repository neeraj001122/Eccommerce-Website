import classes from './CartItem.module.css'
import Cartctx from '../../Store/creat-context'
import { useContext } from 'react';
const CartItem = () => {
  const cartctx = useContext(Cartctx)
  var totalAmount = 0;
    cartctx.data.forEach((items) => {
    totalAmount = totalAmount+(items.obj.price*items.obj.quantity)
  })
      return <div>
       {cartctx.data.map((item) => {
        return (
          <div className={classes.cart_header} key={Math.random()}>
            <span>
              {
                <img
                  className={classes.cart_picture}
                  src={item.obj.imageUrl}
                  alt={item.obj.title}
                ></img>
              }
              <span className={classes.cart_title}>{item.obj.title}</span>
            </span>
            <span className={classes.price}>{item.obj.price}</span>
            <span className={classes.quantity}>{'x '+item.obj.quantity} </span>
            <span className={classes.total}>{item.obj.quantity*item.obj.price}</span>
            <span>
              <button className={classes.cart_button}>Remove</button>
            </span>
          </div>
        );
      })}
      <div className={classes.div}>
      <strong>Total Amount</strong>
      <span>{'$'+totalAmount}</span>
      </div>
      <div className={classes.button_cart}>
        <button className={classes.buttoncart} >PURCHASE</button>
      </div>
      </div>
};

export default CartItem;