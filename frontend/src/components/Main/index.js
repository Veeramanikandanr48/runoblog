import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./RelatedTopic.css";

const Main = () => {
  const [articles, setArticles] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("https://runoblog.onrender.com/blogs");
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((article) => article.type === activeCategory);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <h1 className="topics">Popular topics</h1>
      <ul className="categories">
        <li
          className={activeCategory === "All" ? "active" : ""}
          onClick={() => handleCategoryClick("All")}
        >
          All
        </li>
        <li
          className={activeCategory === "Adventure" ? "active" : ""}
          onClick={() => handleCategoryClick("Adventure")}
        >
          Adventure
        </li>
        <li
          className={activeCategory === "Travel" ? "active" : ""}
          onClick={() => handleCategoryClick("Travel")}
        >
          Travel
        </li>
        <li
          className={activeCategory === "Fashion" ? "active" : ""}
          onClick={() => handleCategoryClick("Fashion")}
        >
          Fashion
        </li>
        <li
          className={activeCategory === "Technology" ? "active" : ""}
          onClick={() => handleCategoryClick("Technology")}
        >
          Technology
        </li>
        <li
          className={activeCategory === "Branding" ? "active" : ""}
          onClick={() => handleCategoryClick("Branding")}
        >
          Branding
        </li>
      </ul>
      <div className="whole-articles-container">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div className="every-article" key={article._id}>
              <Link to={`/article/${article._id}`}>
                <img src={article.imageURL} alt="Blog" className="blog-image" />
              </Link>
              <div className="blog-type">
                <p>{article.type}</p>
              </div>
              <span>{article.date}</span>
              <div>
                <p className="every-title">{article.title}</p>
                <span className="every-description">{article.description}</span>
              </div>
              <div className="profile-information-container">
                <img
                  src={article.profileImageURL}
                  alt="Profile"
                  className="profile-image"
                />
                <div className="job-information">
                  <p>By {article.name}</p>
                  <span>{article.job}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="all-articles-no-results h-50">
            <p>No Results Found :(</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Main;
