import express from 'express';
import { logInUser, registerUser } from '../controllers/userController.js';

const router = express.Router();

router.post("/register",registerUser)
router.post("/login",logInUser)

export default router;