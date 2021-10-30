import "../scss/Item.scss";
import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <div className="itemCard">
     
        <img src={product.imagen} alt={product.nombre} className="imgProducto" />
     
      {/* ajustar ancho de imagen */}
      <div className="itemDescription">
        <div className="discountContainer">
          <p className="productVariants">{product.descuento}% descuento</p>
          <p className="productVariants" style={{ background: "gray" }}>
            Colección {product.coleccion}
          </p>
          <p className="productVariants" style={{ background: "#496ABE" }}>
            {product.color}
          </p>
        </div>

        <div>
        <h2 className="productBrand"> {product.marca} </h2>
          <h3 className="productName"> {product.nombre} </h3>
          <p className="productLastPrice">$ {product.ultimoPrecio}</p>
          <p className="productPrice"> ${product.precio} </p>

          <p className="stockActual">Stock actual: {product.stock}</p>
        </div>
      </div>
      <Link to={`/item/${product.id}`} className="btn_irItemDetail">
        <Button animated="fade">
          <Button.Content visible>Ver detalle</Button.Content>
          <Button.Content hidden>
            Envio gratis <Icon name="dolly" />
          </Button.Content>
        </Button>
      </Link>
    </div>
  );
}

export default Item;
