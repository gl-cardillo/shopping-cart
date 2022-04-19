import './Card.css'

export function Card({product}) {

  const {category, id, name, img, price } = product;

  return (
    <div key={id} className="card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>£ {price}</p>
      <form>
        <input type="number" id="quantity" name="quantity" min="1" max="5" defaultValue={1} />
        <button type="submit">Add to cart</button>
      </form>
    </div>
  )
}