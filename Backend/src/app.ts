/**
 * External Modules
 */
import * as dotenv from "dotenv";
import server from "./server/server";
import log from './logger/index';
import connect from "./db/connect";



/**
 * Application Configuration
 */

dotenv.config();


/**
 * Server Configuration
 */
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    log.info(`Server Connected At Port ${PORT}`);
    connect();
});
