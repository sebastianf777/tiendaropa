import PurchaseTotal from "./PurchaseTotal";
import React, { useContext, useState, useEffect } from "react";
import { getFirestore } from "../firebase/";
import Loader from "./loader/Loader";
import { CartContext } from "./CartContext";
import CartProducts from "./CartProducts";
import UserForm from "./UserForm";
import firebase from "firebase/app";
import "firebase/firestore";
import { Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import "../scss/FinalizarCompra.scss";

const FinalizarCompra = () => {
  const { cart } = useContext(CartContext);
  // const [ordenDiv, setOrdenDiv] = useState([])

  const [calculoTotal, setCalculoTotal] = useState([])

    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    // useEffect(() => {
    //   if (cart.length) {
    //     const prices = cart.map((item) => item.price * item.qty);
    //     console.log(prices.reduce(reducer));
    //     setCalculoTotal(prices.reduce(reducer));
    //   }
    // }, [cart]);
  const [desaparece, setDesaparece] = useState([]);
  const [order, setOrder] = useState({});
  const [user, setUser] = useState({
    name: null,
    email: null,
  });
  //   const crearOrdenDiv = document.getElementById("crearOrden")

  //  const ordenCreada = () =>{
  //     const element = (order.id ? (
  //         <div>Tu número de orden es: {order.id}</div>
  //       ) : (
  //         <div className="loaderCart">
  //           <Loader />
  //         </div>
  //       ))
  //       ReactDOM.render(element, crearOrdenDiv)
  //  }
  // const desaparece =

  useEffect(() => {
    if (cart.length) {
      const prices = cart.map((item) => item.price * item.qty);
      console.log(prices.reduce(reducer));
      setCalculoTotal(prices.reduce(reducer));


    }
    setDesaparece("desaparece");
  }, [cart]);
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
    setDesaparece("");
    //  ordenCreada()
  };

  return (
    <>
      <FadeIn>
        <section className="pago_container">
          <div id="crearOrden">
            <UserForm user={user} setUser={setUser} />
            {/* {order.id ? (
    <div>Tu número de orden es: {order.id}</div>
   ) : (
     <div className="loaderCart">
       <Loader />
     </div>
  )} */}
            {order.id ? (
              <div>Tu número de orden es: {order.id}</div>
            ) : (
              <div className={`loaderCart ${desaparece}`}>
                <Loader />
              </div>
            )}
            {/* <Link to={"/clientform"}>
              <Button animated="fade">
                <Button.Content visible>
                  Proceder al envio <Icon name="dolly" />
                </Button.Content>
                <Button.Content hidden>
                  Siguiente paso <Icon name="arrow right" />
                </Button.Content>
              </Button>
            </Link> */}
            
            <Button
              animated="fade"
              className="botonFinalizarLaCompra"
              disabled={!(user.name && user.email && cart.length)}
              onClick={() => crearOrden()}
            >
              <Button.Content visible>
                Finalizar compra <Icon name="arrow right" />
              </Button.Content>
              <Button.Content hidden>
                Finalizar compra <Icon name="dolly" />
              </Button.Content>
            </Button>
          </div>

          <div className="formPago_container">
            <form action="">
              <h2>Medios de envío:</h2>
              <div className="medioPago_container">
                <input
                  type="radio"
                  id="sucursal"
                  name="pagos"
                  value="sucursal"
                />
                <label>
                  <Icon name="warehouse" />
                  Retiro por sucursal
                </label>
              </div>
              <div className="medioPago_container">
                <input
                  type="radio"
                  id="domicilio"
                  name="pagos"
                  value="domicilio"
                />
                <label>
                  <Icon name="truck" /> Envío a domicilio
                </label>
              </div>
              <div className="medioPago_container">
                <input type="radio" id="express" name="pagos" value="express" />
                <label>
                  <Icon name="shipping fast" />
                  Envío express
                </label>
              </div>
            </form>
            <form action="">
              <h1>Medios de pago</h1>
              <div className="medioPago_container">
                <input
                  type="radio"
                  id="efectivo"
                  name="pagos"
                  value="efectivo"
                />
                <label>
                  <Icon name="money bill alternate outline" />
                  Efectivo
                </label>
              </div>
              <div className="medioPago_container">
                <input
                  type="radio"
                  id="transferencia"
                  name="pagos"
                  value="transferencia"
                />
                <label>
                  <Icon name="university" />
                  Transferencia bancaria
                </label>
              </div>
              <div className="medioPago_container">
                <input
                  type="radio"
                  id="tarjetas"
                  name="pagos"
                  value="tarjetas"
                />
                <label>
                  <Icon name="credit card" />
                  Tarjeta de crédito/débito
                </label>
              </div>
              <div className="medioPago_container">
                <input type="radio" id="online" name="pagos" value="online" />
                <label>
                  <Icon name="cc paypal" />
                  Mercado pago - Paypal
                </label>
              </div>
            </form>
          </div>

          <>
            <div>
              <h2>Resumen:</h2>
              <PurchaseTotal/>
              <CartProducts />
            </div>
          </>
        </section>
      </FadeIn>
    </>
  );
};

export default FinalizarCompra;
