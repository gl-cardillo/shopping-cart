import "./Quantity.css";

export function Quantity({ quantity, setQuantity }) {
  function handleQuantity(n) {
    if (quantity === 0 && n === -1) return;
    setQuantity((quantity) => (quantity += n));
  }

  return (
    <div className="quantity-selector">
      <p onClick={() => handleQuantity(-1)}>-</p>
      <p>{quantity}</p>
      <p onClick={() => handleQuantity(1)}>+</p>
    </div>
  );
}