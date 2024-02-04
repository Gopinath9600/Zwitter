import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import AuthRoute from "./Routes/AuthRoute.js";
import UserRoute from "./Routes/UserRoute.js";
import PostRoute from "./Routes/PostRoute.js";
import UploadRoute from "./Routes/UploadRoute.js";

const app = express();

//const cors = require('cors'); same as import cors

//to serve images for public
// app.use(express.static("public"));
// app.use("/images", express.static("images"));

//Middleware
// bodyParser.json:-This middleware function is used to parse incoming request bodies with JSON payloads.
// It parses the JSON data sent in the request body and makes it accessible in req.body of your Express.js routes.
// { limit: "30mb" } sets the maximum size of the JSON payload that can be received to 30 megabytes. This helps prevent denial-of-service (DoS) attacks by limiting the size of incoming requests.
// extended: true allows the parsing of rich JSON objects and arrays.
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// suppose you have a frontend application running on https://example.com and a backend server running on https://api.example.com.
// If the frontend application tries to make an AJAX request to the backend server, the browser will block the request by default due to the difference in origin (different domain, protocol, or port).

dotenv.config();

mongoose
  .connect(
    process.env.MONGO_DB
    // { useNewUrlParser: true }, //this is specified by MongoDb to use
    // { useUnifiedTopology: true }
  )
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Listening at Port ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error));

//routes
app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/post", PostRoute);
app.use("/upload", UploadRoute);
