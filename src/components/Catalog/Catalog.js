import "./Catalog.css";
import React, { useState } from "react";
import { Mainbar } from "../Main-bar/Main-bar";
import { Card } from "../Card/Card";
import { products } from "../../data/data";

export function Catalog({ addToCart, quantity }) {
  const [category, setCategory] = useState(
    products.filter((product) => product.category === "Console")
  );
  const [selected, setSelected] = useState(0);

  const changeCategory = (n, newPage) => {
    setSelected(n);
    setCategory(products.filter((product) => product.category === newPage));
  };

  return (
    <div className="page">
      <Mainbar quantity={quantity} />
      <div className="catalog-page">
        <div className="sidebar">
          <ul>
            <li
              className={selected === 0 ? "selected" : ""}
              onClick={() => changeCategory(0, "Console")}
            >
              Consoles
            </li>
            <li
              className={selected === 1 ? "selected" : ""}
              onClick={() => changeCategory(1, "Accessorie")}
            >
              Accessories
            </li>
            <li
              className={selected === 2 ? "selected" : ""}
              onClick={() => changeCategory(2, "Game")}
            >
              Games
            </li>
          </ul>
        </div>
        <div className="catalog-content">
          {category.map((product) => (
            <Card key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
}