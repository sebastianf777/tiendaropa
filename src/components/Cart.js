import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

// import UserForm from "./UserForm";
// import firebase from "firebase/app";
// import "firebase/firestore";
//  import "../css/Cart.css";
import "../scss/Cart.scss";

import CartProducts from "./CartProducts";

import CheckoutComponent from "./CheckoutComponent";
import FadeIn from "react-fade-in";

export const Cart = () => {
  const { cart } = useContext(CartContext);


  // const calculatePrice = (precio, qty) => {
  //   return precio * qty;
  // };
 

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
      </FadeIn>
    </>
  );
};
