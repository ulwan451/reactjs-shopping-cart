import React from "react";
import PropTypes from "prop-types";
import Price from "./Price";

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="column">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img alt={product.title} src={product.imageSrc} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-5">{product.title}</p>
              <div className="content">{product.description}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="auto">
        <h5>
          <Price amount={product.price} />
        </h5>
        <button
          className="button is-info"
          onClick={() => handleAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  }),
  handleAddToCart: PropTypes.func.isRequired
};

export default Product;
