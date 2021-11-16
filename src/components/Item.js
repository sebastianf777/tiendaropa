import "../scss/Item.scss";
import React from "react";
import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <Link to={`/item/${product.id}`} className="btnIrItemDetail">
      <div className="itemCard">
        <img
          src={product.imagen}
          alt={product.nombre}
          className="imgProducto"
        />

        <div className="itemDescription">
          <div className="discountContainer">
            <p className="productVariants">
              {product.descuento !== "--"
                ? product.descuento + "%descuento"
                : "NEW"}
            </p>
            <p className="productVariants" style={{ background: "gray" }}>
              Colección {product.coleccion}
            </p>
            <p className="productVariants" style={{ background: "#496ABE" }}>
              {product.color}
            </p>
          </div>

          <div>
            <div className="brandAndName">
              <h2 className="productBrand"> {product.marca} </h2>
              <h3 className="productName"> {product.nombre} </h3>
            </div>

            <p className="productPrice"> ${product.precio} </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Item;
