'use strict';

var cov_133kd5esta = function () {
  var path = 'C:\\Users\\hp\\Documents\\StackOverflowLite\\server\\models\\answers.js',
      hash = '50b72c8615cd05a68cca656b4320b7459c506012',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Users\\hp\\Documents\\StackOverflowLite\\server\\models\\answers.js',
    statementMap: {
      '0': {
        start: {
          line: 3,
          column: 13
        },
        end: {
          line: 11,
          column: 2
        }
      },
      '1': {
        start: {
          line: 13,
          column: 15
        },
        end: {
          line: 20,
          column: 1
        }
      },
      '2': {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 19,
          column: 3
        }
      },
      '3': {
        start: {
          line: 15,
          column: 16
        },
        end: {
          line: 15,
          column: 38
        }
      },
      '4': {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 15
        }
      },
      '5': {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
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
            column: 15
          },
          end: {
            line: 13,
            column: 16
          }
        },
        loc: {
          start: {
            line: 13,
            column: 27
          },
          end: {
            line: 20,
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
      '5': 0
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

var text = (cov_133kd5esta.s[0]++, 'DROP TABLE IF EXISTS answers CASCADE;\nCREATE TABLE answers (\n  id SERIAL PRIMARY KEY NOT NULL,\n  userid INT references users(id) ON DELETE CASCADE,\n  quesid INT references questions(id) ON DELETE CASCADE,\n  ansbody       TEXT NOT NULL,\n  created_at    TIMESTAMP DEFAULT NOW(), \n  updated_at    TIMESTAMP DEFAULT NOW()\n)');

cov_133kd5esta.s[1]++;
var ansTab = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var res;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cov_133kd5esta.f[0]++;
            cov_133kd5esta.s[2]++;
            _context.prev = 2;
            cov_133kd5esta.s[3]++;
            _context.next = 6;
            return _config2.default.query(text);

          case 6:
            res = _context.sent;
            cov_133kd5esta.s[4]++;
            return _context.abrupt('return', res);

          case 11:
            _context.prev = 11;
            _context.t0 = _context['catch'](2);
            cov_133kd5esta.s[5]++;
            throw _context.t0.message;

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[2, 11]]);
  }));

  return function ansTab() {
    return _ref.apply(this, arguments);
  };
}();

exports.default = ansTab;