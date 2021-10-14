import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/NavBar.js";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import { CartProvider } from "./components/CartContext";
import { Cart } from "./components/Cart";
// import { BrowserRouter, Switch, Route, useRouteMatch } from "react-router-dom";
// , useRouteMatch
// import ItemBigDetail from "./components/ItemBigDetail.js";

const App = () => {
    // https://gyazo.com/bec50407231383cb8faa86f4ff8fddc7


  return (
    
      <div>
    <Router>
    <CartProvider>
        <Nav/>
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

export default App;
