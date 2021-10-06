import ComponentA from './componentA';
import ComponentB from './componentB';
import ComponentC from './componentC';
import './NavBar.css';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';

import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
const init = { id: 1, title: "Producto 1", description: "Lorem Ipsum", price: 100 , pictureUrl : "http://placehold.it/500x300" }
const ItemDetailContainer = () => {
    const [item, setItem] = useState(false)
    useEffect(() => {setTimeout(() => {Promise.resolve(init).then(response => {setItem(response)})}, 2000)}, [])
    return (<div><p>Detalle Item</p>
    <ItemDetail item={item}/></div>);}
    export default ItemDetailContainer;

const NavBar = () => {
    return (
        <Router>
            <h1>Mi clase de Routing</h1>
            <header>
                <nav>
                    <li>
                        {/*<a href="https://www.google.com">Google</a>*/}
                        <Link to="/">Casa</Link>
                    </li>
                    <li>
                        {/*<a href="https://www.google.com">Google</a>*/}
                        <Link to="/paises">Paises</Link>
                    </li>
                </nav>
            </header>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/paises">
                    <Countries />
                </Route>
            </Switch>
        </Router>
    )
}

const Home = () => {
    return "Bienvenido a mi pagina principal";
}

const Countries = () => {
    let { path, url } = useRouteMatch();
    return (
        <>
            <ul>
                <li>
                    <Link to={`${url}/Argentina`}>Argentina</Link>
                </li>
                <li>
                    <Link to={`${url}/Colombia`}>Colombia</Link>
                </li>
                <li>
                    <Link to={`${url}/Uruguay`}>Uruguay</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={path}>
                    <h3>Por favor seleccione un pais</h3>
                </Route>
                <Route path={`${path}/:paisId`}>
                    <Country />               
                </Route>
            </Switch>
        </>
    )
}

const Country = () => {
    let {paisId} = useParams();

    return(
        <div>
            <h3>{paisId}</h3>
        </div>
    )
}

export default NavBar;