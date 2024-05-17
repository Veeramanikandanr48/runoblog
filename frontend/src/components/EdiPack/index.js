import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { TailSpin } from "react-loader-spinner";
import './index.css';

const EdiPack = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await axios.get('https://runoblog.onrender.com/blogs');
        setArticles(response.data.slice(0, 3));
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    }

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div className="loader-container min-vh-20 d-flex justify-content-center align-items-center">
        <TailSpin color="#00BFFF" height={80} width={80} />
      </div>
    );
  }

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((article) => article.type === activeCategory);

  return (
    <>
      <section className="editor’s">
        <div className="container">
          <h2 className="editor’s-title">Editor’s Pick</h2>
          <div className="row">
            {filteredArticles.map((article) => (
              <div key={article.id} className="col-md-4">
                <Link
                  to={`/article/${article._id}`}
                  className="card-link"
                  style={{ textDecoration: 'none', color: 'inherit' }}
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
