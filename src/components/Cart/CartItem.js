import classes from './CartItem.module.css'

const CartItem = () => {
    const cartElements = [
        {
          title: "Albume 1",
      
          price: 100,
      
          imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      
          quantity: 2,
        },
      
        {
          title: "Albume 2",
      
          price: 50,
      
          imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      
          quantity: 3,
        },
      
        {
          title: "Albume 3",
      
          price: 70,
      
          imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      
          quantity: 1,
        },
      ];

      return <div>
       {cartElements.map((item) => {
        return (
          <div className={classes.cart_header} key={Math.random()}>
            <span>
              {
                <img
                  className={classes.cart_picture}
                  src={item.imageUrl}
                  alt={item.title}
                ></img>
              }
              <span>{item.title}</span>
            </span>
            <span>{item.price}</span>
            <span>
              <button className={classes.cart_button}>Remove</button>
            </span>
          </div>
        );
      })}
      </div>
};

export default CartItem;