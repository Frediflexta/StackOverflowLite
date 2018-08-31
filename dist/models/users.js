'use strict';

var cov_1l7illm6c1 = function () {
  var path = 'C:\\Users\\hp\\Documents\\StackOverflowLite\\server\\models\\users.js',
      hash = 'f392bba34199bb680a97d27d25dd0534b4c2f904',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Users\\hp\\Documents\\StackOverflowLite\\server\\models\\users.js',
    statementMap: {
      '0': {
        start: {
          line: 3,
          column: 13
        },
        end: {
          line: 9,
          column: 2
        }
      },
      '1': {
        start: {
          line: 11,
          column: 0
        },
        end: {
          line: 11,
          column: 18
        }
      },
      '2': {
        start: {
          line: 13,
          column: 17
        },
        end: {
          line: 21,
          column: 1
        }
      },
      '3': {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 20,
          column: 3
        }
      },
      '4': {
        start: {
          line: 15,
          column: 16
        },
        end: {
          line: 15,
          column: 38
        }
      },
      '5': {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 21
        }
      },
      '6': {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 15
        }
      },
      '7': {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 20
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 13,
            column: 17
          },
          end: {
            line: 13,
            column: 18
          }
        },
        loc: {
          start: {
            line: 13,
            column: 29
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 13
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
      '6': 0,
      '7': 0
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

var _config = require('../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var text = (cov_1l7illm6c1.s[0]++, 'DROP TABLE IF EXISTS users CASCADE;\nCREATE TABLE users (\n  id SERIAL PRIMARY KEY NOT NULL,\n  username    TEXT NOT NULL,\n  email     TEXT NOT NULL UNIQUE,\n  password    TEXT NOT NULL\n)');

cov_1l7illm6c1.s[1]++;
console.log(text);

cov_1l7illm6c1.s[2]++;
var usersTab = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var res;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cov_1l7illm6c1.f[0]++;
            cov_1l7illm6c1.s[3]++;
            _context.prev = 2;
            cov_1l7illm6c1.s[4]++;
            _context.next = 6;
            return _config2.default.query(text);

          case 6:
            res = _context.sent;
            cov_1l7illm6c1.s[5]++;

            console.log(res);
            cov_1l7illm6c1.s[6]++;
            return _context.abrupt('return', res);

          case 13:
            _context.prev = 13;
            _context.t0 = _context['catch'](2);
            cov_1l7illm6c1.s[7]++;
            throw _context.t0.message;

          case 17:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[2, 13]]);
  }));

  return function usersTab() {
    return _ref.apply(this, arguments);
  };
}();

exports.default = usersTab;