import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connection = process.env.DATABASE_URL || process.env.DATABASE;
console.log(connection);

const pool = (process.env.NODE_ENV === 'test') ? new Pool({ connectionString: connection }) : new Pool({ connectionString: connection }) ;

export default pool;
