const queries = {
  signup: 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)',
  signin: 'SELECT * FROM users WHERE username = $1',
  getallquetions: 'SELECT * FROM questions',
  getaquestion: 'SELECT * FROM questions WHERE id = $1',
  postquestion: 'INSERT INTO questions (userid, questitle, quesbody) VALUES ($1, $2, $3)',
};

export default queries;
