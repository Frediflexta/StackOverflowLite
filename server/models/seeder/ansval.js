import pool from '../../../config/config';

const text = `DELETE FROM answers CASCADE;
INSERT INTO answers (userid, quesid, ansbody) VALUES
  (1, 5, 'A parent is a table that stores the primary key, a child is any table that references the parent with a foreign key'),
  (3, 1, 'I prefer working with css grid, reasoning about my layout in rows and columns makes it easier'),
  (5, 1, 'flexbox is the best!'),
  (3, 4, 'the chicken came first of course!'),
  (6, 3, 'the chicken had to have come out of an egg, duh!!')
`;

const insertAns = async () => {
  try {
    const res = await pool.query(text);
    console.log(res);
    return res;
  } catch (e) {
    throw e.message;
  }
};

export default insertAns;
