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
    //if item already in the cart increase number
    if (cart.some((product) => product.id === id)) {
      setCart(
        cart.map((product) => {
          if (product.id !== id) return product;
          return { ...product, quantity: product.quantity + quantity };
        })
      );
    } else {
      //set cart with new item
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
  }
  //get the quantity of items in the cart 
  const totalQuantity = cart.reduce((acc, obj) => {
    return acc + obj.quantity;
  }, 0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shopping-cart" element={<Home />} />
        <Route
          path="/catalog"
          element={
            <Catalog addToCart={addToCart} totalQuantity={totalQuantity} />
          }
        />
        <Route
          path="/catalog/:id"
          element={
            <Product addToCart={addToCart} totalQuantity={totalQuantity} />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart cart={cart} setCart={setCart} totalQuantity={totalQuantity} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;