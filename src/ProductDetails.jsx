import { useParams } from "react-router";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "./Contexts/ProductsContext";
import { CartContext } from "./Contexts/CartContext";
import { WishlistContext } from "./Contexts/WishlistContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { productsListData, isLoading, isError } = useContext(ProductsContext);
  const { handleAddToCartClick } = useContext(CartContext);
  const { handleAddToWishlistClick } = useContext(WishlistContext);

  const product = productsListData?.find(
    (item) => item.id.toString() === id.toString()
  );
  console.log(id, product);

  const productMapped = (product) => (
    <div className="center-container product-card product-details-card">
      <Link to={`/products`} className="product-link">
        {" "}
        Go back{" "}
      </Link>
      <h3 className="page-title">About</h3>
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
      <p className="product-desc">
        <span className="product-label"> Description: </span>{" "}
        {product?.description}{" "}
      </p>
      <p className="product-category">
        <span className="product-label"> Category: </span> {product?.category}{" "}
      </p>
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
    </div>
  );

  return (
    <div className="center-container">
      {isLoading ? (
        <p>..Loading</p>
      ) : isError ? (
        <p> {isError} </p>
      ) : (
        productMapped(product)
      )}
    </div>
  );
}
