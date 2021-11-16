import CartIcono from "../../svg/cartSvg.svg";
import "../../scss/CartWidget.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

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
