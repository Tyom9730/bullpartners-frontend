import React from "react";
import "./Footer.scss";
import websiteLogo from "../../assets/images/website-logo.png";
import { Link } from "react-router-dom";
import Facebook from "./../Icons/Facebook";
import Linkdin from "../Icons/Linkdin";
import Telegram from "../Icons/Telegram";
import Instagram from "../Icons/Instagram";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="footer-logo-section">
          <div className="website-logo">
            <Link to="/">
              <img src={websiteLogo} alt="websiteLogo" />
            </Link>
          </div>
          <p className="info">© 2022 Bullpartners. All rights reserved</p>
        </div>
        <div className="socials">
          <Facebook />
          <Linkdin />
          <Telegram />
          <Instagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
