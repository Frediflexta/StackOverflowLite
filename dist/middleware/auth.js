'use strict';

var cov_h11ss35cn = function () {
  var path = 'C:\\Users\\hp\\Documents\\StackOverflowLite\\server\\middleware\\auth.js',
      hash = '185c2ae2a31c308769856db1af81c806c7a5f098',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Users\\hp\\Documents\\StackOverflowLite\\server\\middleware\\auth.js',
    statementMap: {
      '0': {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 4,
          column: 16
        }
      },
      '1': {
        start: {
          line: 6,
          column: 15
        },
        end: {
          line: 6,
          column: 33
        }
      },
      '2': {
        start: {
          line: 14,
          column: 13
        },
        end: {
          line: 44,
          column: 1
        }
      },
      '3': {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 43,
          column: 3
        }
      },
      '4': {
        start: {
          line: 16,
          column: 18
        },
        end: {
          line: 16,
          column: 46
        }
      },
      '5': {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 22,
          column: 5
        }
      },
      '6': {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 21,
          column: 9
        }
      },
      '7': {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 34,
          column: 7
        }
      },
      '8': {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 30,
          column: 7
        }
      },
      '9': {
        start: {
          line: 26,
          column: 8
        },
        end: {
          line: 29,
          column: 11
        }
      },
      '10': {
        start: {
          line: 32,
          column: 6
        },
        end: {
          line: 32,
          column: 28
        }
      },
      '11': {
        start: {
          line: 33,
          column: 6
        },
        end: {
          line: 33,
          column: 20
        }
      },
      '12': {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 42,
          column: 7
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 14,
            column: 13
          },
          end: {
            line: 14,
            column: 14
          }
        },
        loc: {
          start: {
            line: 14,
            column: 39
          },
          end: {
            line: 44,
            column: 1
          }
        },
        line: 14
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 24,
            column: 37
          },
          end: {
            line: 24,
            column: 38
          }
        },
        loc: {
          start: {
            line: 24,
            column: 57
          },
          end: {
            line: 34,
            column: 5
          }
        },
        line: 24
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        }, {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        }],
        line: 17
      },
      '1': {
        loc: {
          start: {
            line: 25,
            column: 6
          },
          end: {
            line: 30,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 25,
            column: 6
          },
          end: {
            line: 30,
            column: 7
          }
        }, {
          start: {
            line: 25,
            column: 6
          },
          end: {
            line: 30,
            column: 7
          }
        }],
        line: 25
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0]
    },
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

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_h11ss35cn.s[0]++;


_dotenv2.default.config();

var secret = (cov_h11ss35cn.s[1]++, process.env.SECRET);

/**
 * @function auth
  * @param {object} req -Request object
  * @param {object} res - Response object
  * @param {next} next - hands over the next process to another handler
 */
cov_h11ss35cn.s[2]++;
var auth = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
    var token;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cov_h11ss35cn.f[0]++;
            cov_h11ss35cn.s[3]++;
            _context.prev = 2;
            token = (cov_h11ss35cn.s[4]++, req.header('x-access-token'));
            cov_h11ss35cn.s[5]++;

            if (token) {
              _context.next = 11;
              break;
            }

            cov_h11ss35cn.b[0][0]++;
            cov_h11ss35cn.s[6]++;
            return _context.abrupt('return', res.status(401).json({
              success: 'false',
              message: 'Please sign in'
            }));

          case 11:
            cov_h11ss35cn.b[0][1]++;

          case 12:
            cov_h11ss35cn.s[7]++;
            return _context.abrupt('return', _jsonwebtoken2.default.verify(token, secret, function (error, decoded) {
              cov_h11ss35cn.f[1]++;
              cov_h11ss35cn.s[8]++;

              if (error) {
                cov_h11ss35cn.b[1][0]++;
                cov_h11ss35cn.s[9]++;

                return res.status(401).json({
                  success: 'false',
                  message: 'Your session has expired'
                });
              } else {
                cov_h11ss35cn.b[1][1]++;
              }

              cov_h11ss35cn.s[10]++;
              req.decoded = decoded;
              cov_h11ss35cn.s[11]++;
              return next();
            }));

          case 16:
            _context.prev = 16;
            _context.t0 = _context['catch'](2);
            cov_h11ss35cn.s[12]++;
            return _context.abrupt('return', res.status(500).json({
              success: 'false',
              message: 'internal server error',
              data: {
                Error: _context.t0.message
              }
            }));

          case 20:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[2, 16]]);
  }));

  return function auth(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = auth;