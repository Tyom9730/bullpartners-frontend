import React from "react";
import Button from "../Button/Button";
import "./MainPageFirstSection.scss";
import bullBg from "../../assets/images/bull-bg-logo.png";
const MainPageFirstSection = () => {
  return (
    <div className="main-first-section">
      <div className="container">
        <h1 className="title">
          The best <span id="highlighted"></span> performance
          marketing agency
        </h1>
        <p className="desc">Pay for clients not clicks</p>
        <div className="section-buttons">
          <Button className="primary">Affiliate</Button>
          <Button className="secondary">Advertiser</Button>
        </div>
        <p className="trusted">Trusted by</p>
      </div>
      <img className="bull-absolute-bg" src={bullBg} alt="bullBg" />
    </div>
  );
};

export default MainPageFirstSection;
