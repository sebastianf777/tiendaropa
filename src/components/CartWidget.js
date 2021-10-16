// import { Link } from "react-router-dom";
import CartIcono from "../svg/cartSvg.svg";
import Badge from "react-bootstrap/Badge";
import "../css/CartWidget.css";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      {/* <Link to="/cart"> */}
      
        <div className="cart">
          <img src={CartIcono} alt="Icono de carrito" width="25" />
          <Badge pill bg="danger" className="BadgeC">
          {cart.length ? <p className="x4">{cart.length}</p> : null}
          </Badge>
      
        </div>
      {/* </Link> */}
    </div>
  );
};

export default Cart;
