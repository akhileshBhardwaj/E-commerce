import React, { createContext, useContext, useMemo, useState } from "react";
import { Product } from "../data/Product";

const context = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add To Cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  console.log("thid is cart: ", cart);

  // Remove From Cart
  const removeCart = (productId, removeAll = false) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);

      if (!existingItem) return prevCart;

      if (removeAll || existingItem.quantity === 1) {
        return prevCart.filter((item) => item.id !== productId);
      }

      return prevCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item,
      );
    });
  };

  // Clear Cart
  const clearCart = () => {
    setCart([]);
  };

  // Total Items Count
  const cartCounter = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  // Total Price
  const cartTotalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  return (
    <context.Provider
      value={{
        products: Product,
        cart,
        addToCart,
        removeCart,
        clearCart,
        cartCounter,
        cartTotalPrice,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const useCart = () => {
  return useContext(context);
};
