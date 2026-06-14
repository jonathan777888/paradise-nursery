import { useState } from "react";
import "./App.css";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div>
      {currentPage === "home" && (
        <div className="landing-page">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>
            <p>Your online destination for beautiful indoor plants.</p>
            <button
              className="start-button"
              onClick={() => setCurrentPage("products")}
            >
              Get Started
            </button>
          </div>
        </div>
      )}

      {currentPage === "about" && <AboutUs />}

      {currentPage === "products" && (
        <ProductList setCurrentPage={setCurrentPage} />
      )}

      {currentPage === "cart" && (
        <CartItem setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
}

export default App;
