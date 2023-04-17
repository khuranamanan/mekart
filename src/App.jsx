import { Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";
import Home from "./Home";
import WishList from "./Wishlist";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";
import PageNotFound from "./PageNotFound";

import NavigationBar from "./NavigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
