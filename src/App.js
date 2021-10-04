import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer.js";
import "./css/Section.css"
import Nav from "./components/NavBar.js";
import "./css/Header.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
    return (
        <BrowserRouter>
        <Nav />

        <Switch>
            <Route path="/" component={ItemListContainer} exact />
            <Route path="/categoria/:id" component={ItemListContainer} />
            <Route path="/item/:id" component={ItemDetailContainer} />
        </Switch>

    </BrowserRouter>
      
    )
}

export default App;
