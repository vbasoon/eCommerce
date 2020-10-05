import React from "react";
import "./App.css";
import data from "./data";
import { BrowserRouter, Route, Link } from "react-router-dom";
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
            <Link to="/">Logo</Link>
          </div>
          <nav></nav>
          <div className="header-links">
            <Link to="cart.html">Cart</Link>
            <Link to="signin.html">Sign In</Link>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Categories</h3>
          <button className="sidebar__close-button" onClick={closeSidebar}>
            &times;
          </button>
          <ul>
            <li>
              <Link to="/products:id">Pants</Link>
            </li>
            <li>
              <Link to="//products:id">Shirts</Link>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/" exact={true} component={Home} />
            <Route path="/products/:id" exact component={Product} />
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
