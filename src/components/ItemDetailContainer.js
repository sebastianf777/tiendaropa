import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";

import {data} from "./data";


function ItemDetailContainer() {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  const getProducts = new Promise((res, rej) => {
    setTimeout(function () {
      res(data);
    }, 2000);
  });

  useEffect(() => {
getProducts
.then((res) => {
  res.forEach((item) => {
    if (item.id === id) {
      setProducto(item);
    }
  });
})
.catch((err) => alert(err))
    // const getItems = () => {
    //   return new Promise((resolve, reject) => {
    //     const buscarProducto = data.find(
    //       (item) => item.id === parseInt(idProduct)
    //     );
    //     setTimeout(() => {
    //       resolve(buscarProducto);
    //       reject("error al traer productos");
    //     }, 1000);
    //   });
    // };
    // getItems()
    //   .then((res) => setProducto(res))
    //   .catch((acaHayError) => console.log(acaHayError));
  }, []);

  return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;
















