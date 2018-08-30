'use strict';

var cov_kaan1xirc = function () {
  var path = 'C:\\Users\\hp\\Documents\\StackOverflowLite\\server\\app.js',
      hash = 'e387cd2914417efef3f97c428fd66d9e2246efd3',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Users\\hp\\Documents\\StackOverflowLite\\server\\app.js',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 12
        },
        end: {
          line: 6,
          column: 21
        }
      },
      '1': {
        start: {
          line: 8,
          column: 0
        },
        end: {
          line: 8,
          column: 23
        }
      },
      '2': {
        start: {
          line: 9,
          column: 0
        },
        end: {
          line: 9,
          column: 27
        }
      },
      '3': {
        start: {
          line: 10,
          column: 0
        },
        end: {
          line: 10,
          column: 54
        }
      },
      '4': {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 17,
          column: 3
        }
      },
      '5': {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 16,
          column: 5
        }
      },
      '6': {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 19,
          column: 27
        }
      },
      '7': {
        start: {
          line: 21,
          column: 0
        },
        end: {
          line: 28,
          column: 3
        }
      },
      '8': {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 27,
          column: 5
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 12,
            column: 19
          },
          end: {
            line: 12,
            column: 20
          }
        },
        loc: {
          start: {
            line: 12,
            column: 33
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 12
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 21,
            column: 14
          },
          end: {
            line: 21,
            column: 15
          }
        },
        loc: {
          start: {
            line: 21,
            column: 28
          },
          end: {
            line: 28,
            column: 1
          }
        },
        line: 21
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
      '7': 0,
      '8': 0
    },
    f: {
      '0': 0,
      '1': 0
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

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _apiRoutes = require('../server/routes/apiRoutes');

var _apiRoutes2 = _interopRequireDefault(_apiRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (cov_kaan1xirc.s[0]++, (0, _express2.default)());

cov_kaan1xirc.s[1]++;
app.use((0, _morgan2.default)('dev'));
cov_kaan1xirc.s[2]++;
app.use(_bodyParser2.default.json());
cov_kaan1xirc.s[3]++;
app.use(_bodyParser2.default.urlencoded({ extended: false }));

cov_kaan1xirc.s[4]++;
app.get('/api/v1', function (req, res) {
  cov_kaan1xirc.f[0]++;
  cov_kaan1xirc.s[5]++;

  res.status(200).json({
    status: 'success',
    message: 'Welcome to StackOverflowLite! Get informed'
  });
});

cov_kaan1xirc.s[6]++;
app.use('/api/v1', _apiRoutes2.default);

cov_kaan1xirc.s[7]++;
app.all('/*', function (req, res) {
  cov_kaan1xirc.f[1]++;
  cov_kaan1xirc.s[8]++;

  res.status(404).json({
    status: 'fail',
    data: {
      message: 'Page Not Found'
    }
  });
});

exports.default = app;