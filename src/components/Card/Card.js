import "./Card.css";
import React, { useState } from "react";
import { Quantity } from "../Quantity/Quantity";

import { Link } from "react-router-dom";

export function Card({ product, addToCart }) {
  const { id, category, name, img, price } = product;
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="card">
      <img src={img} alt={name} />
      <Link to={`${id}`} style={{ textDecoration: "none" }}>
        <h3>{name}</h3>
      </Link>
      <p>£ {price}</p>
      <Quantity quantity={quantity} setQuantity={setQuantity} />
      <button
        onClick={() => addToCart(id, category, name, img, price, quantity)}>
        Add to cart
      </button>
    </div>
  );
}
