import express from 'express';
import { signup,loginController } from '../Controller/authentication.js';

const router = express.Router();

// Signup route
router.post('/signup', signup);
router.post("/login",loginController)

export default router;
