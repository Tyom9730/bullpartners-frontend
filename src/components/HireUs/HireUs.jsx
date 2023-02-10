import React from "react";
import Button from "../Button/Button";
import "./HireUs.scss";
const HireUs = () => {
  return (
    <div className="hire-us-section">
      <div className="container">
        <h1 className="title">Want to hire us?</h1>
        <p className="desc">Let's talk about your SEO potential.</p>
        <div className="form">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <input type="text" placeholder="Your website's URL " />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="How did you hear about us?" />
          <Button className="primary">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default HireUs;
