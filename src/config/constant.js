import dotenv from 'dotenv';

dotenv.config();

export const { DEV_DATABASE_URL, PROD_DATABASE_URL, NODE_ENV } = process.env;
