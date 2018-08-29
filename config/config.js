import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connection = process.env.DATABASE_URL || process.env.HEROKU_POSTGRESQL_RED_URL;

// let exportpool;
// if (process.env.NODE_ENV === 'test') {
//   exportpool = new Pool({ connectionString: connection });
// } else if (process.env.NODE_ENV === 'development') {
//   exportpool = new Pool({ connectionString: connection });
// } else if (process.env.HEROKU_POSTGRESQL_RED_URL) {
//   exportpool = new Pool({ connectionString: process.env.HEROKU_POSTGRESQL_RED_URL });
// }
// const pool = exportpool;

const pool = new Pool({
  connectionString: connection,
});

export default pool;
