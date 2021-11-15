import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { NavLink } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import "../scss/ResumenTotal.scss";

const ResumenTotal = () => {
  const { cantidad, cart } = useContext(CartContext);
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
      <section className="purchaseData">
        <div className="priceTotalContainer">
          <div className="priceTotalItem">
            <h3 >{cantidad} Productos</h3>
            <h4>
              $ {calculoTotal.toLocaleString("en-US")}
            </h4>
          </div>
          <div className="priceTotalItem">
            <h3 >Total:</h3>
            <h4 >
              $ {calculoTotal.toLocaleString("en-US")}
            </h4>
          </div>
          <div className="priceTotalItem">
            <NavLink to="/cart">
              <Button animated="vertical">
                <Button.Content visible>Carrito <Icon name="cart" /></Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow left" /><Icon name="cart" /> Volver
                </Button.Content>
              </Button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResumenTotal;
