import { useContext } from "react";
import { CartContext } from "./CartContext";
import trashIcon from "../svg/trashIcon.svg"
import { Link } from "react-router-dom";


export const Cart = () => {
  const { cart, removeProduct } = useContext(CartContext);


const calculoTotal = cart.reduce((a, c) => a + c.price * c.qty, 0);
    //     let arregloPrecios=[];
    //     let precioTotal=0;
    //     cart.map(
    //         (producto,i) => {
    //             arregloPrecios.push(parseInt(producto.precio));
    //             precioTotal=arregloPrecios.reduce((a,b)=>(a+b),0)*1000;
    //             return(precioTotal);
    //         }
    //     );

    //             return (
    // cart
    //   .map(item => item.precio) // obtenemos solo los precios de los items
    //   .reduce((acc, value) => acc + value) // procedemos con la suma
    // )
    // };
  // const calculateTotal = () => {
  // let t = 0;
  // cart.map((producto) => t = {producto.precio})

  //     return t;

  // };
  // const sumaTotal = calculateTotal()
   const calculatePrice = (precio, qty) => {
     return precio * qty;
  };

  return (

    <div>

    <div className="x">
      {cart.length ? (
        cart.map((producto) => (
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
        ))
      ) : (
        <div>
        <h1>No hay items en el carrito</h1> 
        <Link
            to="/"
            className="buttonClose"

          >
            Ir a comprar algo :)!
          </Link>
        </div>
      )}
    </div>
     <div>

            <strong>Total de la compra: ${calculoTotal.toFixed(2)}</strong>
    </div> 
    </div>

  );
};
