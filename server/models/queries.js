const queries = {
  signUp: 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
  signIn: 'SELECT * FROM users WHERE username = $1',
  getAllQuetions: 'SELECT questions.id, questions.questitle, questions.quesbody, questions.created_at, questions.userid, COUNT(answers.quesid) AS totalAnswers FROM questions LEFT OUTER JOIN answers ON questions.id=answers.quesid GROUP BY questions.id ORDER BY questions.id',
  getQuestion: 'SELECT questions.id, questions.questitle, questions.quesbody, questions.created_at, questions.userid, users.username FROM questions JOIN users ON questions.userid = users.id WHERE questions.id = $1',
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
