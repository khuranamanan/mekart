import { createContext, useState } from "react";

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistArr, setWishlistArr] = useState([]);

  function handleAddToWishlistClick(productObj) {
    console.log("here", wishlistArr);
    const existingProduct = wishlistArr.find((product) => {
      return product.id === productObj.id;
    });
    if (existingProduct) return;
    setWishlistArr([...wishlistArr, productObj]);
  }

  function handleRemoveFromWishlistClick(productToRemove) {
    const newArr = wishlistArr.filter(
      (product) => product.id !== productToRemove.id
    );
    setWishlistArr(newArr);
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlistArr,
        handleAddToWishlistClick,
        handleRemoveFromWishlistClick,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
