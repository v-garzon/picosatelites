import { Router } from "express";
import { pullAllContent, pullPageContent, pushContent } from "../controllers/text.conroller.js";


const router = Router()


//NORMAL MODE
router.get('/content/:page', pullPageContent)

// EDIT MODE 
router.get('/content', pullAllContent)

router.post('/pushnewcontent', pushContent)


export default router
