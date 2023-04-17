import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import { WishlistContext } from "./Contexts/WishlistContext";
import { CartContext } from "./Contexts/CartContext";
import { useContext } from "react";

import { Link } from "react-router-dom";

export default function NavigationBar() {
  const { cartArr } = useContext(CartContext);
  const { wishlistArr } = useContext(WishlistContext);

  const activeNavLinkStyle = ({ isActive }) => ({
    color: isActive ? "#f2c500" : "#fff",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <nav className="navbar">
      <div className="navbar-branding">meKart</div>
      <div className="navbar-links">
        <NavLink to="/" className="navbar-link" style={activeNavLinkStyle}>
          Home
        </NavLink>{" "}
        <NavLink
          to="/products"
          className="navbar-link"
          style={activeNavLinkStyle}
        >
          Products
        </NavLink>{" "}
        <NavLink to="/cart" className="navbar-link" style={activeNavLinkStyle}>
          Cart
        </NavLink>{" "}
        <NavLink
          to="/wishlist"
          className="navbar-link"
          style={activeNavLinkStyle}
        >
          Wishlist
        </NavLink>
      </div>

      <div className="navbar-icons">
        <Link className="navbar-icon" to="/wishlist">
          <FontAwesomeIcon icon={faHeart} />
          {wishlistArr.length !== 0 && (
            <span className="navbar-icon-badge">{wishlistArr.length}</span>
          )}
        </Link>

        <Link className="navbar-icon" to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} />
          {cartArr.length !== 0 && (
            <span className="navbar-icon-badge">{cartArr.length}</span>
          )}
        </Link>
      </div>
    </nav>
  );
}
