import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Section.css";
import Nav from "./components/NavBar.js";
import "./css/Header.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
// import { BrowserRouter, Switch, Route, useRouteMatch } from "react-router-dom";
// , useRouteMatch
// import ItemBigDetail from "./components/ItemBigDetail.js";

const App = () => {
    // https://gyazo.com/bec50407231383cb8faa86f4ff8fddc7


  return (
    
      <div>
    <Router>
        <Nav/>
        <Switch>
        <Route exact path="/">
          <ItemListContainer />
        </Route>
        <Route exact path="/category/:id">
          <ItemListContainer />
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer />
        </Route>
      </Switch>
    </Router>
      </div>


  );
};

export default App;
