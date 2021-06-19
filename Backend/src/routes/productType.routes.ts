

import { Express } from 'express';
import { createProductHandler, deleteProductHandler, getProductHandler, updateProductHandler } from '../controllers/product.controller';
import { UserController } from '../controllers/user.controller';
import validateRequest from '../middlewares/validateRequest';
import { createProductSchema, updateProductSchema, deleteProductSchema } from '../schema/product.schema';
import { CommonRoutesRoute } from './common.routes.routes';

export class ProductRoutes extends CommonRoutesRoute {

    controller = new UserController();
    constructor(app: Express) {
        super(app, 'UsersRoutes');
    }
    configureRoutes() {
        // Create a post
        this.app.post(
            "/api/products",
            [validateRequest(createProductSchema)],
            createProductHandler
        );

        // Update a post
        this.app.put(
            "/api/products/:productId",
            [validateRequest(updateProductSchema)],
            updateProductHandler
        );

        // Get a post
        this.app.get("/api/products/:productId", getProductHandler);

        // Delete a post
        this.app.delete(
            "/api/products/:productId",
            [validateRequest(deleteProductSchema)],
            deleteProductHandler
        );
        return this.app;
    }
}