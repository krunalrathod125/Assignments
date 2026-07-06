import React from "react";

function ProductCard({ product }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <img
          src={product.img}
          className="card-img-top"
          alt={product.name}
          style={{ height: "250px", objectFit: "cover" }}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.name}</h5>

          <p className="card-text text-muted">
            {product.description}
          </p>

          <h4 className="text-success mt-auto">
            ₹{product.price.toLocaleString()}
          </h4>

          <button className="btn btn-primary mt-3">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;