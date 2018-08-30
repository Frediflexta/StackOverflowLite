'use strict';

var cov_ar66zcfe3 = function () {
  var path = 'C:\\Users\\hp\\Documents\\StackOverflowLite\\server\\routes\\apiRoutes.js',
      hash = '1bc2c6f8f9e8f110cedad322fd0a10b01f413421',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Users\\hp\\Documents\\StackOverflowLite\\server\\routes\\apiRoutes.js',
    statementMap: {
      '0': {
        start: {
          line: 7,
          column: 15
        },
        end: {
          line: 7,
          column: 31
        }
      },
      '1': {
        start: {
          line: 9,
          column: 0
        },
        end: {
          line: 9,
          column: 52
        }
      },
      '2': {
        start: {
          line: 10,
          column: 0
        },
        end: {
          line: 10,
          column: 55
        }
      },
      '3': {
        start: {
          line: 11,
          column: 0
        },
        end: {
          line: 11,
          column: 57
        }
      },
      '4': {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 12,
          column: 66
        }
      },
      '5': {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 13,
          column: 69
        }
      },
      '6': {
        start: {
          line: 14,
          column: 0
        },
        end: {
          line: 14,
          column: 72
        }
      },
      '7': {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 15,
          column: 69
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
      '5': 0,
      '6': 0,
      '7': 0
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

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _auth = require('../middleware/auth');

var _auth2 = _interopRequireDefault(_auth);

var _validator = require('../middleware/validator');

var _validator2 = _interopRequireDefault(_validator);

var _userController = require('../controllers/userController');

var _userController2 = _interopRequireDefault(_userController);

var _quesController = require('../controllers/quesController');

var _quesController2 = _interopRequireDefault(_quesController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (cov_ar66zcfe3.s[0]++, _express2.default.Router());

cov_ar66zcfe3.s[1]++;
router.get('/questions', _quesController2.default.getAllQues);
cov_ar66zcfe3.s[2]++;
router.get('/questions/:qId', _quesController2.default.getAQues);
cov_ar66zcfe3.s[3]++;
router.post('/questions', _auth2.default, _quesController2.default.postQues);
cov_ar66zcfe3.s[4]++;
router.delete('/questions/:qId', _auth2.default, _quesController2.default.deleteQues);
cov_ar66zcfe3.s[5]++;
router.post('/questions/:qId/answers', _auth2.default, _quesController2.default.postAns);
cov_ar66zcfe3.s[6]++;
router.post('/auth/signup', _validator2.default.signUp, _userController2.default.userSignup);
cov_ar66zcfe3.s[7]++;
router.post('/auth/login', _validator2.default.logIn, _userController2.default.userLogin);

exports.default = router;