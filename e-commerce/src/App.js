import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div class="container">
      <header class="header">
        <div class="logo">
          <button onclick="openSidebar()">&#9776;</button>
          <a href="index.html">Logo</a>
        </div>
        <nav></nav>
        <div class="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <aside class="sidebar">
        <h3>Categories</h3>
        <button class="sidebar__close-button" onclick="closeSidebar()">
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
      <main class="main">
        <div class="content">
          <ul class="products-list">
            <li>
              <div class="product-card">
                <img
                  class="product-card__image"
                  src="./images/1.jpeg"
                  alt="product1"
                />
                <div class="product-card__name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div class="product-card__brand">Nike</div>
                <div class="product-card__price">$60</div>
                <div class="product-card__rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div class="product-card">
                <img
                  class="product-card__image"
                  src="./images/1.jpeg"
                  alt="product1"
                />
                <div class="product-card__name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div class="product-card__brand">Nike</div>
                <div class="product-card__price">$60</div>
                <div class="product-card__rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div class="product-card">
                <img
                  class="product-card__image"
                  src="./images/1.jpeg"
                  alt="product1"
                />
                <div class="product-card__name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div class="product-card__brand">Nike</div>
                <div class="product-card__price">$60</div>
                <div class="product-card__rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div class="product-card">
                <img
                  class="product-card__image"
                  src="./images/1.jpeg"
                  alt="product1"
                />
                <div class="product-card__name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div class="product-card__brand">Nike</div>
                <div class="product-card__price">$60</div>
                <div class="product-card__rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div class="product-card">
                <img
                  class="product-card__image"
                  src="./images/1.jpeg"
                  alt="product1"
                />
                <div class="product-card__name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div class="product-card__brand">Nike</div>
                <div class="product-card__price">$60</div>
                <div class="product-card__rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div class="product-card">
                <img
                  class="product-card__image"
                  src="./images/1.jpeg"
                  alt="product1"
                />
                <div class="product-card__name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div class="product-card__brand">Nike</div>
                <div class="product-card__price">$60</div>
                <div class="product-card__rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer class="footer">All rights reserved.&nbsp; 2020&copy;</footer>
    </div>
  );
}

export default App;
