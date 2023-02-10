import React from "react";
import Button from "../Button/Button";
import "./BlogHeroSection.scss";

const BlogHeroSection = () => {
  return (
    <div className="blog-hero-section">
      <div className="container">
        <h1 className="title">The Growth Machine Blog</h1>
        <div className="get-lessons-form">
          <h3 className="form-title">
            Get our behind-the-scenes lessons on how to grow blogs to 100,000+
            monthly readers.
          </h3>
          <div className="form">
            <input type="text" placeholder="Enter your mail" />
            <Button className="primary">Affiliate</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeroSection;
