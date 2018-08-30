'use strict';

var cov_2rquuhd32q = function () {
  var path = 'C:\\Users\\hp\\Documents\\StackOverflowLite\\server\\test\\faker\\fakeUsers.js',
      hash = '1658fca0a8af2a3d5c3f168d039840e408bc2bd8',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Users\\hp\\Documents\\StackOverflowLite\\server\\test\\faker\\fakeUsers.js',
    statementMap: {
      '0': {
        start: {
          line: 3,
          column: 17
        },
        end: {
          line: 52,
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

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userData = (cov_2rquuhd32q.s[0]++, {
  signupUser: {
    username: 'test user',
    email: 'teste@gmail.com',
    password: 'testpassword'
  },
  namelesSignup: {
    username: '',
    email: _faker2.default.internet.email(),
    password: 'postgres'
  },
  wrongEmailSignup: {
    username: _faker2.default.name.findName(),
    email: 'Eph@.com',
    password: 'postgres'
  },
  loginUser: {
    username: 'test user',
    password: 'testpassword'
  },
  invalidUser: {
    username: _faker2.default.name.findName(),
    password: _faker2.default.lorem.word()
  },
  invalidPasswordUser: {
    username: 'Ephraim',
    password: _faker2.default.lorem.word()
  },
  goodQues: {
    questitle: 'TDD',
    quesbody: 'How do i test my endpoints'
  },
  badQuesI: {
    questitle: '',
    quesbody: 'How do i test my endpoints'
  },
  badQuesII: {
    questitle: 'TDD',
    quesbody: ''
  },
  badQuesIII: {
    questitle: '',
    quesbody: undefined
  }, goodAns: {
    ansbody: _faker2.default.lorem.sentence()
  },
  badAns: {
    ansbody: ''
  }
});

exports.default = userData;