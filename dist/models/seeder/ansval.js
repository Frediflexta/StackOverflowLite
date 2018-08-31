'use strict';

var cov_b6r2drfva = function () {
  var path = 'C:\\Users\\hp\\Documents\\StackOverflowLite\\server\\models\\seeder\\ansval.js',
      hash = '01c64c84c1d8b2d5c94fb655cd5f3ae721df8edf',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Users\\hp\\Documents\\StackOverflowLite\\server\\models\\seeder\\ansval.js',
    statementMap: {
      '0': {
        start: {
          line: 3,
          column: 13
        },
        end: {
          line: 10,
          column: 1
        }
      },
      '1': {
        start: {
          line: 12,
          column: 18
        },
        end: {
          line: 20,
          column: 1
        }
      },
      '2': {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 19,
          column: 3
        }
      },
      '3': {
        start: {
          line: 14,
          column: 16
        },
        end: {
          line: 14,
          column: 38
        }
      },
      '4': {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 21
        }
      },
      '5': {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 15
        }
      },
      '6': {
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
            line: 12,
            column: 18
          },
          end: {
            line: 12,
            column: 19
          }
        },
        loc: {
          start: {
            line: 12,
            column: 30
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 12
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

var text = (cov_b6r2drfva.s[0]++, 'DELETE FROM answers CASCADE;\nINSERT INTO answers (userid, quesid, ansbody) VALUES\n  (1, 5, \'A parent is a table that stores the primary key, a child is any table that references the parent with a foreign key\'),\n  (3, 1, \'I prefer working with css grid, reasoning about my layout in rows and columns makes it easier\'),\n  (5, 1, \'flexbox is the best!\'),\n  (3, 4, \'the chicken came first of course!\'),\n  (6, 3, \'the chicken had to have come out of an egg, duh!!\')\n');

cov_b6r2drfva.s[1]++;
var insertAns = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var res;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cov_b6r2drfva.f[0]++;
            cov_b6r2drfva.s[2]++;
            _context.prev = 2;
            cov_b6r2drfva.s[3]++;
            _context.next = 6;
            return _config2.default.query(text);

          case 6:
            res = _context.sent;
            cov_b6r2drfva.s[4]++;

            console.log(res);
            cov_b6r2drfva.s[5]++;
            return _context.abrupt('return', res);

          case 13:
            _context.prev = 13;
            _context.t0 = _context['catch'](2);
            cov_b6r2drfva.s[6]++;
            throw _context.t0.message;

          case 17:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[2, 13]]);
  }));

  return function insertAns() {
    return _ref.apply(this, arguments);
  };
}();

exports.default = insertAns;