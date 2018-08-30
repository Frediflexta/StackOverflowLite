'use strict';

var cov_1hejo94zex = function () {
  var path = 'C:\\Users\\hp\\Documents\\StackOverflowLite\\server\\bin\\www.js',
      hash = '1621faf9e7de97296e93630f3362a2bef24eff5f',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Users\\hp\\Documents\\StackOverflowLite\\server\\bin\\www.js',
    statementMap: {
      '0': {
        start: {
          line: 3,
          column: 13
        },
        end: {
          line: 3,
          column: 45
        }
      },
      '1': {
        start: {
          line: 5,
          column: 0
        },
        end: {
          line: 5,
          column: 17
        }
      }
    },
    fnMap: {},
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 3,
            column: 13
          },
          end: {
            line: 3,
            column: 45
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 3,
            column: 13
          },
          end: {
            line: 3,
            column: 37
          }
        }, {
          start: {
            line: 3,
            column: 41
          },
          end: {
            line: 3,
            column: 45
          }
        }],
        line: 3
      }
    },
    s: {
      '0': 0,
      '1': 0
    },
    f: {},
    b: {
      '0': [0, 0]
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

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = (cov_1hejo94zex.s[0]++, (cov_1hejo94zex.b[0][0]++, Number(process.env.PORT)) || (cov_1hejo94zex.b[0][1]++, 3000));

cov_1hejo94zex.s[1]++;
_app2.default.listen(port);