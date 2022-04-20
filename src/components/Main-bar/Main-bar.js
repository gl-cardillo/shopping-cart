import "./Main-bar.css";
import React, { useState } from "react";
import { BsBag, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

export function Mainbar({ totalQuantity }) {
  const [active, setActive] = useState(true);

  function showSearchbar() {
    setActive((active) => !active);
  }

  function handleSearch(e) {}

  return (
    <div className="main-bar">
      <div className="search-icon-container">
        {active ? (
          <div>
            <input type="text" id="search" onChange={(e) => handleSearch(e)} />
          </div>
        ) : (
          ""
        )}
        <BsSearch
          style={{ color: "white", fontSize: "26px" }}
          onClick={() => showSearchbar()}
        />
      </div>
      <div className="cart-icon-container">
        <Link to="/cart">
          <span className="cart-number">
            {totalQuantity !== 0 ? totalQuantity : ""}
          </span>
          <BsBag style={{ color: "white", fontSize: "28px" }} />
        </Link>
      </div>
    </div>
  );
}