const winston = require('winston');
const config = require('./index');

const logger = winston.createLogger({
    level: config.logLevel,
    defaultMeta: { service: config.SERVICE_NAME },
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message, service }) => {
            return `${timestamp} [${level.toUpperCase()}] [${service}] ${message}`;
        }),
        winston.format.errors({ stack: true }),
    ),
    transports: [
        new winston.transports.Console()
    ]
});

module.exports = logger;