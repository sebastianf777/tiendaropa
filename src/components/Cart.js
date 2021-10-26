import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import trashIcon from "../svg/trashIcon.svg";
import { Link } from "react-router-dom";
import UserForm from "./UserForm";
import firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "../firebase/";
import Loader from "./loader/loader";

export const Cart = () => {
  const { cart, removeProduct } = useContext(CartContext);
  const [order, setOrder] = useState({});
  const [user, setUser] = useState({
    name: null,
    email: null,
  });
  const calculoTotal = cart.reduce((a, c) => a + c.price * c.qty, 0);
  const calculatePrice = (precio, qty) => {
    return precio * qty;
  };
  const crearOrden = () => {
    const db = getFirestore();
    const orders = db.collection("orders");
    const newOrder = {
      buyer: user,
      items: cart,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: calculoTotal,
    };
    orders
      .add(newOrder)
      .then(({ id }) => {
        console.log(id);
        setOrder({ id: id, ...newOrder });
      })
      .catch((error) => {
        console.log("Error creating order", error);
      });
  };

  

  return (
    <div className="cartView">
      <div className="cartItemsWrapper">
        {cart.length ? (
          <>
          {cart.map((producto) => (
            <div key={producto.id} className="x2">
              <h2>{producto.name}</h2>
              <h4>Qty: {producto.qty}</h4>
              <h4>${calculatePrice(producto.price, producto.qty)}</h4>
              <img
                className="x3"
                src={trashIcon}
                alt="#"
                width="20px"
                onClick={() => {
                  removeProduct(producto);
                }}
              />
            </div>
          ))}
          <button
              className="button3"
              disabled={!(user.name && user.email && cart.length)}
              onClick={() => crearOrden()}
            >
              Finalizar Compra
            </button>
            </>
        ) : (
          <div>
            <h1>No hay items en el carrito</h1>
            <Link to="/" className="buttonClose">
              Ir a comprar algo :)!
            </Link>
          </div>
        )}
      </div>
      <div>
      <UserForm user={user} setUser={setUser} />
        {order.id ? <div>Tu número de orden es: {order.id}</div> : <Loader />}
        <strong>Total de la compra: ${calculoTotal.toFixed(2)}</strong>
      </div>
    </div>
  );
};
