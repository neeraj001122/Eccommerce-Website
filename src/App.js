import React, {useState, useContext}  from 'react';
import Header from './components/Header/Header';
import ItemList from './components/List/ItemList';
import Cart from './components/Cart/Cart';
import CartContextProvider from './Store/CartContextProvider';
import { Switch, Route} from 'react-router-dom';
import AboutPage from './components/Pages/AboutPage';
import HomePage from './components/Pages/HomePage';
import ContactUs from './components/Pages/ContactUs';
import ItemPage from './components/ItemPages.js/ItemPage';
import LoginPage from './components/Login Page/LoginPage';
import Cartctx from './Store/creat-context';


function App() {

  const productsArr = [
    {
      key:'1',
      title: "Album 1",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      
      quantity:1
    },

    {
      key:'2',
      title: "Album 2",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

        quantity:1  
    },

    {
      key:'3',
      title: "Album 3",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

        quantity:1  
    },

    {
      key:'4',
      title: "Album 4",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",

        quantity:1  
    },
  ];


  const [showCart, setShowCart] = useState(false)
  const cartctx = useContext(Cartctx)
  const logged = cartctx.loggedIn
  const showCartHandler = () => {
     setShowCart(true)
  };

  const removeCartHandler = () => {
    setShowCart(false)
  };

  return (
    <div>
    <CartContextProvider>
    <Switch>
      {!logged && <Route path='/Auth'>
        <LoginPage />
      </Route>}
    <Route path="/about">
      <AboutPage />
    </Route>
    <Route path="/home">
      <HomePage />
    </Route>
    <Route path='/contactus'>
        <ContactUs />
      </Route>
      <Route path="/:productId">
      {showCart && <Cart onClose={removeCartHandler}></Cart>}
      <ItemPage onOpen={showCartHandler} itemList={productsArr} />
      </Route>
    <Route path="" >
      {showCart && <Cart onClose={removeCartHandler}></Cart>}
      <Header  />
      <ItemList itemList={productsArr} onOpen={showCartHandler} /> 
      </Route>
      </Switch>
    </CartContextProvider>
    </div>
  );
}

export default App;