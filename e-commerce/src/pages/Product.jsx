import React from "react";
import data from "../data";
import { Link } from "react-router-dom";

const Product = (props) => {
  const product = data.products.find((a) => a._id === props.match.params.id);
  return (
    <div>
      <div className="Product__link-back">
        <Link to="/">Назад до Головної</Link>
      </div>
      <div className="product__details">
        <div className="product__details-image ">
          <img
            className="product-image"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="product__details-info">
          <ul>
            <li className="product__details-name">
              <h1 className="product__detail-title">{product.name}</h1>
              <h3 className="product__details-brand">{product.brand}</h3>
            </li>
            <li className="product__details__price price">
              Price:
              <b> ${product.price}</b>
            </li>
            <li className="product__details-rating">
              {product.rating} Stars ({product.reviews} Reviews)
            </li>
            <li className="product__details-description">
              <h3>Description:</h3>
              {product.desc}
            </li>
          </ul>
        </div>
        <div className="product__details-action">
          <ul>
            <li>
              Price: $ <b>{product.price}</b>
            </li>
            <li>Status: {product.state}</li>
            <li>
              Qti:{" "}
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </li>
            <li>
              <button className="btn-action btn">Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Product;
