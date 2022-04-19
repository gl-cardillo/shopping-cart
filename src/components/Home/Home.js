import { Mainbar } from "../Main-bar/Main-bar";
import { Link } from "react-router-dom";
import './Home.css'

export  function Home() {
  return (
    <div className="home">
      < Mainbar />
      <div className="message-button">
        <h1>Play Station 5</h1>
        <p>More powerful than ever, Available now.</p>
        <Link to="/catalog">
          <button>Shop now</button>
        </Link>
      </div>
    </div>
  )
}