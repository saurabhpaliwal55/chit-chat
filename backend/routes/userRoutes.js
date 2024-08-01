import express from 'express';
import { fetchAllUsers, logInUser, registerUser } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post("/register",registerUser)
router.post("/login",logInUser)
router.get("/fetchUsers",protect,fetchAllUsers);

export default router;