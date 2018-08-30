const queries = {
  signUp: 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
  signIn: 'SELECT * FROM users WHERE username = $1',
  getAllQuetions: 'SELECT * FROM questions',
  getQuestion: 'SELECT * FROM questions WHERE id = $1',
  postQuestion: 'INSERT INTO questions (userid, questitle, quesbody) VALUES ($1, $2, $3)',
  deleteQuestion: 'DELETE FROM questions WHERE id = $1 AND userid= $2',
  findQuestion: 'SELECT userid FROM questions WHERE id = $1',
  availablleQues: 'SELECT * FROM questions WHERE id = $1',
  postAnswer: 'INSERT INTO answers (userid, quesid, ansbody) VALUES ($1, $2, $3) RETURNING *',
  quesAndAns: 'SELECT questions.id, questions.questitle, questions.quesbody, answers.ansbody FROM questions JOIN answers ON questions.id=answers.quesid WHERE questions.id = $1',
};

export default queries;
