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
    // max quantity set to 9
    if (newCart[index].quantity === 9 && n === +1) return;
    //if quanity is 0 remove item
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
  const totalPrice = cart
    .map((product) => {
      return product.price * product.quantity;
    })
    .reduce((a, b) => a + b, 0);

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
                <div className="image-container">
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="cart-info">
                  <h4>{product.category}</h4>
                  <h5>{product.name}</h5>
                </div>
                <div className="edit-remove">
                  <div
                    style={{ paddingLeft: 5, paddingRight: 5, width: 50 }}
                    className="quantity-selector"
                  >
                    <p
                      className="plus-minus"
                      onClick={() => changeQuantity(-1, index)}
                    >
                      -
                    </p>
                    <p
                      style={{ fontSize: 16, paddingTop: 4, paddingBottom: 4 }}
                    >
                      {product.quantity}
                    </p>
                    <p
                      className="plus-minus"
                      onClick={() => changeQuantity(1, index)}
                    >
                      +
                    </p>
                  </div>
                  <div className="price-remove">
                    <p className="price-cart-item">
                      £
                      {(
                        Math.round(product.price * product.quantity * 100) / 100
                      ).toFixed(2)}
                    </p>
                    <button onClick={() => removeItem(product.id)}>
                      remove item
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-basket">
              <p>Empty :(</p>
            </div>
          )}
        </div>
        <div className="checkout-container">
          <div className="subtotal">
            <p className="total-price">
              Subtotal: £ {(Math.round(totalPrice * 100) / 100).toFixed(2)}
            </p>
            <div className="number-items">
              <p>{totalQuantity} items</p>
            </div>
          </div>

          <button>Proceed</button>
        </div>
      </div>
    </div>
  );
}