import { Express } from 'express';

export abstract class CommonRoutesRoute{
    /**
     * Private Fields
     */
    app: Express;
    name: string;
    constructor(app: Express, name: string) {
        this.app = app;
        this.name = name;
        this.configureRoutes();
    }

    getName(): String {
        return this.name;
    }

    /**
     * Abstract Functions
     */
    abstract configureRoutes(): Express;
}