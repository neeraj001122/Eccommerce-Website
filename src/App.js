import React, {useState}  from 'react';
import Header from './components/Header/Header';
import ItemList from './components/List/ItemList';
import Cart from './components/Cart/Cart';
import CartContextProvider from './Store/CartContextProvider';
function App() {
  const [showCart, setShowCart] = useState(false)

  const showCartHandler = () => {
     setShowCart(true)
  };

  const removeCartHandler = () => {
    setShowCart(false)
  };

  return (
    <CartContextProvider>
      {showCart && <Cart onClose={removeCartHandler}></Cart>}
      <Header onOpen={showCartHandler}></Header>
      <ItemList></ItemList>
    </CartContextProvider>
  );
}

export default App;