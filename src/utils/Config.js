import axios from "axios";

// const axios = require("axios");
const jobsApiKey = "f964ce7b28mshb78919b83caff91p11222fjsn9711575edaa0";

const YouTubeAPIKEY = "AIzaSyBP0LSkncAjsHfHk-T43LtUOkeB_cAGos8";
const YouTubeUrl = "https://www.googleapis.com/youtube/v3";

const newsAPIKey = "26990e3002fe46d0a2dd9580dbf8c38a";
const newsBaseURL = "https://newsapi.org";
const newsEndPoint = "/v2/top-headlines";

const countries = ["us", "au", "ca"];
const randomCountry = countries[Math.floor(Math.random() * countries.length)];

const jobs = ["Internships", "Jobs"];
const randomJob = jobs[Math.floor(Math.random() * jobs.length)];

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
  getJobs: async () => {
    try {
      const options = {
        method: "GET",
        url: "https://jsearch.p.rapidapi.com/search",
        params: {
          query: `Google ${randomJob}`,
          page: "1",
          num_pages: "1",
        },
        headers: {
          "X-RapidAPI-Key": `${jobsApiKey}`,
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);

      const jsonResponse = await response.data.data;
      // console.log(jsonResponse);

      const jobs = jsonResponse.map((job) => ({
        title: job.job_title,
        logo: job.employer_logo,
        applyLink: job.job_apply_link,
      }));

      return jobs;
    } catch (error) {
      console.log("Something went wrong while fetching Jobs! ", error);
    }
  },
  getVideos: async (query) => {
    // const query = "Free code camp";
    try {
      const response = await axios.get(
        `${YouTubeUrl}/search?key=${YouTubeAPIKEY}&part=snippet&type=video&q=${query}&maxResults=50`
      );

      const jsonResponse = await response.data.items;

      const videos = jsonResponse.map((video) => ({
        title: video.snippet.title,
        thumbnail: video.snippet.thumbnails.high.url,
        videoId: video.id.videoId,
      }));

      return videos;
    } catch (error) {
      console.log("Error Loading Youtube video!", error);
    }
  },
  getRandomvideo: async () => {
    const channelId = "UC8butISFwT-Wl7EV0hUK0BQ"; // FreeCodeCamp channel ID
    try {
      const response = await axios.get(
        `${YouTubeUrl}/search?key=${YouTubeAPIKEY}&part=snippet&type=video&channelId=${channelId}&maxResults=50`
      );

      const jsonResponse = await response.data.items;

      const randomVideo =
        jsonResponse[Math.floor(Math.random() * jsonResponse.length)];

      const video = {
        title: randomVideo.snippet.title,
        thumbnail: randomVideo.snippet.thumbnails.high.url,
        videoId: randomVideo.id.videoId,
      };

      return [video];
    } catch (error) {
      console.log("Error loading YouTube video!", error);
    }
  },
};

export default apiRequests;
