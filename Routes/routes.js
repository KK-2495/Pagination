import express from "express";
import { addProduct, getProduct } from "../Controllers/productControllers.js";

const router = express.Router();

router.post('/add-product', addProduct);
router.get('/get-product', getProduct)


export default router;