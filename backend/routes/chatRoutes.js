import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  accessChat,
  addSelfToGroup,
  createGroupChat,
  fetchChats,
  fetchGroups,
  groupExit,
} from "../controllers/chatController.js";
const router = express.Router();

router.post("/", protect, accessChat);
router.get("/", protect, fetchChats);
router.post("/createGroup", protect, createGroupChat);
router.get("/fetchGroups", protect, fetchGroups);
router.put("/groupExit", protect, groupExit);
router.put("addSelfToGroup",protect,addSelfToGroup);

export default router;
