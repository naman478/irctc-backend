const {AppError} = require('../utils/error');
const logger = require('../utils/logger');

const errorHandlerMiddleware = (err, req, res, next) => {
    logger.error(`Error: ${err.message}`, { stack: err.stack });
    res.status(err.statusCode || 500).json({
        success: false,
        error: err.message,
        code: err.code
    });
};