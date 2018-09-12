import pool from '../config/config';

const text = `DROP TABLE IF EXISTS questions CASCADE;
CREATE TABLE questions (
  id SERIAL PRIMARY KEY NOT NULL,
  userid INT references users(id) ON DELETE CASCADE,
  questitle      TEXT NOT NULL, 
  quesbody       TEXT NOT NULL,
  created_at     TIMESTAMP DEFAULT NOW(), 
  updated_at     TIMESTAMP DEFAULT NOW()
)`;

const quesTab = async () => {
  try {
    const res = await pool.query(text);
    return res;
  } catch (error) {
    throw error.message;
  }
};

export default quesTab;
