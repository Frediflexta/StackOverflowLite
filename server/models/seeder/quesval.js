import pool from '../../config/config';

const text = `DELETE FROM questions CASCADE;
INSERT INTO questions (userid, questitle, quesbody) VALUES
  (3, 'How to use css', 'What is the best way of laying out pages when working with html and css'),
  (2, 'Pop-super star', 'When did Micheal Jackson die'),
  (5, 'trick question', 'Who came first, the chicken or the egg'),
  (1, 'programming language', 'What is the difference between java and javascript'),
  (2, 'structuring database', 'What is a parent child relationship when structuring a database'),
  (4, 'programmer', 'How can I become a programmer'),
  (5, 'music', 'what was jon bellions first album')
`;

const insertQues = async () => {
  try {
    const res = await pool.query(text);
    return res;
  } catch (error) {
    throw error.message;
  }
};

export default insertQues;
