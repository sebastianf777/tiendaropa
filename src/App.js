


import Nav from "./components/NavBar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import FinalizarCompra from "./components/FinalizarCompra.js";
import ItemListContainer from "./components/ItemListContainer";
import Home from "./components/Home.js";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./components/Cart";
import Categorias from "./components/Categorias";
import 'pure-react-carousel/dist/react-carousel.es.css';
import './fonts/Beauty.otf'
const App = () => {


  return (
    <div>
      <Router>
        <CartProvider>
            <Nav />
 
          <Switch>
          <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/category/shop">
              <ItemListContainer />
            </Route>
            <Route path="/category/:categoryId">
                <Categorias />
              </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route exact path="/checkout/finish">
              <FinalizarCompra />
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
