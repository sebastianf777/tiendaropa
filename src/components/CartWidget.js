import React from "react";
import CartIcono from "../svg/cartSvg.svg";
import Badge from 'react-bootstrap/Badge';
import "../css/CartWidget.css";

const Cart = () => {
  return (
    <div className="cart">
      <img src={CartIcono} alt="Icono de carrito" width="25" />
      <Badge pill bg="danger"className="BadgeC">0</Badge>
    </div>
  );
};

export default Cart;
