


import Nav from "./components/Navbar/NavBar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FinalizarCompra from "./components/FinalizarCompra/FinalizarCompra.js";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import Home from "./layout/Home.js";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./components/Cart/Cart";
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
