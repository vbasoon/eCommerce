import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <button onclick="openSidebar()">&#9776;</button>
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
        <button className="sidebar__close-button" onclick="closeSidebar()">
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
          <ul className="products-list">
            <li>
              <div className="product-card">
                <img
                  className="product-card__image"
                  src="./images/1.jpeg"
                  alt="product1"
                />
                <div className="product-card__name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-card__brand">Nike</div>
                <div className="product-card__price">$60</div>
                <div className="product-card__rating">
                  4.5 Stars (10 Reviews)
                </div>
              </div>
            </li>
            <li>
              <div className="product-card">
                <img
                  className="product-card__image"
                  src="./images/1.jpeg"
                  alt="product1"
                />
                <div className="product-card__name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-card__brand">Nike</div>
                <div className="product-card__price">$60</div>
                <div className="product-card__rating">
                  4.5 Stars (10 Reviews)
                </div>
              </div>
            </li>
            <li>
              <div className="product-card">
                <img
                  className="product-card__image"
                  src="./images/1.jpeg"
                  alt="product1"
                />
                <div className="product-card__name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-card__brand">Nike</div>
                <div className="product-card__price">$60</div>
                <div className="product-card__rating">
                  4.5 Stars (10 Reviews)
                </div>
              </div>
            </li>
            <li>
              <div className="product-card">
                <img
                  className="product-card__image"
                  src="./images/1.jpeg"
                  alt="product1"
                />
                <div className="product-card__name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-card__brand">Nike</div>
                <div className="product-card__price">$60</div>
                <div className="product-card__rating">
                  4.5 Stars (10 Reviews)
                </div>
              </div>
            </li>
            <li>
              <div className="product-card">
                <img
                  className="product-card__image"
                  src="./images/1.jpeg"
                  alt="product1"
                />
                <div className="product-card__name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-card__brand">Nike</div>
                <div className="product-card__price">$60</div>
                <div className="product-card__rating">
                  4.5 Stars (10 Reviews)
                </div>
              </div>
            </li>
            <li>
              <div className="product-card">
                <img
                  className="product-card__image"
                  src="./images/1.jpeg"
                  alt="product1"
                />
                <div className="product-card__name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-card__brand">Nike</div>
                <div className="product-card__price">$60</div>
                <div className="product-card__rating">
                  4.5 Stars (10 Reviews)
                </div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer className="footer">All rights reserved.&nbsp; 2020&copy;</footer>
    </div>
  );
}

export default App;
