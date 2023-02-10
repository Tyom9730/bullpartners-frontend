import React from "react";
import "./PartnersMainPage.scss";
import partner1 from "../../assets/images/main-page/partner-1.png";
import partner2 from "../../assets/images/main-page/partner-2.png";
import partner3 from "../../assets/images/main-page/partner-3.png";
import partner4 from "../../assets/images/main-page/partner-4.png";
import partner5 from "../../assets/images/main-page/partner-5.png";
import partner6 from "../../assets/images/main-page/partner-6.png";

const PartnersMainPage = () => {
  return (
    <div className="partners-section">
      <div className="partner">
        <img src={partner1} alt="partner1" />
      </div>
      <div className="partner">
        <img src={partner2} alt="partner2" />
      </div>
      <div className="partner">
        <img src={partner3} alt="partner3" />
      </div>
      <div className="partner">
        <img src={partner4} alt="partner4" />
      </div>
      <div className="partner">
        <img src={partner5} alt="partner5" />
      </div>
      <div className="partner">
        <img src={partner6} alt="partner6" />
      </div>
      <div className="marquee-block">
        <div className="marquee-inner to-left">
          <span>
            <div className="marquee-item">
              <img src={partner1} alt="partner1" />
            </div>
            <div className="marquee-item">
              <img src={partner2} alt="partner2" />
            </div>
            <div className="marquee-item">
              <img src={partner3} alt="partner3" />
            </div>
            <div className="marquee-item">
              <img src={partner4} alt="partner4" />
            </div>
            <div className="marquee-item">
              <img src={partner5} alt="partner5" />
            </div>
            <div className="marquee-item">
              <img src={partner6} alt="partner6" />
            </div>
          </span>
          <span>
            <div className="marquee-item">
              <img src={partner1} alt="partner1" />
            </div>
            <div className="marquee-item">
              <img src={partner2} alt="partner2" />
            </div>
            <div className="marquee-item">
              <img src={partner3} alt="partner3" />
            </div>
            <div className="marquee-item">
              <img src={partner4} alt="partner4" />
            </div>
            <div className="marquee-item">
              <img src={partner5} alt="partner5" />
            </div>
            <div className="marquee-item">
              <img src={partner6} alt="partner6" />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PartnersMainPage;
