import { Request, Response } from 'express'
import { omit } from 'lodash';
import log from '../logger';
import { UserService } from '../services/user.service';
export class UserController {
    public service = new UserService();
    constructor() {

    }
    /**
     * Create User
     * @param req 
     * @param res 
     * @returns 
     */
    async createUser(req: Request, res: Response) {
        try {
            const user = await this.service.createUser(req.body);
            return res.send(omit(user.toJSON(), "password"));
        } catch (error) {
            log.error(error);
            return res.status(409).send(error.message);
        }
    }
}