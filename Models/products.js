import mongoose from "mongoose";
import { Schema } from "mongoose";

const product = new Schema ({
    name: String,
    category: String,
    price: Number,
    image: String
})

export default mongoose.model("product", product);