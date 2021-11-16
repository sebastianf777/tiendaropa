import React, { useContext, useState, useEffect } from "react";
import { Icon, Button } from "semantic-ui-react";
import { CartContext } from "../../context/CartContext";
import { getFirestore } from "../../firebase";
import firebase from "firebase/app";
import "firebase/firestore";
import ResumenTotal from "./ResumenTotal";
import Footer from "../../layout/Footer";
import Loader from "../Loader/Loader";
import CartProducts from "../CartProducts";
import UserForm from "./UserForm";
import FadeIn from "react-fade-in";
import "../../scss/FinalizarCompra.scss";

const FinalizarCompra = () => {
  const { cart } = useContext(CartContext);
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  const [calculoTotal, setCalculoTotal] = useState([]);
  const [desaparece, setDesaparece] = useState("displayNone");
  const [displayNone, setDisplaNone] = useState("completarDatos");

  const [order, setOrder] = useState({});
  const [pago, setPago] = useState({ checked: null });
  const [envio, setEnvio] = useState({ checked: null });
  const [user, setUser] = useState({
    name: null,
    email: null,
  });

  useEffect(() => {
    if (cart.length) {
      const prices = cart.map((item) => item.price * item.qty);
      console.log(prices.reduce(reducer));
      setCalculoTotal(prices.reduce(reducer));
    }
  }, [cart]);

  const handleChangeEnvio = (e) => {
    setEnvio({
      checked: e.target.value,
    });
  };
  const handleChangePago = (e) => {
    setPago({
      checked: e.target.value,
    });
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
        setDisplaNone("displayNone");
      })
      .catch((error) => {
        console.log("Error creating order", error);
      });
    setDesaparece("loaderCart");
  };

  return (
    <>
      <FadeIn>
        <section className="pagoContainer">
          <div id="crearOrden">
            <UserForm user={user} setUser={setUser} />
            {order.id ? (
              <div className="ordenCreada">
                <h3>Compra finalizada con éxito! </h3>
                <img
                  src="https://img.icons8.com/color/48/000000/checked--v4.png"
                  alt="confirmado"
                />
                <h4>Tu número de orden es: {order.id}</h4>
              </div>
            ) : (
              <div className={desaparece}>
                <Loader />
              </div>
            )}

            <div className={displayNone}>
              <h4>Completa todos los datos para poder finalizar</h4>
              <Button
                animated="fade"
                className="botonFinalizarLaCompra"
                disabled={
                  !(
                    user.name &&
                    user.email &&
                    cart.length &&
                    pago.checked != null &&
                    envio.checked != null
                  )
                }
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
          </div>

          <div className="formPagoContainer">
            <form action="">
              <h2>Medios de envío:</h2>
              <div className="medioPagoContainer">
                <input
                  type="radio"
                  id="sucursal"
                  name="pagos"
                  value="sucursal"
                  checked={envio.checked === "sucursal"}
                  onChange={handleChangeEnvio}
                />
                <label>
                  <Icon name="warehouse" />
                  Retiro por sucursal
                </label>
              </div>
              <div className="medioPagoContainer">
                <input
                  type="radio"
                  id="domicilio"
                  name="pagos"
                  value="domicilio"
                  checked={envio.checked === "domicilio"}
                  onChange={handleChangeEnvio}
                />
                <label>
                  <Icon name="truck" /> Envío a domicilio
                </label>
              </div>
              <div className="medioPagoContainer">
                <input
                  type="radio"
                  id="express"
                  name="pagos"
                  value="express"
                  checked={envio.checked === "express"}
                  onChange={handleChangeEnvio}
                />
                <label>
                  <Icon name="shipping fast" />
                  Envío express
                </label>
              </div>
            </form>
            <form action="">
              <h3>Medios de pago</h3>
              <div className="medioPagoContainer">
                <input
                  type="radio"
                  id="efectivo"
                  name="pagos"
                  value="efectivo"
                  checked={pago.checked === "efectivo"}
                  onChange={handleChangePago}
                />
                <label>
                  <Icon name="money bill alternate outline" />
                  Efectivo
                </label>
              </div>
              <div className="medioPagoContainer">
                <input
                  type="radio"
                  id="transferencia"
                  name="pagos"
                  value="transferencia"
                  checked={pago.checked === "transferencia"}
                  onChange={handleChangePago}
                />
                <label>
                  <Icon name="university" />
                  Transferencia bancaria
                </label>
              </div>
              <div className="medioPagoContainer">
                <input
                  type="radio"
                  id="tarjetas"
                  name="pagos"
                  value="tarjetas"
                  checked={pago.checked === "tarjetas"}
                  onChange={handleChangePago}
                />
                <label>
                  <Icon name="credit card" />
                  Tarjeta de crédito/débito
                </label>
              </div>
              <div className="medioPagoContainer">
                <input
                  type="radio"
                  id="online"
                  name="pagos"
                  value="online"
                  checked={pago.checked === "online"}
                  onChange={handleChangePago}
                />
                <label>
                  <Icon name="cc paypal" />
                  Mercado pago - Paypal
                </label>
              </div>
            </form>
          </div>

          <>
            <div className="resumenYProductos">
              <h2>Resumen:</h2>
              <ResumenTotal />
              <h2>Productos a enviar:</h2>
              <CartProducts />
            </div>
          </>
        </section>
        <>
          <Footer />
        </>
      </FadeIn>
    </>
  );
};

export default FinalizarCompra;
