import { createContext, useState } from "react";
//useEffect
export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  //const [totalPrice, setTotalPrice] = useState(0);
const calculoTotal = () => cart.reduce((a, c) => a + c.price * c.qty, 0);
const [cantidad, setCantidad] = useState(0)

const clearCart = () => {
  setCart([])
}
const actualizarCantidad = () => {
 
  cart.forEach(elemento => setCantidad(+ elemento.quantity) )
  
  return cantidad
  
}
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
    <CartContext.Provider value={{ addProduct, cart, setCart, removeProduct, calculoTotal,cantidad: cart.length, clearCart, actualizarCantidad }}>
      {children}
    </CartContext.Provider>
  );
}