import React from "react";
import "./Card.css";

function Card({ name, image, price, average, reviews }) {
  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="card-content">
        <h2 className="card-name">{name}</h2>
        <p className="card-price">{price}</p>
        <div className="rating-content">
          <p className="card-average">{average.toFixed(2)}&#9734;</p>
          <p className="card-reviews">Reviews {reviews}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
