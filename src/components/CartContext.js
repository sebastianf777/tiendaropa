import { createContext, useState } from "react";
//useEffect
export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  //const [totalPrice, setTotalPrice] = useState(0);
  const addProduct = (id, nombre, precio, qty) => {
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
          qty: qty,
        },
      ]);
    }
  };
  // const reducer = (previousValue, currentValue) => previousValue + currentValue;

  // useEffect(() => {
  //   if (cart.length) {
  //     const prices = cart.map((item) => item.price * item.qty);
  //     console.log(prices.reduce(reducer));
  //     setTotalPrice(prices.reduce(reducer));
  //   }
  // }, [cart]);
  const removeProduct = (itemInCart) => {
    const existingIndex = cart.findIndex((item) => item.id === itemInCart.id);
    const cartCopy = Array.from(cart);

    if (existingIndex >= 0) {
      cartCopy.splice(existingIndex, 1);
      setCart(cartCopy);
    }
  };

  return (
    <CartContext.Provider value={{ addProduct, cart, setCart, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
}