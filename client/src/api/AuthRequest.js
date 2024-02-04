import axios from "axios";

//baseURL indicates that evertime we make a request to server port 5001 is used
const API = axios.create({ baseURL: "http://localhost:5001" });

export const logIn = (formData) => API.post("/auth/login", formData);

export const signUp = (formData) => API.post("/auth/register", formData);
