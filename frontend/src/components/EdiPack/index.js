import React, { useState } from "react";
import './index.css'

const EdiPack=()=>{
  const articles = [
    {
        "date": "08.08.2021",
        "description": "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
        "detailedDescription": "Travelling to Ruritania for his cousin’s coronation, Rudolf Rassendyll is forced to impersonate the king when the real monarch is poisoned. Duels, swimming moats at night, forbidden love – it all starts with the opening line, a classic call to adventure: “I wonder when in the world you’re going to do anything, Rudolf?” It spawned the Ruritanian romance, a genre featuring adventure in a fictional country – a famous descendent is William Goldman’s sublime The Princess Bride (1973).",
        "id": 1,
        "imageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Blog%20Image.png?alt=media&token=26e2d61a-eb59-4797-b47f-1fb8d89828aa",
        "job": "Thinker & Designer",
        "name": "Jennifer Lawrence",
        "profileImageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Ellipse%204%20(5).png?alt=media&token=289411c2-a4d6-44af-97e1-6f28fc0d3d2e",
        "title": "Dream destinations to visit this year in Paris",
        "type": "Adventure"
    },
    {
        "date": "08.08.2021",
        "description": "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
        "detailedDescription": "Spanning the golden era of comic books, Josef Kavalier arrives in New York a refugee and teams up with his cousin Sammy Klayman to create The Escapist, a Jewish fusion of Superman and The Scarlet Pimpernel. Travelling from Europe to Antarctica, the novel is a quest to escape from the horrors of the Holocaust: “Having lost his mother, father, brother and grandfather … his city, his history – his home – the usual charge levelled against comic books, that they offered merely an easy escape from reality, seemed to Joe actually to be a powerful argument on their behalf.”",
        "id": 2,
        "imageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Blog%20Image%20(1).png?alt=media&token=9e7ab1c8-b82b-4931-b5d2-f1007ff419ef",
        "job": "Thinker & Designer",
        "name": "Sean Anderson",
        "profileImageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Ellipse%204%20(7).png?alt=media&token=53413ca2-edee-4ce5-9cd9-bf08b49cd02b",
        "title": "Breathtaking first-person photos around Europe",
        "type": "Travel"
    },
    {
        "date": "08.08.2021",
        "description": "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
        "detailedDescription": "The Internet of Things, or IoT, refers to the network of interconnected devices that can collect and exchange data over the internet. This technology enables devices, appliances, vehicles, and other objects to communicate with each other, creating a seamless and interconnected ecosystem. IoT has already made significant advancements in areas like smart homes, wearable devices, and industrial automation. As IoT continues to develop, it is expected to streamline processes, optimize resource management, and enhance overall efficiency.",
        "id": 3,
        "imageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Blog%20Image%20(2).png?alt=media&token=26170c5d-83f3-4eda-8887-07822de39a6f",
        "job": "Journalist",
        "name": "Sarah Lawrence",
        "profileImageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Ellipse%204%20(2).png?alt=media&token=18c675cd-9384-49aa-b8dd-476d554ac4a1",
        "title": "What collectors need to know about authenticity",
        "type": "Technology"
    }
    ];

    const [activeCategory, setActiveCategory] = useState("All");

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
                <div className="card mb-4 shadow-sm border-0">
                  <img className="card-img-top" src={article.imageURL} alt={article.title}/>
                  <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default EdiPack;