import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import CartProducts from "./CartProducts";
import CheckoutComponent from "./CheckoutComponent";
import FadeIn from "react-fade-in";
import Footer from './Footer';

import "../scss/Cart.scss";

export const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <FadeIn>
        <div className="cartAndCheckout">
          <div className={cart.length === 0 ? "" : "containerCarrito"}>
            {cart.length ? (
              <>
                <CartProducts />
                <CheckoutComponent />
              </>
            ) : (
              <div className="cartView">
                <h1>No hay items en el carrito</h1>
                <Link to="/">
                  <button className="botonIrAComprar">
                    Regresar al catálogo
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
<>
  <Footer/>
  </>
      </FadeIn>
    </>
  );
};
