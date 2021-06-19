

import { Express, Request, Response } from 'express';
import { UserController } from '../controllers/user.controller';
import validate from "../middlewares/validateRequest"
import { createUserSchema } from '../schema/user.schema';
import { CommonRoutesRoute } from './common.routes.routes';

export class UsersRoutes extends CommonRoutesRoute {

    controller = new UserController();
    constructor(app: Express) {
        super(app, 'UsersRoutes');
    }
    configureRoutes() {
        this.app.get('/healthcheck', (req: Request, res: Response) => {
            res.status(200).send('hello');
        });
        this.app.post('/api/users', (req: Request, res: Response) => {
            validate(createUserSchema);
            this.controller.createUser(req, res);
        });
        return this.app;
    }
}