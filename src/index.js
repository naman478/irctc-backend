const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const logger = require('./utils/logger');
const config = require('./config');

const {corsMiddleware} = require('./middlewares/cors.middleware');
const {reqLoggerMiddleware} = require('./middlewares/req-logger.middleware');
const {errorHandlerMiddleware} = require('./middlewares/error-handler.middleware');

const app = express();

app.use(corsMiddleware);      // 1. Handle CORS first
app.use(helmet());            // 2. Security headers
app.use(reqLoggerMiddleware); // 3. Log the request

app.use(cookieParser());      // 4. Parse cookies
app.use(express.json());      // 5. Parse JSON body

app.get('/health',(req,res)=>{
    res.status(200).json({status:'ok'});
})

app.use(errorHandlerMiddleware);

app.listen(config.PORT, () => {
    logger.info(`User Service is running on port ${config.PORT}`);
});