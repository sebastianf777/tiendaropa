import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]);
  };

  const calculatePrice = (price, qty) => {
    return price * qty;
  };
  const addProduct = (id, nombre, precio, imagen, qty) => {
    const existingIndex = cart.findIndex((item) => item.id === id);

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
    <CartContext.Provider
      value={{
        addProduct,
        cart,
        calculatePrice,
        removeProduct,
        cantidad: cart.length,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
