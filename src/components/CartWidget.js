import CartIcono from "../svg/cartSvg.svg";
// import Badge from "react-bootstrap/Badge";
import "../scss/CartWidget.scss";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      <img src={CartIcono} alt="Icono de carrito" width="25" />

      {cart.length ? <p className="badgeC">{cart.length}</p> : null}

    </>
  );
};

export default Cart;
