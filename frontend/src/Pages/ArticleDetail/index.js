import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Navbar from "../../components/Navbar";
import Footer, { SocialMedia } from "../../components/Footer";
import { TailSpin } from "react-loader-spinner";
import "./index.css"; // Import the CSS file

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`https://runoblog.onrender.com/blogs/${id}`);
        const data = await response.json();
        setArticle(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="loader-container min-vh-100 d-flex justify-content-center align-items-center">
    <TailSpin color="#00BFFF" height={80} width={80} />
  </div>
    );
  }

  return (
    <>
      <Navbar />
      <img
        src={article.imageURL}
        alt="Blog"
        className="img-fluid mb-4 w-100"
      />{" "}
      {/* Adjust the height here */}
      <div className="container mt-5 d-flex justify-content-around">
        <p className="mb-3 d-none d-md-block">{article.date}</p>
        <div className="w-75">
          <div className="quill-editor">
            <ReactQuill
              value={article.content}
              readOnly={true}
              theme="snow"
              modules={{
                toolbar: false,
              }}
            />
          </div>
          <h1 className="text-center p-3 quote">
            &quot;<span className="text-orange quote">{article.title}</span>
            &quot;
          </h1>
          <div>
            <hr />
            <div className="d-flex justify-content-between mb-5">
              <div className="justify-content-start align-items-cente">
                <div className="d-flex justify-content-start align-items-center">
                  <img
                    src={article.profileImageURL}
                    alt="Profile"
                    className="profile-image m-3"
                  />
                  <p className="mb-0 fw-bold">By {article.name}</p>
                </div>
              </div>
              <div className="p-3">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ArticleDetail;
