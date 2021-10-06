import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div>
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

