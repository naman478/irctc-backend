const logger = require('../config/logger');

// const reqLoggerMiddleware = (req, res, next) => {
//     logger.info(`Incoming request: ${req.method} ${req.originalUrl}`);
//     next();
// };

const reqLoggerMiddleware = (req, res, next) => {
    const start = Date.now();
    logger.debug(`Incoming request: ${req.method} ${req.originalUrl}`);

    res.on('finish', () => {
        const duration = Date.now() - start;
        logger.info(`${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);
    });
    next();
};

module.exports = { reqLoggerMiddleware };
