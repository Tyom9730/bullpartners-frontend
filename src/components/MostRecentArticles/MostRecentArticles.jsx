import React from "react";
import { ArticleData } from "../../utils/dummyData/ArticleDummyData";
import Button from "../Button/Button";
import "./MostRecentArticles.scss";
const MostRecentArticles = () => {
  return (
    <div className="most-recent-articles">
      <div className="container">
        <div>
          <h1 className="title">Or check out our most recent articles</h1>
          <div className="filter-section">
            <h3 className="filter-title">Filter Posts</h3>
            <div className="filters">
              <div className="filter active">
                <span>All</span>
              </div>
              <div className="filter ">
                <span>Case Studies</span>
              </div>
              <div className="filter ">
                <span>Guides</span>
              </div>
              <div className="filter">
                <span>Updates</span>
              </div>
              <div className="filter">
                <span>Growth Machine</span>
              </div>
            </div>
          </div>
        </div>
        <div className="recet-aricle-list">
          <div>
            {ArticleData.map((item) => {
              return (
                <div className="article" key={item.id}>
                  <div>
                    <img src={item.image} alt="article" />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span>Read more</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pagination">
            <div />
            <Button className="primary">Next </Button>
            <span>1/15</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostRecentArticles;
