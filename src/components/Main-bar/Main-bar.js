import "./Main-bar.css";
import React, { useState } from "react";
import { BsBag, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { products } from "../../data/data";

export function Mainbar({ totalQuantity }) {
  
  const [active, setActive] = useState(false);
  const [search, SetSearch] = useState([]);

  function showSearchbar() {
    setActive((active) => !active);
  }

  function handleSearch(e) {
    if (e.target.value === "") {
      SetSearch([]);
    } else {
      const newSearch = products.filter((product) => {
        return product.name
          .toLowerCase()
          .trim()
          .includes(e.target.value.toLowerCase().trim());
      });
      SetSearch(newSearch);
    }
  }
  return (
    <div className="main-bar">
      <div className="search-icon-container">
        {active ? (
          <div>
            <div>
              <input
                type="text"
                id="search"
                placeholder="Search..."
                onChange={(e) => handleSearch(e)}
              />
            </div>
            <div className="search-result">
              {search.map((product, index) => {
                return (
                  <Link
                    key={index}
                    to={`/catalog/${product.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <p>{product.name}</p>
                  </Link>
                );
              })}
            </div>
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