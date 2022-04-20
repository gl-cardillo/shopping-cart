import "./Cart.css";
import { Mainbar } from "../Main-bar/Main-bar";
import { Quantity } from "../Quantity/Quantity";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export function Cart({ cart }) {
  let navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }

  console.log(cart);

  return (
    <div className="page">
      <Mainbar />
      <div className="cart-page">
        <h3>YOUR SHOPPING LIST</h3>
      </div>
      <div className="cart-page-content">
        <div className="go-back-section">
          <button className="back-arrow" onClick={handleClick}>
            <IoIosArrowBack style={{ fontSize: "30px" }} />
          </button>
        </div>
        <div className="cart-items">
          {cart.map((items) => (
            <div key={items.id} className="cart-item">
              <img src={items.img} alt={items.name} />
              <div className="cart-info">
                <h4>{items.category}</h4>
                <h5>{items.name}</h5>
                <p>£{items.price}</p>
                <div>
                  <Quantity quantity={items.quantity} />
                </div>
                <p>remove item</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
