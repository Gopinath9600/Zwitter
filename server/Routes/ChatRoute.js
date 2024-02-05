import express from "express";
import {
  createChat,
  findChat,
  userChats,
} from "../Controllers/ChatController.js";

const router = express.Router();

//defining the router/paths to interact with the controllers of chat
router.post("/", createChat); // when url is "chat/" and the http method is post, the "createChat" controller is invoked
router.get("/:userId", userChats);
router.get("/find/:firstId/:secondId", findChat); //to find the chat from a specific sender id

export default router;
