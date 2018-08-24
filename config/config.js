import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connection = process.env.DATABASE_URL || process.env.NODE_ENV;
console.log(connection);

const pool = new Pool({
  connectionString: connection,
});

export default pool;
