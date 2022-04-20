import "./Main-bar.css";
import { BsBag, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

export function Mainbar({ quantity }) {
  return (
    <div className="main-bar">
      <div>
        <BsSearch style={{ color: "white", fontSize: "26px" }} />
      </div>
      <div>
        <Link to="/cart">
          <span className="cart-number">{quantity !== 0 ? quantity : ""}</span>
          <BsBag style={{ color: "white", fontSize: "28px" }} />
        </Link>
      </div>
    </div>
  );
}