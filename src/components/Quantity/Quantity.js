import "./Quantity.css";

export function Quantity({ quantity, setQuantity }) {
  function handleQuantity(n) {
    if (quantity === 1 && n === -1) return;
    if (quantity === 9 && n === +1) return;
    
    setQuantity((quantity) => (quantity += n));
  }

  return (
    <div className="quantity-selector">
      <p className="plus-minus" onClick={() => handleQuantity(-1)}>-</p>
      <p>{quantity}</p>
      <p className="plus-minus"  onClick={() => handleQuantity(1)}>+</p>
    </div>
  );
}