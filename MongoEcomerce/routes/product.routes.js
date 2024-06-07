import { Router } from "express";
import { saveInBulk, getProductById, addProduct, updateProduct, deleteProduct } from "../controller/product.controller.js";
import { upload } from "../middleware/multer.js";
import multer from "multer";
const router = Router()
router.post('/saveInBulk', saveInBulk)
router.get("/:id", getProductById)
//router.post('/addProduct', upload.fields([{ name: "images", maxCount: 5 }, { name: "thumbnail", maxCount: 1 }]), addProduct);
router.post('/addProduct', upload.fields([{ name: 'images', maxCount: 10 }, { name: 'thumbnail', maxCount: 1 }]), addProduct);
router.patch("/:id", updateProduct)
router.delete("/:id", deleteProduct)
export default router;

