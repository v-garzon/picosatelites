import { Router } from "express";
import { login, register } from "../controllers/user.controller.js";

const router = Router()

// REGISTER 
router.post('/register', register)


// SIGN IN
router.post('/login', login)

export default router