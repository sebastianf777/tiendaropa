import React from "react";
import Item from "../Item";
import "../../scss/ItemList.scss";
import Footer from "../../layout/Footer";

const ItemList = ({ productos }) => {
  return (
    <div className="itemList">
      {productos.length !== 0 ? (
        <>
          {productos.map((producto) => (
            <Item product={producto} key={producto.id} />
          ))}
          <>
            <Footer />
          </>
        </>
      ) : (
        <h2>Cargando...</h2>
      )}
    </div>
  );
};

export default ItemList;
