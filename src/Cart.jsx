import { useContext } from "react";
import { CartContext } from "./Contexts/CartContext";

export default function Cart() {
  const { cartArr, handleRemoveFromCartClick, totalCartAmount } =
    useContext(CartContext);

  const cartArrMapped = cartArr.map((item) => (
    <li key={item?.id} className="product-card">
      <img src={item?.src} alt={item?.name} className="product-img" />
      <h3 className="product-name"> {item?.name} </h3>
      <p className="product-price">
        <span className="product-label">Price:</span>{" "}
        <span className="product-price-amount">{item?.price}</span>
      </p>
      <h4>Quantity: {item?.quantity} </h4>
      <button
        onClick={() => handleRemoveFromCartClick(item)}
        className="remove-from-cart-btn"
      >
        Remove From Cart
      </button>
    </li>
  ));

  return (
    <div className="center-container">
      <h1 className="page-title">Cart</h1>
      <ol className="product-list"> {cartArrMapped} </ol>
      <div className="cart-total-amount">
        <span className="product-label"> Total Amount</span>{" "}
        <p className="product-price-amount">{totalCartAmount}</p>{" "}
      </div>
    </div>
  );
}
