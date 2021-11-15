import ResumenTotal from "./ResumenTotal";
import Footer from "./Footer";
import React, { useContext, useState, useEffect } from "react";
import { getFirestore } from "../firebase/";
import Loader from "./loader/Loader";
import { CartContext } from "./CartContext";
import CartProducts from "./CartProducts";
import UserForm from "./UserForm";
import firebase from "firebase/app";
import "firebase/firestore";
import { Icon, Button } from "semantic-ui-react";
import FadeIn from "react-fade-in";
import "../scss/FinalizarCompra.scss";

const FinalizarCompra = () => {
  const { cart } = useContext(CartContext);
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  const [calculoTotal, setCalculoTotal] = useState([]);
  const [desaparece, setDesaparece] = useState([]);
  const [order, setOrder] = useState({});
  const [pago, setPago] = useState({checked: null})
  const [envio, setEnvio] = useState({checked: null})
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
    setDesaparece("desaparece");
  }, [cart]);

const handleChangeEnvio = e =>{
  setEnvio(
    {
      checked: e.target.value
    }
  )
}
const handleChangePago = e =>{
  setPago(
    {
      checked: e.target.value
    }
  )
}

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
  };

  return (
    <>
      <FadeIn>
        <section className="pagoContainer">
          <div id="crearOrden">
            <UserForm user={user} setUser={setUser} />
            {order.id ? (
              <div>Tu número de orden es: {order.id}</div>
            ) : (
              <div className={`loaderCart ${desaparece}`}>
                <Loader />
              </div>
            )}

            <Button
              animated="fade"
              className="botonFinalizarLaCompra"
              disabled={!(user.name && user.email && cart.length && pago.checked != null && envio.checked != null)}
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
                <input type="radio" id="express" name="pagos" value="express" 
                checked={envio.checked === "express"} onChange={handleChangeEnvio}/>
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
  <Footer/>
  </>
      </FadeIn>
    </>
  );
};

export default FinalizarCompra;
