import React from "react";
import data from "../data";

const Home = (props) => {
  return (
    <div>
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
  );
};

export default Home;
