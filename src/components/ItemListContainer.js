import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getFirestore } from "../firebase/";
import Loader from "./Loader/Loader";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

  const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [getIsEmpty, setGetIsEmpty] = useState(false);
    const { id } = useParams();

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
    }, [id]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : getIsEmpty ? (
        
        <div className="errorServidor">
          <h2>No se encontraron productos en la base de datos, ¡error en el servidor!</h2>
        </div>
       
      ) : (
   
          <div>
            <ItemList productos={productos} />
          </div>
 
     
      )}
      
    </>
  );
};

export default ItemListContainer
