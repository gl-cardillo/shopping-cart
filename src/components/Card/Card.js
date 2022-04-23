import "./Card.css";
import React, { useState, useContext } from "react";
import { Quantity } from "../Quantity/Quantity";
import { Link } from "react-router-dom";
import { CartContext } from "../../useContext/CartContext";

export function Card({ product }) {

  const { id, category, name, img, price } = product;
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useContext(CartContext);
  
  return (
    <div className="card">
      <img src={img} alt={name} />
      <Link to={`${id}`} style={{ textDecoration: "none" }}>
        <h3>{name}</h3>
      </Link>
      <p>£ {(Math.round(price * quantity * 100) / 100).toFixed(2)}</p>
      <Quantity quantity={quantity} setQuantity={setQuantity} />
      <button
        onClick={() => addToCart(id, category, name, img, price, quantity)}>
        Add to cart
      </button>
    </div>
  );
}
