import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "./Contexts/ProductsContext";
import { CartContext } from "./Contexts/CartContext";
import { WishlistContext } from "./Contexts/WishlistContext";

export default function ProductList() {
  const { productsListData, isLoading, isError } = useContext(ProductsContext);
  const { handleAddToCartClick } = useContext(CartContext);
  const { handleAddToWishlistClick } = useContext(WishlistContext);

  const productListMapped = productsListData.map((product) => (
    <li key={product?.id} className="product-card">
      <img src={product?.src} alt={product?.name} className="product-img" />
      <h4 className="product-name">
        <span className="product-label">Name:</span> {product?.name}
      </h4>
      <p className="product-price">
        <span className="product-label">Price:</span>{" "}
        <span className="product-price-amount">{product?.price}</span>
      </p>
      <p className="product-brand">
        <span className="product-label">Brand:</span> {product?.brand}
      </p>
      <Link to={`/products/${product?.id}`} className="product-link">
        View Details
      </Link>
      <br />
      <button
        onClick={() => handleAddToCartClick(product)}
        className="add-to-cart-btn"
      >
        Add to Cart
      </button>
      <button
        onClick={() => handleAddToWishlistClick(product)}
        className="add-to-wishlist-btn"
      >
        Add to Wishlist
      </button>
    </li>
  ));

  return (
    <div className="center-container">
      <h1 className="page-title">Product List</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error: {isError}</p>
      ) : (
        <ol className="product-list">{productListMapped}</ol>
      )}
    </div>
  );
}
