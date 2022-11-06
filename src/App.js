import React, {useState}  from 'react';
import Header from './components/Header/Header';
import ItemList from './components/List/ItemList';
import Cart from './components/Cart/Cart';
import CartContextProvider from './Store/CartContextProvider';
import { Switch } from 'react-router-dom';
import { Route } from "react-router-dom";
import AboutPage from './components/Pages/AboutPage';
import HomePage from './components/Pages/HomePage';


function App() {
  const [showCart, setShowCart] = useState(false)

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
    <Route path="/about">
      <AboutPage />
    </Route>
    <Route path="/home">
      <HomePage />
    </Route>
    <Route path="">
      {showCart && <Cart onClose={removeCartHandler}></Cart>}
      <Header onOpen={showCartHandler}></Header>
      <ItemList></ItemList>
      </Route>
      </Switch>
    </CartContextProvider>
    </div>
  );
}

export default App;