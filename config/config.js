import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connection = process.env.DATABASE_URL;
const productionsConnection = process.env.HEROKU_POSTGRESQL_RED_URL;

let exportPool;

if (process.env.NODE_ENV === 'test') {
  console.log(process.env.DATABASE_URL);
  exportPool = new Pool({ connectionString: connection });
} else if (process.env.NODE_ENV === 'development') {
  // console.log(process.env.DATABASE_URL)
  exportPool = new Pool({ connectionString: connection });
} else if (process.env.NODE_ENV === 'production') {
  exportPool = new Pool({ connectionString: productionsConnection });
}
const pool = exportPool;

export default pool;
