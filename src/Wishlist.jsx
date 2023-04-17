import { useContext } from "react";
import { WishlistContext } from "./Contexts/WishlistContext";
import { CartContext } from "./Contexts/CartContext";

export default function WishList() {
  const { wishlistArr, handleRemoveFromWishlistClick } =
    useContext(WishlistContext);
  const { handleAddToCartClick } = useContext(CartContext);

  const wishlistArrMapped = wishlistArr.map((item) => (
    <li key={item?.id} className="product-card">
      <img src={item?.src} alt={item?.name} className="product-img" />
      <h3 className="product-name"> {item?.name} </h3>
      <p className="product-price">
        <span className="product-label">Price:</span>{" "}
        <span className="product-price-amount">{item?.price}</span>
      </p>
      <button
        onClick={() => handleAddToCartClick(item)}
        className="add-to-cart-btn"
      >
        Add to Cart
      </button>
      <button
        onClick={() => handleRemoveFromWishlistClick(item)}
        className="remove-from-wishlist-btn"
      >
        Remove From Wishlist
      </button>
    </li>
  ));

  return (
    <div className="center-container">
      <h1 className="page-title">Wishlist</h1>
      <ol className="product-list"> {wishlistArrMapped} </ol>
    </div>
  );
}
