import express from "express";
import {
  UnFollowUser,
  deleteUser,
  followUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../Controllers/UserController.js";
import authMiddleWare from "../Middlewares/authMiddleware.js";

const router = express.Router(); //creating an instance of express Router

router.get("/", getAllUsers);
router.get("/:id", getUser);
router.put("/:id", authMiddleWare, updateUser);
router.delete("/:id", authMiddleWare, deleteUser);
router.put("/:id/follow", authMiddleWare, followUser);
router.put("/:id/unfollow", authMiddleWare, UnFollowUser);

export default router;
