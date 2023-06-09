import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const openCartHandler = () => {
    setIsCartOpen(true);
  };
  const closeCartHandler = () => {
    setIsCartOpen(false);
  };
  return (
    <CartProvider>
      {isCartOpen && <Cart onCartClose={closeCartHandler} />}
      <Header onCartOpen={openCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
