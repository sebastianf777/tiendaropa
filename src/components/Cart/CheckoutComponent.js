import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const CheckoutComponent = () => {
  const { clearCart, cantidad, cart } = useContext(CartContext);
  const [calculoTotal, setCalculoTotal] = useState([]);

  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  useEffect(() => {
    if (cart.length) {
      const prices = cart.map((item) => item.price * item.qty);
      console.log(prices.reduce(reducer));
      setCalculoTotal(prices.reduce(reducer));
    }
  }, [cart]);

  return (
    <>
      <section style={{ marginBottom: "3em" }}>
        <div className="checkoutContainer">
          <div className="totalPriceContainer">
            <ul>
              <li>
                <span className="checkoutQuantity">PRODUCTOS: {cantidad}</span>
                <span
                  className="checkoutTotalPrice"
                  style={{ color: "#2C3330" }}
                >
                  {" "}
                  $ {calculoTotal.toLocaleString("en-US")}{" "}
                </span>
              </li>
              <li>
                <span className="checkoutVariants">Envio</span>
                <span className="checkoutVariants"> $ 799,00 </span>
              </li>
              <li>
                <span className="checkoutVariants">Promocion</span>
                <span className="checkoutVariants"> - $ 799,00 </span>
              </li>
              <li>
                <span className="checkoutQuantity">TOTAL</span>
                <span className="checkoutTotalPrice">
                  $ {calculoTotal.toLocaleString("en-US")}
                </span>
              </li>
            </ul>
          </div>

          <p className="termsConditions">
            Acepto sin reservas las condiciones generales
          </p>

          <Link to={"/checkout/finish"}>
            <Button animated="fade" id="checkoutButton">
              <Button.Content visible>
                Proceder al pago <Icon name="dollar" />
              </Button.Content>
              <Button.Content hidden>
                Siguiente paso <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </Link>
        </div>

        <div className="checkoutBtnsContainer">
          <button
            className="seguirComprandoBtn vaciar"
            onClick={() => {
              clearCart();
            }}
          >
            Vaciar carrito <Icon name="trash alternate outline" />
          </button>
          <Link to="/category/shop" className="seguirComprandoBtn">
            <Icon name="arrow left" /> Seguir comprando
          </Link>
        </div>
      </section>
    </>
  );
};

export default CheckoutComponent;
