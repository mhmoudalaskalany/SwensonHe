import mongoose from "mongoose";
import { nanoid } from "nanoid";

export interface ProductDocument extends mongoose.Document {
    title: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

const ProductSchema = new mongoose.Schema(
    {
        productId: {
            type: String,
            required: true,
            unique: true,
            default: () => nanoid(10),
        },
        name: { type: String, default: true }
    },
    { timestamps: true }
);

const Product = mongoose.model<ProductDocument>("Product", ProductSchema);

export default Product;
