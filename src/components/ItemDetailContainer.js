import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";

import data from "./data.json";


function ItemDetailContainer() {
  const [producto, setProducto] = useState({});
  const { id: idProduct } = useParams();

  

  useEffect(() => {
    setProducto({});
    const getItems = () => {
      return new Promise((resolve, reject) => {
        const buscarProducto = data.find(
          (item) => item.id === parseInt(idProduct)
        );
        setTimeout(() => {
          resolve(buscarProducto);
          reject("error al traer productos");
        }, 1000);
      });
    };
    getItems()
      .then((res) => setProducto(res))
      .catch((acaHayError) => console.log(acaHayError));
  }, [idProduct]);

  return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;
















