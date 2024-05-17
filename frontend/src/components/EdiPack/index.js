import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for routing
import './index.css';

const EdiPack = () => {
  const [articles, setArticles] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    // Fetch recent articles when the component mounts
    async function fetchArticles() {
      try {
        const response = await axios.get('https://runoblog.onrender.com/blogs'); // Replace URL with your API endpoint
        setArticles(response.data.slice(0, 3)); // Assuming you want to display the recent three articles
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    }

    fetchArticles();
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((article) => article.type === activeCategory);

  return  (
    <>
      <section className="editor’s">
        <div className="container">
          <h2 className="editor’s-title">Editor’s Pick</h2>
          <div className="row">
            {filteredArticles.map((article) => (
              <div key={article.id} className="col-md-4">
                <Link
                  to={`/article/${article.id}`}
                  className="card-link"
                  style={{ textDecoration: 'none', color: 'inherit' }} // Remove underline and default color
                >
                  <div className="card mb-4 shadow-sm border-0">
                    <img className="card-img-top" src={article.imageURL} alt={article.title}/>
                    <div className="card-body">
                      <h5 className="card-title">{article.title}</h5>
                      <p className="card-text">{article.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default EdiPack;
