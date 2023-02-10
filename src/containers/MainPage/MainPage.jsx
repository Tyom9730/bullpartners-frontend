import React from "react";
import "./MainPage.scss";
import MainPageFirstSection from "./../../components/MainPageFirstSection/MainPageFirstSection";
import PartnersMainPage from "./../../components/PartnersMainPage/PartnersMainPage";
import HowItWorks from "./../../components/HowItWorks/HowItWorks";
import MeetUsSection from "./../../components/MeetUsSection/MeetUsSection";
import BestOffers from "./../../components/BestOffers/BestOffers";

const MainPage = () => {
  return (
    <div className="main-page-container">
      <MainPageFirstSection />
      <div className="container">
        <PartnersMainPage />
      </div>
      <HowItWorks />
      <MeetUsSection />
      <BestOffers />
    </div>
  );
};

export default MainPage;
