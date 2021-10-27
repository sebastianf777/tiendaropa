import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import trashIcon from "../svg/trashIcon.svg";
import { Link } from "react-router-dom";
import UserForm from "./UserForm";
import firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "../firebase/";
import Loader from "./loader/Loader";
import "../css/Cart.css";

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
              <div key={producto.id} className="card carrito">
                <div className="itemCarrito">
                  <div>
                    <img
                      className="imgItemCarrito"
                      src={producto.image}
                      alt={producto.name}
                    />
                  </div>
                  <div className="cardInfo">
                    <h2>{producto.name}</h2>
                    <h4>Cantidad: {producto.qty}</h4>
                    <h4>${calculatePrice(producto.price, producto.qty)}</h4>
                  </div>
                </div>
                <div className="trashContainer">
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
              </div>
            ))}
            <button
              className="botonFinalizarLaCompra"
              disabled={!(user.name && user.email && cart.length)}
              onClick={() => crearOrden()}
            >
              Finalizar Compra
            </button>
            <div>
              <UserForm user={user} setUser={setUser} />
              {order.id ? (
                <div>Tu número de orden es: {order.id}</div>
              ) : (
                <div className="loaderCart">
                  <Loader  />
                </div>
              )}
              <strong>Total de la compra: ${calculoTotal.toFixed(2)}</strong>
            </div>
          </>
        ) : (
          <div className="cartView">
            <h1>No hay items en el carrito</h1>
            <Link to="/">
              <button className="botonIrAComprar">Regresar al catálogo</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
