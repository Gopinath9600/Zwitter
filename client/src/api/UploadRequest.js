import axios from "axios";

//baseURL indicates that evertime we make a request to server port 5000 is used
const API = axios.create({ baseURL: "http://localhost:5001" });

export const uploadImage = (data) => API.post("/upload/", data);
export const uploadPost = (data) => API.post("/post", data);
