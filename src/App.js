import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";

import db from "./firebase";
import { doc, collection, query, where, onSnapshot } from "firebase/firestore";

import Nav from "./components/NavBar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import { CartProvider } from "./components/CartContext";
import { Cart } from "./components/Cart";

// const App = () => {

// https://gyazo.com/bec50407231383cb8faa86f4ff8fddc7

const App = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    setLoading(true);
    //Inicializa conexión con Firebase y se conecta a Firestore
    // const db = db;
    //vamos a ir a la colecciòn que yo quiero
    const q = query(collection(db, "nose"));
    //vamos a buscar la informacion
    const unsub = onSnapshot(q, (querySnapshot) => {
      console.log(
        "data",
        querySnapshot.docs.map((doc) => doc.data())
      );
      // itemCollection.get().then((querySnapshot) => {
      //   if(querySnapshot.size === 0) {
      //     console.log("No Hay resultados");
      //   }
      //   setItems(querySnapshot.docs.map(doc => doc.data()));
      // }).catch((error) => {
      //   console.log("Error al traer los items", error);
      // }).finally(() => {
      //   setLoading(false);
    });
  }, []);

  return (
    <div>
      <Router>
        <CartProvider>
          <Nav />
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route exact path="/category/:id">
              <ItemListContainer />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route exact path="/item/:id">
              <ItemDetailContainer />
            </Route>
          </Switch>
        </CartProvider>
      </Router>
    </div>
  );
};

//   );
//  };

export default App;
