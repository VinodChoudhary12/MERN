import { Router } from "express";
import { body } from "express-validator";
import { loginController, singupController } from "../controller/user.controller.js";
import auth from "../middleware/auth.js";
import { allProduct } from "../controller/product.controller.js";

const router = Router();


router.post('/singup', [body("email").isEmail().withMessage("Invaild email").normalizeEmail(), body("contact").isMobilePhone().isLength({ min: 10, max: 10 }).withMessage("invaild Number")], singupController)
router.get('/login', loginController)
router.get('/AllProducts', auth, allProduct)

export default router;