'use strict';

var cov_r4kpobil2 = function () {
  var path = 'C:\\Users\\hp\\Documents\\StackOverflowLite\\server\\models\\index.js',
      hash = 'e0a87e71a972af3b20f5fde77fb9121445512c05',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Users\\hp\\Documents\\StackOverflowLite\\server\\models\\index.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
          column: 0
        },
        end: {
          line: 8,
          column: 10
        }
      },
      '1': {
        start: {
          line: 9,
          column: 0
        },
        end: {
          line: 9,
          column: 25
        }
      },
      '2': {
        start: {
          line: 10,
          column: 0
        },
        end: {
          line: 10,
          column: 25
        }
      },
      '3': {
        start: {
          line: 11,
          column: 0
        },
        end: {
          line: 11,
          column: 25
        }
      },
      '4': {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 12,
          column: 26
        }
      },
      '5': {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 13,
          column: 25
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
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

var _users = require('../models/users');

var _users2 = _interopRequireDefault(_users);

var _questions = require('../models/questions');

var _questions2 = _interopRequireDefault(_questions);

var _answers = require('../models/answers');

var _answers2 = _interopRequireDefault(_answers);

var _userval = require('./seeder/userval');

var _userval2 = _interopRequireDefault(_userval);

var _ansval = require('./seeder/ansval');

var _ansval2 = _interopRequireDefault(_ansval);

var _quesval = require('./seeder/quesval');

var _quesval2 = _interopRequireDefault(_quesval);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_r4kpobil2.s[0]++;


(0, _users2.default)();
cov_r4kpobil2.s[1]++;
setTimeout(_questions2.default, 500);
cov_r4kpobil2.s[2]++;
setTimeout(_answers2.default, 1000);
cov_r4kpobil2.s[3]++;
setTimeout(_userval2.default, 1500);
cov_r4kpobil2.s[4]++;
setTimeout(_quesval2.default, 2000);
cov_r4kpobil2.s[5]++;
setTimeout(_ansval2.default, 2500);