import { BsBag, BsSearch } from "react-icons/bs";
import './Main-bar.css'
export function Mainbar() {

  return(      
    <div className="main-bar">
      <ul>
        <li><BsSearch className="icon" /></li>
        <li><BsBag /></li>
      </ul>
    </div>)
}