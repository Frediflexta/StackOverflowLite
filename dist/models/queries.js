'use strict';

var cov_2q70216d0c = function () {
  var path = 'C:\\Users\\hp\\Documents\\StackOverflowLite\\server\\models\\queries.js',
      hash = 'd2cec923114cd794736eff4000bc72da5fb45caa',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Users\\hp\\Documents\\StackOverflowLite\\server\\models\\queries.js',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 16
        },
        end: {
          line: 13,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      '0': 0
    },
    f: {},
    b: {},
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
var queries = (cov_2q70216d0c.s[0]++, {
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
  quesAndAns: 'SELECT questions.id, questions.questitle, questions.quesbody, answers.ansbody FROM questions JOIN answers ON questions.id=answers.quesid WHERE questions.id = $1'
});

exports.default = queries;