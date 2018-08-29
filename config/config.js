import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connection = process.env.DATABASE_URL;

let pool;
const exportpool = pool;

if (process.env.NODE_ENV === 'test') {
  pool = new Pool({ connectionString: connection });
} else if (process.env.NODE_ENV === 'development') {
  pool = new Pool({ connectionString: connection });
}  else if (process.env.HEROKU_POSTGRESQL_RED_URL) {
  pool = new Pool({ connectionString: process.env.HEROKU_POSTGRESQL_RED_URL });
}

export default exportpool;
