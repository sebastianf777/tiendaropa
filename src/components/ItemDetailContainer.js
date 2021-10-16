import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {data} from "./data";


function ItemDetailContainer() {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  
  useEffect(() => {
    const getProducts = new Promise((res, rej) => {
      setTimeout(function () {
        res(data);
      }, 2000);
    });
  
getProducts
.then((res) => {
  res.forEach((item) => {
    if (item.id === id) {
      setProducto(item);
    }
  });
})
.catch((err) => alert(err))

  }, []);

  return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;
















