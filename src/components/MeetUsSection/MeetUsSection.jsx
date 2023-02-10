import React from "react";
import "./MeetUsSection.scss";
import Slider from "react-slick";

const MeetUsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="meet-us-section">
      <div className="container">
        <div className="meet-us">
          <h1 className="title">Meet us in person</h1>
          <div className="event-details">
            <h3 className="subtitle">Bullpartnets Event</h3>
            <div className="date">
              <p>02.06.2022</p>
              <p>13:00</p>
            </div>
            <p className="event-info">
              “Bullpartners will at the hmv Underground at 333 Yonge Street on
              June 02, 2022 at 13:00 aM. Space is limited.
            </p>
            <p className="website-name">Bullpartners.io</p>
          </div>
        </div>
        <div className="event-slider">
          <Slider {...settings}>
            <div className="card">
              <p className="website-name">Bullpartners.io</p>
              <h3 className="name">Bullpartnets Event</h3>
              <div className="card-date">
                <p>02.06.2022</p>
                <p>13:00</p>
              </div>
            </div>
            <div className="card">
              <p className="website-name">Bullpartners.io</p>
              <h3 className="name">Bullpartnets Event</h3>
              <div className="card-date">
                <p>02.06.2022</p>
                <p>13:00</p>
              </div>
            </div>
            <div className="card">
              <p className="website-name">Bullpartners.io</p>
              <h3 className="name">Bullpartnets Event</h3>
              <div className="card-date">
                <p>02.06.2022</p>
                <p>13:00</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="event-slider-mobile">
        <h1 className="title-mobile">Meet us in person</h1>
        <Slider {...settings}>
          <div className="card">
            <p className="website-name">Bullpartners.io</p>
            <h3 className="name">Bullpartnets Event</h3>
            <div className="card-date">
              <p>02.06.2022</p>
              <p>13:00</p>
            </div>
          </div>
          <div className="card">
            <p className="website-name">Bullpartners.io</p>
            <h3 className="name">Bullpartnets Event</h3>
            <div className="card-date">
              <p>02.06.2022</p>
              <p>13:00</p>
            </div>
          </div>
          <div className="card">
            <p className="website-name">Bullpartners.io</p>
            <h3 className="name">Bullpartnets Event</h3>
            <div className="card-date">
              <p>02.06.2022</p>
              <p>13:00</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MeetUsSection;
