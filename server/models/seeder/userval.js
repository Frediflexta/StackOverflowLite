import pool from '../../../config/config';

const text= `DELETE FROM users CASCADE;
INSERT INTO users (username, email, pass_wd) VALUES 
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
    console.log(res);
    return res;
  } catch (e) {
    throw e.message;
  }
};

export default insertUser;
