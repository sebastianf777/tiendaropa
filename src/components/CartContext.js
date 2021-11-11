import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  // const [calculoTotal, setCalculoTotal] = useState([])
  // const [total, setTotal] = useState(0)

  // const reducer = (previousValue, currentValue) => previousValue + currentValue;
  // useEffect(() => {
  //   if (cart.length) {
  //     const prices = cart.map((item) => item.price * item.qty);
  //     console.log(prices.reduce(reducer));
  //     setCalculoTotal(prices.reduce(reducer));
  //   }
  // }, [cart]);
  // const calculoTotal = () => cart.reduce((a, c) => a + c.price * c.qty, 0);

// const calculoTotal = () => {
//   let suma = 0;
//         cart.forEach(elemento => suma += elemento.price * elemento.qty)
//         setTotal(suma)
//         return suma
// };
const [cantidad, setCantidad] = useState(0)

const clearCart = () => {
  setCart([])
}
const actualizarCantidad = () => {
 
  cart.forEach(elemento => setCantidad(+ elemento.quantity) )
  
  return cantidad
  
}

const calculatePrice = (price, qty) => {
  return price * qty;
};
  const addProduct = (id, nombre, precio,imagen, qty) => {
    const existingIndex = cart.findIndex((item) => item.id === id);


    //let cartCopy = cart.slice();
    if (existingIndex >= 0) {
      cart[existingIndex] = {
        ...cart[existingIndex],
        qty: cart[existingIndex].qty + qty,
      };
    } else {
      setCart([
        ...cart,
        {
          id: id,
          name: nombre,
          price: precio,
          image: imagen,
          qty: qty,

        },
      ]);
    }
  };

  const removeProduct = (itemInCart) => {
    const existingIndex = cart.findIndex((item) => item.id === itemInCart.id);
    const cartCopy = Array.from(cart);

    if (existingIndex >= 0) {
      cartCopy.splice(existingIndex, 1);
      setCart(cartCopy);
    }
  };

  return (
    <CartContext.Provider value={{ addProduct, cart, setCart,calculatePrice, removeProduct,cantidad: cart.length, clearCart, actualizarCantidad }}>
      {children}
    </CartContext.Provider>
  );
}