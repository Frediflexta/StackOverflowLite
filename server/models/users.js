import pool from '../config/config';

const text = `DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username    TEXT NOT NULL,
  email     TEXT NOT NULL UNIQUE,
  password    TEXT NOT NULL
)`;

const usersTab = async () => {
  try {
    const res = await pool.query(text);
    return res;
  } catch (error) {
    throw error.message;
  }
};

export default usersTab;
