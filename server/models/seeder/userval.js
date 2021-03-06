import pool from '../../config/config';

const text = `DELETE FROM users CASCADE;
INSERT INTO users (username, email, password) VALUES 
  ('frediflexta', 'fred@gmail.com', 'postgres'),
  ('emiko', 'emiko@gmail.com', 'postgres'),
  ('luppy', 'lupp@gmail.com', 'postgres'),
  ('lanre', 'lanre@gmail.com', 'postgres'),
  ('ope', 'ope@gmail.com', 'postgres'),
  ('sommy', 'somto@gmail.com', 'postgres'),
  ('dexy', 'dexy@gmail.com', 'postgres')
`;

const insertUser = async () => {
  try {
    const res = await pool.query(text);
    return res;
  } catch (error) {
    throw error.message;
  }
};

export default insertUser;
