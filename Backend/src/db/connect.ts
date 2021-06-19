import mongoose from 'mongoose';
import log from '../logger';

function connect() {
    const uri = process.env.MONGODB_URI;
    return mongoose.connect(uri as string, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        log.info('DB Connected');
    }).catch((error) => {
        log.error('Error Connecting To DB', error);
        process.exit(1);
    });
}

export default connect;