const queries = {
  signUp: 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
  signIn: 'SELECT * FROM users WHERE username = $1',
  getAllQuetions: 'SELECT * FROM questions',
  getQuestion: 'SELECT * FROM questions WHERE id = $1',
  getAllAnswers: 'SELECT * FROM answers WHERE quesid = $1',
  postQuestion: 'INSERT INTO questions (userid, questitle, quesbody) VALUES ($1, $2, $3)',
  deleteQuestion: 'DELETE FROM questions WHERE id = $1 AND userid= $2',
  findQuestion: 'SELECT userid FROM questions WHERE id = $1',
  availableQues: 'SELECT * FROM questions WHERE id = $1',
  postAnswer: 'INSERT INTO answers (userid, quesid, ansbody) VALUES ($1, $2, $3) RETURNING *',
  searchQuesAns: 'SELECT * FROM answers WHERE quesid = $1 AND id = $2',
  authUser: 'SELECT userid FROM questions WHERE id = $1',
  preferedAns: 'UPDATE answers SET favorite = $1 WHERE quesid = $2 AND id = $3 RETURNING *',
  resetOtherfav: 'UPDATE answers SET favorite = false WHERE id <> $1',
};

export default queries;
