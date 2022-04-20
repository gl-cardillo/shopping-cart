import "./Cart.css";
import { Mainbar } from "../Main-bar/Main-bar";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export function Cart({ cart, setCart, totalQuantity }) {

  let navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }
  //change quantity of item in the cart
  function changeQuantity(n, index) {
    let newCart = [...cart];
    if (newCart[index].quantity === 1 && n === -1) {
      removeItem(newCart[index].id);
      return;
    }
    newCart[index].quantity += n;
    setCart(newCart);
  }

  function removeItem(id) {

    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  }
  // get the total price of the cart
  const totalPrice = cart.map((product) => {
    return product.price * product.quantity  
  }).reduce((a, b) => a + b, 0);
  console.log(totalPrice);

  return (
    <div className="page">
      <Mainbar totalQuantity={totalQuantity} />
      <div className="cart-page">
        <h3>YOUR SHOPPING CART</h3>
      </div>
      <div className="cart-page-content">
        <div className="go-back-section">
          <button className="back-arrow" onClick={handleClick}>
            <IoIosArrowBack style={{ fontSize: "30px" }} />
          </button>
        </div>
        <div className="cart-items">
          {totalQuantity > 0 ? (
            cart.map((product, index) => (
              <div key={product.id} className="cart-item">
                <img src={product.img} alt={product.name} />
                <div className="cart-info">
                  <h4>{product.category}</h4>
                  <h5>{product.name}</h5>
                  <p>£{product.price}</p>
                  <div style={{width: 55}} className="quantity-selector">
                    <p className="plus-minus"  onClick={() => changeQuantity(-1, index)}>-</p>
                    <p style={{fontSize: 16}}>{product.quantity}</p>
                    <p className="plus-minus"  onClick={() => changeQuantity(1, index)}>+</p>
                  </div>
                  <button onClick={() => removeItem(product.id)}>
                    remove item
                  </button>
                </div>
              </div>
            )) 
              
          ) : (
            <div className="empty-basket">
              <p>Empty :(</p></div>
          )}
        </div>
        <div className="complete-transaction">
        <p className="totalPrice">Subtotal: £ {totalPrice} </p>
        <button>Proceed</button>
        </div>
      </div>
    </div>
  );
}
