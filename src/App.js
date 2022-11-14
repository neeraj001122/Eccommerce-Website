import React, {useState, useContext}  from 'react';
import Header from './components/Header/Header';
import ItemList from './components/List/ItemList';
import Cart from './components/Cart/Cart';
import CartContextProvider from './Store/CartContextProvider';
import { Switch, Route, Redirect} from 'react-router-dom';
import AboutPage from './components/Pages/AboutPage';
import HomePage from './components/Pages/HomePage';
import ContactUs from './components/Pages/ContactUs';
import ItemPage from './components/ItemPages.js/ItemPage';
import LoginPage from './components/Login Page/LoginPage';
import AuthContext from './Store/AuthenticationContext';


function App(props) {

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
  const authctx = useContext(AuthContext)
  const logged = authctx.loggedIn
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
      <Route path='/Auth'>
        <LoginPage />
      </Route>
     <Route path="/about">
      {!logged && <Redirect to='/auth' />}
      <AboutPage />
    </Route>
    <Route path="/home">
      <HomePage />
    </Route>
    <Route path='/contactus'>
    {!logged && <Redirect to='/auth' />}
        <ContactUs />
      </Route>
      <Route path="/:productId" >
      {showCart && <Cart onClose={removeCartHandler}></Cart>}
      <ItemPage onOpen={showCartHandler} itemList={productsArr} />
      </Route>
    <Route path="" exact>
      {showCart && <Cart onClose={removeCartHandler}></Cart>} 
      {!logged && <Redirect to='/auth' />}
      <Header  />
       <ItemList itemList={productsArr} onOpen={showCartHandler} /> 
      </Route>
      </Switch>
    </CartContextProvider>
    </div>
  );
}

export default App;