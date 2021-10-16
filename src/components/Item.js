// import img1 from "../assets/img/img1.png";
// import ItemDetailContainer from "./ItemDetailContainer";
// import img1 from "../assets/img/img1.png";
// import { Card } from "react-bootstrap";
import React from "react";

import {Link} from "react-router-dom"



function Item({ product }) {
 
  return (
    <div className="card" style={{ width: "15rem", margin: "10px" }}>
      <img src={product.imagen}  alt={product.nombre} />

      <div >
        <h5 > {product.nombre} </h5>
        <p > {product.precio} </p>
        <Link to={`/item/${product.id}`}>
          detalle
        </Link>
      </div>
    </div>
  );
}

export default Item;




