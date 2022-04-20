import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Catalog } from "./components/Catalog/Catalog";
import { Product } from "./components/Products/Products";
import { Cart } from "./components/Cart/Cart";

function App() {
  const [cart, setCart] = useState([]);
  function addToCart(id, category, name, img, price, quantity) {
    quantity = parseInt(quantity);
    setCart((previous) => [
      {
        id: id,
        category: category,
        name: name,
        img: img,
        price: price,
        quantity: quantity,
      },
      ...previous,
    ]);
  }

  const totalQuantity = cart.reduce((acc, obj) => {
    return acc + obj.quantity;
  }, 0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/catalog"
          element={<Catalog addToCart={addToCart} quantity={totalQuantity} />}
        />
        <Route
          path="/catalog/:id"
          element={<Product addToCart={addToCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;