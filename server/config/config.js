import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

let connection = '';

if (process.env.NODE_ENV === 'test') {
  connection = process.env.DATABASE_TEST;
}

if (process.env.NODE_ENV === 'production') {
  connection = process.env.HEROKU_POSTGRESQL_RED_URL;
}
const pool = new Pool({ connectionString: connection || process.env.DATABASE_URL });

export default pool;
