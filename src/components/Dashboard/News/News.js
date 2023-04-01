import { useEffect, useState } from "react";
import apiRequests from "../../../utils/Config";
import "./News.css";
import { NewsCard } from "./NewsCard";

export const News = () => {
  const [articles, setArticles] = useState([]);

  const newsArticles = async () => {
    const results = await apiRequests.getTechNews();

    // console.log(results);
    setArticles(results);
  };

  useEffect(() => {
    newsArticles();
  }, []);

  return (
    <div>
      {articles.map((article, key) => (
        <NewsCard
          key={key + 1}
          title={article.title}
          url={article.url}
          img={article.img}
        />
      ))}
    </div>
  );
};
