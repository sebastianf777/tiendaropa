import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getFirestore } from "../firebase/";
import Loader from "./loader/Loader";


  const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [getIsEmpty, setGetIsEmpty] = useState(false);

    useEffect(() => {
      setIsLoading(true);
      const db = getFirestore();
      const itemsCollection = db.collection("data");

        itemsCollection

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

export default ItemListContainer
