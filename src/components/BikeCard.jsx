import React from "react";

function BikeCard({ brand, image, model, type, price }) {
  return (
    <div className="bike-card">
      <div className="brand">
        {brand}
      </div>

      <div className="bike-image-wrap">
        <img src={image} alt={model} />
      </div>

      <h2>{model}</h2>

      <p className="type">
        {type}
      </p>

      <p className="price">
        ₹ {price}
      </p>
    </div>
  );
}

export default BikeCard;