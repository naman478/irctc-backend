const {PrismaClient} = require('@prisma/client');
const {PrismaPg} = require('@prisma/adapter-pg');

const connectionString = process.env.DATABASE_URL;
const logger = require('../utils/logger');

const globalForPrisma = global;

if(!globalForPrisma.prisma) {
    const adapter = new PrismaPg(connectionString, {
        adapter,
        log: [error, 'warn', 'info', 'query'],
        errorFormat: 'pretty',
    });
}

module.exports = prisma;