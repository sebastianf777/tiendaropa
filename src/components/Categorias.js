import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./loader/Loader";
import ItemList from "./ItemList";
import { getFirestore } from "../firebase/";
import logo from "../assets/img/logoHome.png";
import "../scss/Mantenimiento.scss"; 


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
          
        <div className="mantenimiento">
          <h2>Próximamente</h2>

          <h3>Página en mantenimiento</h3>
          <img src={logo} alt="" />
        </div>
      ) : (
          
        <ItemList productos={productos} />
      )}
    </>
  );
};


export default Categorias;