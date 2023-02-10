import React, { useState } from "react";
import "./Header.scss";
import websiteLogo from "../../assets/images/website-logo.png";
import { Link } from "react-router-dom";
import Button from "./../Button/Button";
import MenuIcon from "../Icons/MenuIcon";
import Sidebar from "react-sidebar";
import Facebook from "./../Icons/Facebook";
import Linkdin from "../Icons/Linkdin";
import Telegram from "../Icons/Telegram";
import Instagram from "../Icons/Instagram";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const onSetSidebarOpen = (open) => {
    console.log("sidebarOpen", sidebarOpen);
    setSidebarOpen(open);
    if (sidebarOpen) {
      document
        .querySelector(".sidebar-root")
        .classList.remove("sidbar-container");
      document.querySelector("body").classList.remove("fixed");
    } else {
      document.querySelector(".sidebar-root").classList.add("sidbar-container");
      document.querySelector("body").classList.add("fixed");
      document.querySelector(".mobile-menu-logo").style.zIndex = "1";
    }
  };

  return (
    <div className="website-header">
      <div className="container">
        <div className="navbar">
          <div className="website-logo">
            <Link to="/">
              <img src={websiteLogo} alt="websiteLogo" />
            </Link>
          </div>
          <ul className="nav">
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
          </ul>
        </div>
        <div className="header-buttons">
          <Button className="secondary">Log In</Button>
        </div>
        <div className="website-lenguage">
          <p className="active">EN</p>
          <p>RU</p>
        </div>
        <div onClick={() => document.querySelector(".sidebar-action").click()}>
          <MenuIcon />
        </div>
        <Sidebar
          sidebar={
            <div>
              <ul className="sidebar-nav">
                <li>
                  <div onClick={() => onSetSidebarOpen(false)}>
                    <MenuIcon />
                  </div>
                </li>
                <li>
                  <Link to="/login" onClick={() => onSetSidebarOpen(false)}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/blog" onClick={() => onSetSidebarOpen(false)}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contract" onClick={() => onSetSidebarOpen(false)}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/events" onClick={() => onSetSidebarOpen(false)}>
                    Events
                  </Link>
                </li>
              </ul>
              <div className="sidebar-footer">
                <p className="info">© 2022 Bullpartners. All rights reserved</p>
                <div className="socials">
                  <Facebook />
                  <Linkdin />
                  <Telegram />
                  <Instagram />
                </div>
              </div>
            </div>
          }
          open={sidebarOpen}
          pullRight
          onSetOpen={onSetSidebarOpen}
          styles={{ sidebar: { background: "white" } }}
          rootClassName={"sidebar-root"}
          sidebarClassName={"sidebar"}
          contentClassName={"sidebar-content"}
          overlayClassName={"sidbar-overlay"}
        >
          <button
            className="sidebar-action"
            onClick={() => onSetSidebarOpen(true)}
          ></button>
        </Sidebar>
      </div>
    </div>
  );
};

export default Header;
