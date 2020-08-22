import axios from "axios";

const key = "AIzaSyBneZ0Ay1NexbJv1CXtkrJxmYUoNk7X_PE";

let Api = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key
  }
});

export default Api;
