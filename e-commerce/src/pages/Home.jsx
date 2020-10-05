import React from "react";
import data from "../data";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <ul className="products-list">
        {data.products.map((product) => (
          <li key={product._id}>
            <div className="product-card">
              <Link to={"/products/" + product._id}>
                <img
                  className="product-card__image"
                  src={product.image}
                  alt={product.name}
                />
              </Link>

              <div className="product-card__name">
                <Link to={"/products/" + product._id}>{product.name}</Link>
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
  );
};

export default Home;
