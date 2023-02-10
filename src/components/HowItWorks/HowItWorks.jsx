import React from "react";
import Button from "../Button/Button";
import "./HowItWorks.scss";
import bullHead from "../../assets/images/main-page/bull-head.png";
const HowItWorks = () => {
  return (
    <div className="how-it-works-section">
      <div className="container">
        <h1 className="title">How it Works for Affiliates</h1>
        <p className="desc">
          Our mission is to connect webmasters with best brands
        </p>
        <div className="how-it-works">
          <div className="variants">
            <div className="variant red">
              <p className="number">1</p>
              <h3 className="name">
                <span>Register</span> with us
              </h3>
              <div className="gradient-bg red" />
              <div className="circle">
                {" "}
                <div />
              </div>
            </div>
            <div className="variant blue">
              <p className="number">2</p>
              <h3 className="name">
                <span>Choose your</span> offer and promote
              </h3>
              <div className="gradient-bg blue" />
              <div className="circle">
                {" "}
                <div />
              </div>
            </div>
            <div className="variant green">
              <p className="number">3</p>
              <h3 className="name">
                <span>Get paid</span> <br /> and <br /> scale up
              </h3>
              <div className="gradient-bg green" />
              <div className="circle">
                {" "}
                <div />
              </div>
            </div>
          </div>
          <hr className="line" />
          <Button className="primary">Register now</Button>
        </div>
      </div>
      <img src={bullHead} alt="bullHead" />
    </div>
  );
};

export default HowItWorks;
