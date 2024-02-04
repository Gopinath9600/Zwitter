import axios from "axios";

//baseURL indicates that evertime we make a request to server port 5000 is used
const API = axios.create({ baseURL: "http://localhost:5001" });

export const getTimelinePosts = (id) => API.get(`/post/${id}/timeline`);
export const likePost = (id, userId) =>
  API.put(`post/${id}/like`, { userId: userId });
