import React, { useState, useEffect } from "react";

export const CartContext = React.createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(id, category, name, img, price, quantity) {
    if (isNaN(price)) return;

    quantity = parseInt(quantity);
    //if item already in the cart increase number
    if (cart.some((product) => product.id === id)) {
      setCart(
        cart.map((product) => {
          // set limit to 9
          if (product.id !== id || product.quantity + quantity > 9)
            return {
              ...product,
              quantity: 9,
            };
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
    <CartContext.Provider value={{ cart, addToCart, setCart, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
}