import React from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2 className="title">Products List</h2>
      <div className="card-container">
        <ProductCard name="Wireless Mouse" price="25.99" status="In Stock" />
        <ProductCard name="Keyboard" price="45.5" status="Out of Stock" />
        <ProductCard name="Monitor" price="199.99" status="In Stock" />
      </div>
    </div>
  );
}

export default App;
