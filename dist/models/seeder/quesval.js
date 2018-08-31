'use strict';

var cov_1sfcmraldn = function () {
  var path = 'C:\\Users\\hp\\Documents\\StackOverflowLite\\server\\models\\seeder\\quesval.js',
      hash = '1d40dab36eae7bf4c404ed04f737cd21e8e9ee4d',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Users\\hp\\Documents\\StackOverflowLite\\server\\models\\seeder\\quesval.js',
    statementMap: {
      '0': {
        start: {
          line: 3,
          column: 13
        },
        end: {
          line: 12,
          column: 1
        }
      },
      '1': {
        start: {
          line: 14,
          column: 19
        },
        end: {
          line: 22,
          column: 1
        }
      },
      '2': {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 21,
          column: 3
        }
      },
      '3': {
        start: {
          line: 16,
          column: 16
        },
        end: {
          line: 16,
          column: 38
        }
      },
      '4': {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 21
        }
      },
      '5': {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 15
        }
      },
      '6': {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 20
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 14,
            column: 19
          },
          end: {
            line: 14,
            column: 20
          }
        },
        loc: {
          start: {
            line: 14,
            column: 31
          },
          end: {
            line: 22,
            column: 1
          }
        },
        line: 14
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0
    },
    f: {
      '0': 0
    },
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

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _config = require('../../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var text = (cov_1sfcmraldn.s[0]++, 'DELETE FROM questions CASCADE;\nINSERT INTO questions (userid, questitle, quesbody) VALUES\n  (3, \'How to use css\', \'What is the best way of laying out pages when working with html and css\'),\n  (2, \'Pop-super star\', \'When did Micheal Jackson die\'),\n  (5, \'trick question\', \'Who came first, the chicken or the egg\'),\n  (1, \'programming language\', \'What is the difference between java and javascript\'),\n  (2, \'structuring database\', \'What is a parent child relationship when structuring a database\'),\n  (4, \'programmer\', \'How can I become a programmer\'),\n  (5, \'music\', \'what was jon bellions first album\')\n');

cov_1sfcmraldn.s[1]++;
var insertQues = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var res;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cov_1sfcmraldn.f[0]++;
            cov_1sfcmraldn.s[2]++;
            _context.prev = 2;
            cov_1sfcmraldn.s[3]++;
            _context.next = 6;
            return _config2.default.query(text);

          case 6:
            res = _context.sent;
            cov_1sfcmraldn.s[4]++;

            console.log(res);
            cov_1sfcmraldn.s[5]++;
            return _context.abrupt('return', res);

          case 13:
            _context.prev = 13;
            _context.t0 = _context['catch'](2);
            cov_1sfcmraldn.s[6]++;
            throw _context.t0.message;

          case 17:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[2, 13]]);
  }));

  return function insertQues() {
    return _ref.apply(this, arguments);
  };
}();

exports.default = insertQues;