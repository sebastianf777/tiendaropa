import React from "react";
import Item from "./Item";
import "../scss/ItemList.scss";

const ItemList = ({ productos }) => {
  return (
    <div className="itemList">
      {productos.length !== 0 ? (
        productos.map((producto) => (
          <Item product={producto} key={producto.id} />
        ))
      ) : (
        <h2>Cargando...</h2>
      )}
    </div>
  );
};

export default ItemList;

