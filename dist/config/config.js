'use strict';

var cov_n3b4d3cf3 = function () {
  var path = 'C:\\Users\\hp\\Documents\\StackOverflowLite\\server\\config\\config.js',
      hash = '19f0de14bc39c915edd3cfa38f8c02644eae3d20',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Users\\hp\\Documents\\StackOverflowLite\\server\\config\\config.js',
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
          column: 17
        },
        end: {
          line: 6,
          column: 19
        }
      },
      '2': {
        start: {
          line: 8,
          column: 0
        },
        end: {
          line: 10,
          column: 1
        }
      },
      '3': {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 9,
          column: 41
        }
      },
      '4': {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 14,
          column: 1
        }
      },
      '5': {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 13,
          column: 53
        }
      },
      '6': {
        start: {
          line: 15,
          column: 14
        },
        end: {
          line: 15,
          column: 84
        }
      }
    },
    fnMap: {},
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 8,
            column: 0
          },
          end: {
            line: 10,
            column: 1
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 8,
            column: 0
          },
          end: {
            line: 10,
            column: 1
          }
        }, {
          start: {
            line: 8,
            column: 0
          },
          end: {
            line: 10,
            column: 1
          }
        }],
        line: 8
      },
      '1': {
        loc: {
          start: {
            line: 12,
            column: 0
          },
          end: {
            line: 14,
            column: 1
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 12,
            column: 0
          },
          end: {
            line: 14,
            column: 1
          }
        }, {
          start: {
            line: 12,
            column: 0
          },
          end: {
            line: 14,
            column: 1
          }
        }],
        line: 12
      },
      '2': {
        loc: {
          start: {
            line: 15,
            column: 43
          },
          end: {
            line: 15,
            column: 81
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 15,
            column: 43
          },
          end: {
            line: 15,
            column: 53
          }
        }, {
          start: {
            line: 15,
            column: 57
          },
          end: {
            line: 15,
            column: 81
          }
        }],
        line: 15
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0
    },
    f: {},
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0]
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

var _pg = require('pg');

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_n3b4d3cf3.s[0]++;


_dotenv2.default.config();

var connection = (cov_n3b4d3cf3.s[1]++, '');

cov_n3b4d3cf3.s[2]++;
if (process.env.NODE_ENV === 'test') {
  cov_n3b4d3cf3.b[0][0]++;
  cov_n3b4d3cf3.s[3]++;

  connection = process.env.DATABASE_TEST;
} else {
  cov_n3b4d3cf3.b[0][1]++;
}

cov_n3b4d3cf3.s[4]++;
if (process.env.NODE_ENV === 'production') {
  cov_n3b4d3cf3.b[1][0]++;
  cov_n3b4d3cf3.s[5]++;

  connection = process.env.HEROKU_POSTGRESQL_RED_URL;
} else {
  cov_n3b4d3cf3.b[1][1]++;
}
var pool = (cov_n3b4d3cf3.s[6]++, new _pg.Pool({ connectionString: (cov_n3b4d3cf3.b[2][0]++, connection) || (cov_n3b4d3cf3.b[2][1]++, process.env.DATABASE_URL) }));

exports.default = pool;