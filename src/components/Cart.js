import { useContext } from "react";
import { CartContext } from "./CartContext";
import trashIcon from "../svg/trashIcon.svg"


export const Cart = () => {
  const { cart, removeProduct } = useContext(CartContext);

  const calculatePrice = (precio, qty) => {
    return precio * qty;
  };

  return (
    <div className="cartItemsWrapper">
      {cart.length ? (
        cart.map((producto) => (
          <div key={producto.id} className="cartItem">
            <h2>{producto.name}</h2>
            <h4>Qty: {producto.qty}</h4>
            <h4>${calculatePrice(producto.price, producto.qty)}</h4>
            <img
              className="trashIcon"
              src={trashIcon}
              alt="#"
              width="20px"
              onClick={() => {
                removeProduct(producto);
              }}
            />
          </div>
        ))
      ) : (
        <h1>No hay items en el carrito</h1>
      )}
    </div>
  );
};