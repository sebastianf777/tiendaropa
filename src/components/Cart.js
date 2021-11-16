import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartProducts from "./CartProducts";
import CheckoutComponent from "./CheckoutComponent";
import FadeIn from "react-fade-in";
import Footer from './Footer';
import { Button, Icon } from 'semantic-ui-react';

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
                 
                <Button animated="vertical">
                <Button.Content visible>Carrito <Icon name="cart" /></Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow left" /><Icon name="cart" /> Volver
                </Button.Content>
              </Button>
                 
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
