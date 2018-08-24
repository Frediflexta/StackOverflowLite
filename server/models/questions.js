import pool from '../../config/config';

const text = `DROP TABLE IF EXISTS questions CASCADE;
CREATE TABLE questions (
  id SERIAL PRIMARY KEY NOT NULL,
  userid INT references users(id) ON DELETE CASCADE,
  questitle      TEXT NOT NULL, 
  quesbody       TEXT NOT NULL,
  created_at     TIMESTAMP, 
  updated_at     TIMESTAMP
)`;

console.log(text);

const quesTab = async () => {
  try {
    const res = await pool.query(text);
    console.log(res);
    return res;
  } catch (e) {
    throw e.message;
  }
};

export default quesTab;
