import React from "react";
import "./App.css";
import data from "./data";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
const openSidebar = () => {
  document.querySelector(".sidebar").classList.add("open");
  console.log("work");
};

const closeSidebar = () => {
  document.querySelector(".sidebar").classList.remove("open");
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <header className="header">
          <div className="logo">
            <button onClick={openSidebar}>&#9776;</button>
            <a href="index.html">Logo</a>
          </div>
          <nav></nav>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Categories</h3>
          <button className="sidebar__close-button" onClick={closeSidebar}>
            &times;
          </button>
          <ul>
            <li>
              <a href="index.html">Pants</a>
            </li>
            <li>
              <a href="index.html">Shirts</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/" exact={true} component={Home} />
            <Route path="/products/:id" exact component={Product} />
            <ul className="products-list">
              {data.products.map((product) => (
                <li key={product.id}>
                  <div className="product-card">
                    <img
                      className="product-card__image"
                      src={product.image}
                      alt={product.name}
                    />
                    <div className="product-card__name">
                      <a href="product.html">{product.name}</a>
                    </div>
                    <div className="product-card__brand">{product.brand}</div>
                    <div className="product-card__price">{product.price}</div>
                    <div className="product-card__rating">
                      {product.rating} Stars ({product.reviews} Reviews)
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </main>
        <footer className="footer">
          All rights reserved.&nbsp; 2020&copy;
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
