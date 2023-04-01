import apiRequests from "../../../utils/Config";
import "./News.css";

export const News = () => {
  const newsArticles = async () => {
    const results = await apiRequests.getTechNews();

    console.log(results);

    return results;
  };

  newsArticles();

  return (
    <div>
      <p>News News!</p>
    </div>
  );
};
