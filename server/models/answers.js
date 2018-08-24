import pool from '../../config/config';

const text = `DROP TABLE IF EXISTS answers CASCADE;
CREATE TABLE answers (
  id SERIAL PRIMARY KEY NOT NULL,
  userid INT references users(id) ON DELETE CASCADE,
  quesid INT references questions(id) ON DELETE CASCADE,
  ansbody       TEXT NOT NULL,
  created_at    TIMESTAMP, 
  updated_at    TIMESTAMP
)`;

const ansTab = async () => {
  try {
    const res = await pool.query(text);
    return res;
  } catch (e) {
    throw e.message;
  }
};

export default ansTab;
