import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import {data} from "./data";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);


  useEffect(() => {
    const getProducts = new Promise((res, rej) => {
      setTimeout(function () {
        res(data);
      }, 2000);
    });
  
    getProducts
      .then((res) => setProductos(res))
      .catch((err) => alert(err))

  }, []);








  // const { id: idCategory } = useParams();

  // useEffect(() => {
  //   setProductos([]);
  //   const getItems = () => {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         if (idCategory) {
  //           const filtroCategory = data.filter(
  //             (item) => item.categoria === idCategory
  //           );
  //           resolve(filtroCategory);
  //         } else {
  //           resolve(data);
  //         }
  
  //         reject("error al traer productos");
  //       }, 3000);
  //     });
  //   };
  //   getItems()
  //     .then((res) => setProductos(res))
  //     .catch((acaHayError) => console.log(acaHayError));
  // }, [idCategory]);

  return <ItemList productos={productos} />;
}

export default ItemListContainer
