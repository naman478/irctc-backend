const cors = require('cors');

const corsMiddleware = cors({
    origin: '*', // Replace with your frontend domain in production
    credentials: true,
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
});

module.exports = { corsMiddleware };
