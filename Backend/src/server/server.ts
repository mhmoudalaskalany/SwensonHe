import express from 'express';
import cors from "cors";
import { CommonRoutesRoute } from '../routes/common.routes.routes';
import { UsersRoutes } from '../routes/users.routes.routes';
import { ProductRoutes } from '../routes/productType.routes';


/**
 * Variables
 */
const app = express();
const routes: Array<CommonRoutesRoute> = [];
/**
 * Middlewares Registration
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
/**
 * Register Routes
 */

routes.push(new UsersRoutes(app));
routes.push(new ProductRoutes(app));

/**
 * Export Http Server
 */
export default app;