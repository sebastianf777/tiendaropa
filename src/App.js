import "bootstrap/dist/css/bootstrap.min.css";
// import React, { useEffect, useState } from "react";

// import db from "./firebase";
// import { doc, collection, query, where, onSnapshot } from "firebase/firestore";

import Nav from "./components/NavBar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import { CartProvider } from "./components/CartContext";
import { Cart } from "./components/Cart";
import Categorias from "./components/Categorias";


const App = () => {


  return (
    <div>
      <Router>
        <CartProvider>
          <Nav />
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route path="/category/:categoryId">
                <Categorias />
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


export default App;
