import React from "react";
import Button from "../Button/Button";
import "./BestOffers.scss";
const BestOffers = () => {
  return (
    <div className="best-offers-section">
      <div className="container">
        <div>
          <h1 className="title">Get the best offers and trends weekly</h1>
          <div className="main-form">
            <input type="text" placeholder="Enter your mail" />
            <Button className="primary">Affiliate</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestOffers;
