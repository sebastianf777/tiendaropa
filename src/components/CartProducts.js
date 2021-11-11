import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Button } from "semantic-ui-react";

const CartProducts = () => {
  const { cart, calculatePrice, removeProduct } = useContext(CartContext);

  return (
    <>
      <div className="allCartProducts">
        {cart.map((producto) => {
          return (
            <>
           
              <div key={producto.id} className="cartProductsContainer">
                <div className="cartProduct">
                  <div className="imgContainer">
                    <img src={producto.image} alt={producto.image} />
                  </div>
                  <div className="cartProductInfo">
                    <h2 className="productTittle">{producto.name}</h2>
                    <div className="priceQuantity">
                      <span className="productQuantity">
                        Selecciono: {producto.qty}
                      </span>
                      <span className="productPrice">
                        ${" "}
                        {calculatePrice(
                          producto.price,
                          producto.qty
                        ).toLocaleString("en-US")}
                      </span>
                    </div>
                  </div>
                  <div className="removeBtnContainer">
                    <Button
                      icon="remove"
                      color="red"
                      size="mini"
                      onClick={() => {
                        removeProduct(producto);
                      }}
                    />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CartProducts;
