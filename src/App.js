import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from './Header';
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer.js";
import "./css/Section.css";
import Nav from "./components/NavBar.js";
import "./css/Header.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemBigDetail from "./components/ItemBigDetail.js";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <ItemListContainer />
      </div>
      <Switch>
        <Route exact path="/action1">
          <Hola />
        </Route>
        <Route exact path="/item/:id">
          <ItemBigDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
const Hola = () => {
  return (<h1>"hola"</h1>);
};
export default App;
