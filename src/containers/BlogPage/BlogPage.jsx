import React from "react";
import BlogStartHere from "../../components/BlogStartHere/BlogStartHere";
import BlogHeroSection from "./../../components/BlogHeroSection/BlogHeroSection";
import MostRecentArticles from "./../../components/MostRecentArticles/MostRecentArticles";
import HireUs from "./../../components/HireUs/HireUs";

const BlogPage = () => {
  return (
    <div className="blog-page-container">
      <BlogHeroSection />
      <BlogStartHere />
      <MostRecentArticles />
      <HireUs />
    </div>
  );
};

export default BlogPage;
