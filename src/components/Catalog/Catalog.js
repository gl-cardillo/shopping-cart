import React, {useState} from 'react';
import './Catalog.css'
import { Mainbar } from "../Main-bar/Main-bar";
import { Link } from "react-router-dom";
import { Card} from "../Card/Card"
import { accessories } from '../../data/accessories';
import { consoles } from '../../data/console';
import { games } from '../../data/game';

export function Catalog() {

  const [products, setProducts] = useState(consoles);

  const changePage = (newPage) => {
    setProducts(newPage);
  }

  return (
    <div className="catalog">
      < Mainbar />
      <div className='catalog-main-content'>
        <div className="sidebar">
          <ul>
            <li onClick={() => changePage(consoles)}>Console</li>
            <li onClick={() =>changePage(accessories)}>Accessories</li>
            <li onClick={() =>changePage(games)}>Games</li>
          </ul>
        </div>
        <div className="catalog-content">
          {
            products.map((product) => 
         
              <Card key={product.id} product={product} />

            )
            }
        </div>
      </div>
    </div>
  )
}