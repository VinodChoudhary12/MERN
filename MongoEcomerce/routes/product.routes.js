import { Router } from "express";
import { saveInBulk } from "../controller/product.controller.js";

const router = Router()

router.post('/saveInBulk', saveInBulk)


export default router;

