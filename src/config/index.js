require('dotenv').config();
const config ={
    SERVICE_NAME: 'user-service',
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    logLevel: process.env.LOG_LEVEL || 'info',
    JWT_SECRET: process.env.JWT_SECRET  ,
    REDIS_URL: process.env.REDIS_URL || 'redis://localhost:6379',
    ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['http://localhost:3000']
}
module.exports = config;