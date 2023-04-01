import axios from "axios";

// const axios = require("axios");

const newsAPIKey = "26990e3002fe46d0a2dd9580dbf8c38a";
const newsBaseURL = "https://newsapi.org";
const newsEndPoint = "/v2/top-headlines";

const countries = ["us", "au", "ca"];
const randomCountry = countries[Math.floor(Math.random() * countries.length)];

const apiRequests = {
  getTechNews: async () => {
    try {
      const response = await axios.get(
        `${newsBaseURL}${newsEndPoint}?category=technology&country=${randomCountry}&apiKey=${newsAPIKey}`
      );

      //   console.log(response);

      const jsonResponse = await response.data.articles;

      const news = jsonResponse.map((article) => ({
        title: article.title,
        url: article.url,
        img: article.urlToImage,
      }));

      return news;
    } catch (error) {
      console.log("An error occured!", error);
    }
  },
};

export default apiRequests;

// const test = async () => {
//   const results = await apiRequests.getTechNews();

//   console.log(results);
// };

// test();
