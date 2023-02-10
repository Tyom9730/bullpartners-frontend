import React from "react";
import "./BlogStartHere.scss";
import card1 from "../../assets/images/blog-page/card1.png";
import card2 from "../../assets/images/blog-page/card2.png";
import card3 from "../../assets/images/blog-page/card3.png";
import bigCard from "../../assets/images/blog-page/big-card.png";
import Button from "../Button/Button";

const BlogStartHere = () => {
  return (
    <div className="start-here-section">
      <div className="container">
        <h1 className="title">Start here</h1>
        <p className="desc">Our Most Popular Posts.</p>
        <div className="blogs-section">
          <div className="blogs-list">
            <div className="card">
              <div>
                <img src={card1} alt="card" />
              </div>
              <div>
                <h3>
                  From the CEO: Why and How I Spent Most of 2021 Making Myself
                  Obsolete
                </h3>
                <p>
                  Here are just a few of the many important reasons a CEO should
                  make themselves obsolete. Read on for my process of why, when,
                  and how to get yourself out of the way, to allow the company
                  to thrive.
                </p>
                <span>Read more</span>
              </div>
            </div>
            <div className="card">
              <div>
                <img src={card2} alt="card" />
              </div>
              <div>
                <h3>
                  Content Marketing: How Long Does It Take to See Results?
                </h3>
                <p>
                  How long until I see results from SEO? Here are six factors
                  that affect ranking progress.
                </p>
                <span>Read more</span>
              </div>
            </div>
            <div className="card">
              <div>
                <img src={card3} alt="card" />
              </div>
              <div>
                <h3>
                  7 Things You Need To Know About SEO (They’re Not What You
                  Think)
                </h3>
                <p>
                  Here's every lesson we wish business owners understood about
                  SEO.
                </p>
                <span>Read more</span>
              </div>
            </div>
          </div>
          <div className="main-blog">
            <div>
              <img src={bigCard} alt="bigCard" />
            </div>
            <div>
              <h1 className="card-title">
                From the CEO: Why and How I Spent Most of 2021 Making Myself
                Obsolete
              </h1>
              <p className="card-desc">
                Here are just a few of the many important reasons a CEO should
                make themselves obsolete. Read on for my process of why, when,
                and how to get yourself out of the way, to allow the company
                to thrive.
              </p>
              <Button className="primary">Read More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogStartHere;
