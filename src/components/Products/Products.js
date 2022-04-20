import "./Products.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useParams, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { products } from "../../data/data";
import { Mainbar } from "../Main-bar/Main-bar";
import { Quantity } from "../Quantity/Quantity";
import { IoIosArrowBack } from "react-icons/io";

export function Product({ addToCart, totalQuantity }) {
  const { id } = useParams();
  let navigate = useNavigate();

  const element = products.filter((product) => product.id === id);
  const { name, category, img, img1, img2, description, price } = element[0];

  const fadeImages = [img, img1, img2];
  const [quantity, setQuantity] = useState(1);

  function handleClick() {
    navigate(-1);
  }

  return (
    <div className="page">
      <Mainbar totalQuantity={totalQuantity}  />
      <div className="products-page">
        <div>
          <button className="back-arrow" onClick={handleClick}>
            <IoIosArrowBack style={{ fontSize: "30px" }} />
          </button>
        </div>
        <div className="slide-description">
          <div className="slide-container">
            <Fade duration={999999} easing="ease">
              <div className="each-fade">
                <img src={fadeImages[0]} alt={name} />
              </div>
              <div className="each-fade">
                <img src={fadeImages[1]} alt={name} />
              </div>
              <div className="each-fade">
                <img src={fadeImages[2]} alt={name} />
              </div>
            </Fade>
          </div>
          <div className="description">
            <h4>Description:</h4>
            <p>{description}</p>
          </div>
        </div>
        <div className="price-buy">
          <div className="price">
            <p>£ {price}</p>
          </div>
          <Quantity  quantity={quantity} setQuantity={setQuantity} />
          <button
            onClick={() => addToCart(id, category, name, img, price, quantity)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
