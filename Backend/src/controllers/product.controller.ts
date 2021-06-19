import { Request, Response } from "express";
import { get } from "lodash";
import { createProduct, findProduct, findAndUpdate, deleteProduct } from "../services/product.service";


export async function createProductHandler(req: Request, res: Response) {
    const body = req.body;

    const product = await createProduct({ ...body });

    return res.send(product);
}

export async function updateProductHandler(req: Request, res: Response) {
    const productId = get(req, "params.productId");
    const update = req.body;

    const product = await findProduct({ productId });

    if (!product) {
        return res.sendStatus(404);
    }
    const updatedPost = await findAndUpdate({ productId }, update, { new: true });

    return res.send(updatedPost);
}
export async function getProductHandler(req: Request, res: Response) {
    const productId = get(req, "params.productId");
    const product = await findProduct({ productId });

    if (!product) {
        return res.sendStatus(404);
    }
    return res.send(product);
}

export async function deleteProductHandler(req: Request, res: Response) {
    const productId = get(req, "params.productId");

    const product = await findProduct({ productId });

    if (!product) {
        return res.sendStatus(404);
    }
    await deleteProduct({ productId });

    return res.sendStatus(200);
}
