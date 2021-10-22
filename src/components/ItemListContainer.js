import React, { useState, useEffect } from "react";
//import { useParams } from "react-router-dom";
// import {data} from "./data";
import ItemList from "./ItemList";
import { getFirestore } from "../firebase/";
import Loader from "./loader/loader";


// function ItemListContainer() {
  const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [getIsEmpty, setGetIsEmpty] = useState(false);
    // const [porCategoria, setPorCategoria] = useState([])

   // const { id: idCategory } = useParams();

    useEffect(() => {
      setIsLoading(true);
      const db = getFirestore();
      const itemsCollection = db.collection("data");
      // const filtroCategory = itemsCollection.filter(
      //              (item) => item.categoria === idCategory
      //           );
      //const porCategoria = itemsCollection.doc(idCategory)
   
    //   if (idCategory == 1){
    //     setPorCategoria(itemsCollection.where("categoria", "==", "1"))
    //  } else if (idCategory == 2){
    //    setPorCategoria(itemsCollection.where("categoria", "==", "2"))
    //  }
    //  else{
    //    setPorCategoria(itemsCollection.where("categoria", "==", "1"))
    //  }


 //  const porCategoria = idCategory === "1" ? itemsCollection.where("categoria", "==", "1") : itemsCollection

  // const porCategoria = 
//   const idCat= Number(idCategory)
// console.log(idCat)
// const porCategoria = itemsCollection.where("categoria", "==", idCategory)
   
        itemsCollection
      // filtroCategory
     // porCategoria
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.size === 0) {
            setGetIsEmpty(true);
          }
          setProductos(
            querySnapshot.docs.map((doc) => {
              
              return { id: doc.id, ...doc.data() };
            })
          );
        })
        .catch((err) => alert(err))
        .finally(() => setIsLoading(false));
    }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : getIsEmpty ? (
        <h2>NO HAY PRODUCTOS</h2>
      ) : (
        <ItemList productos={productos} />
      )}
    </>
  );
};





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

  // return <ItemList productos={productos} />;
// }

export default ItemListContainer
