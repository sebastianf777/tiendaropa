import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./loader/Loader";
import ItemList from "./ItemList";
import { getFirestore } from "../firebase/";



const Categorias = () => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [getIsEmpty, setGetIsEmpty] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {

    setIsLoading(true);

    const db = getFirestore();
    const itemCollection = db.collection("data");
    const itemsByCategory = itemCollection.where(
      "categoria",
      "==",
      categoryId
    );

    itemsByCategory
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
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [categoryId]);

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


export default Categorias;