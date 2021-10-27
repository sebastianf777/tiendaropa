import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore } from "../firebase/";

import Loader from "./loader/Loader";
function ItemDetailContainer() {
  const [producto, setProducto] = useState({});
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    const db = getFirestore();
    const itemsCollection = db.collection("data");
    itemsCollection
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          if (doc.id === id) {
            setProducto({ id: doc.id, ...doc.data() });
          }
        });
      })
      .catch((err) => alert(err))
      .finally(() => setIsLoading(false));
  }, [id]);
  return (
    <div className="itemDetailWrapper">
      {isLoading ? <Loader /> : <ItemDetail producto={producto} />}
    </div>
  );
}

export default ItemDetailContainer;
