import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartArr, setCartArr] = useState([]);

  function handleAddToCartClick(productToAdd) {
    const existingProduct = cartArr.find((product) => {
      return product.id === productToAdd.id;
    });

    if (existingProduct) {
      const newArr = cartArr.map((product) =>
        product.id === productToAdd.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );

      setCartArr(newArr);
    } else {
      setCartArr([...cartArr, { ...productToAdd, quantity: 1 }]);
    }
  }

  function handleRemoveFromCartClick(productToRemove) {
    const newArr = cartArr.filter(
      (product) => product.id !== productToRemove.id
    );
    setCartArr(newArr);
  }

  const totalCartAmount = cartArr.reduce(
    (result, { price, quantity }) => result + price * quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartArr,
        handleAddToCartClick,
        handleRemoveFromCartClick,
        totalCartAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
