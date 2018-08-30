'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _app = require('../../app');

var _app2 = _interopRequireDefault(_app);

var _fakeUsers = require('../faker/fakeUsers');

var _fakeUsers2 = _interopRequireDefault(_fakeUsers);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();
_chai2.default.should();
_chai2.default.use(_chaiHttp2.default);

describe('User signup', function () {
  it('Should signup a user successfully', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var res;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _chai2.default.request(_app2.default).post('/api/v1/auth/signup').send(_fakeUsers2.default.signupUser);

          case 3:
            res = _context.sent;

            res.should.have.status(201);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.success.should.equal('true');
            res.body.should.have.property('message');
            res.body.message.should.equal('Account was successfully created');
            process.env.userI_token = res.header['x-access-token'];
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context['catch'](0);
            throw _context.t0.message;

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 13]]);
  })));

  it('Should return 400(Bad Request) on a user signup without a name', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
    var res;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _chai2.default.request(_app2.default).post('/api/v1/auth/signup').send(_fakeUsers2.default.namelesSignup);

          case 3:
            res = _context2.sent;

            res.should.have.status(400);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.success.should.equal('false');
            res.body.should.have.property('message');
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2['catch'](0);
            throw _context2.t0.message;

          case 14:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 11]]);
  })));

  it('Should return 400(Bad Request) on a user signup with a wrong email', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
    var res;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _chai2.default.request(_app2.default).post('/api/v1/auth/signup').send(_fakeUsers2.default.wrongEmailSignup);

          case 3:
            res = _context3.sent;

            res.should.have.status(400);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.success.should.equal('false');
            res.body.should.have.property('message');
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3['catch'](0);
            throw _context3.t0.message;

          case 14:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[0, 11]]);
  })));
});

describe('User login', function () {
  it('Should login existing users', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
    var res;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _chai2.default.request(_app2.default).post('/api/v1/auth/login').send(_fakeUsers2.default.loginUser);

          case 3:
            res = _context4.sent;

            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.success.should.equal('true');
            res.body.should.have.property('message');
            res.body.message.should.equal('Welcome back');
            process.env.user_token = res.header['x-access-token'];
            _context4.next = 16;
            break;

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4['catch'](0);
            throw _context4.t0.message;

          case 16:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined, [[0, 13]]);
  })));

  it('Should return 400(Bad Request) on wrong credential', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
    var res;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _chai2.default.request(_app2.default).post('/api/v1/auth/login').send(_fakeUsers2.default.invalidUser);

          case 3:
            res = _context5.sent;

            res.should.have.status(400);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.success.should.equal('false');
            res.body.should.have.property('message');
            _context5.next = 14;
            break;

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5['catch'](0);
            throw _context5.t0.message;

          case 14:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined, [[0, 11]]);
  })));

  it('Should return 400(Bad Request) wrong password', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
    var res;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _chai2.default.request(_app2.default).post('/api/v1/auth/login').send(_fakeUsers2.default.invalidPasswordUser);

          case 3:
            res = _context6.sent;

            res.should.have.status(400);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.success.should.equal('false');
            res.body.should.have.property('message');
            _context6.next = 14;
            break;

          case 11:
            _context6.prev = 11;
            _context6.t0 = _context6['catch'](0);
            throw _context6.t0.message;

          case 14:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, undefined, [[0, 11]]);
  })));
});

describe('GET all questions', function () {
  it('Should return a status code of 200 (OK)', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
    var res;
    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _chai2.default.request(_app2.default).get('/api/v1/questions');

          case 3:
            res = _context7.sent;

            res.should.have.status(200);
            _context7.next = 10;
            break;

          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7['catch'](0);
            throw _context7.t0.message;

          case 10:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, undefined, [[0, 7]]);
  })));
});

describe('GET a single question', function () {
  it('Should return a status code of 200(Ok)', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8() {
    var res;
    return _regenerator2.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _chai2.default.request(_app2.default).get('/api/v1/questions/1');

          case 3:
            res = _context8.sent;

            res.should.have.status(200);
            _context8.next = 10;
            break;

          case 7:
            _context8.prev = 7;
            _context8.t0 = _context8['catch'](0);
            throw _context8.t0.message;

          case 10:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, undefined, [[0, 7]]);
  })));

  it('Should return a status code of 400(Bad request) when params NaN', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9() {
    var res;
    return _regenerator2.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return _chai2.default.request(_app2.default).get('/api/v1/questions/1o');

          case 3:
            res = _context9.sent;

            res.should.have.status(400);
            _context9.next = 10;
            break;

          case 7:
            _context9.prev = 7;
            _context9.t0 = _context9['catch'](0);
            throw _context9.t0.message;

          case 10:
          case 'end':
            return _context9.stop();
        }
      }
    }, _callee9, undefined, [[0, 7]]);
  })));

  it('Should return a status 404(Not Found)', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10() {
    var res;
    return _regenerator2.default.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return _chai2.default.request(_app2.default).get('/api/v1/questions/20');

          case 3:
            res = _context10.sent;

            res.should.have.status(404);
            _context10.next = 10;
            break;

          case 7:
            _context10.prev = 7;
            _context10.t0 = _context10['catch'](0);
            throw _context10.t0.message;

          case 10:
          case 'end':
            return _context10.stop();
        }
      }
    }, _callee10, undefined, [[0, 7]]);
  })));

  // it('Should return a status 500(Internal error)', async () => {
  //   try {
  //     const res = await chai.request(app)
  //     .get('/api/v1/questions/1')
  //     res.should.have.status(500);
  //   } catch (e) {
  //     throw e.message;
  //   }
  // })  
});

describe('POST questions', function () {
  it('Should return 201(Created) on successful posting ', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11() {
    var res;
    return _regenerator2.default.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            console.log();
            _context11.prev = 1;
            _context11.next = 4;
            return _chai2.default.request(_app2.default).post('/api/v1/questions').send(_fakeUsers2.default.goodQues).set('x-access-token', process.env.user_token);

          case 4:
            res = _context11.sent;

            res.should.have.status(201);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.success.should.equal('true');
            res.body.should.have.property('message');
            _context11.next = 15;
            break;

          case 12:
            _context11.prev = 12;
            _context11.t0 = _context11['catch'](1);
            throw _context11.t0.message;

          case 15:
          case 'end':
            return _context11.stop();
        }
      }
    }, _callee11, undefined, [[1, 12]]);
  })));

  it('Should return 400(Bad Request)', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12() {
    var res;
    return _regenerator2.default.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            _context12.next = 3;
            return _chai2.default.request(_app2.default).post('/api/v1/questions').send(_fakeUsers2.default.badQuesI).set('x-access-token', process.env.user_token);

          case 3:
            res = _context12.sent;

            res.should.have.status(400);
            _context12.next = 10;
            break;

          case 7:
            _context12.prev = 7;
            _context12.t0 = _context12['catch'](0);
            throw _context12.t0.message;

          case 10:
          case 'end':
            return _context12.stop();
        }
      }
    }, _callee12, undefined, [[0, 7]]);
  })));

  it('Should return 400(Bad Request)', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13() {
    var res;
    return _regenerator2.default.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            _context13.next = 3;
            return _chai2.default.request(_app2.default).post('/api/v1/questions').send(_fakeUsers2.default.badQuesII).set('x-access-token', process.env.user_token);

          case 3:
            res = _context13.sent;

            res.should.have.status(400);
            _context13.next = 10;
            break;

          case 7:
            _context13.prev = 7;
            _context13.t0 = _context13['catch'](0);
            throw _context13.t0.message;

          case 10:
          case 'end':
            return _context13.stop();
        }
      }
    }, _callee13, undefined, [[0, 7]]);
  })));

  it('Should return 400(Bad Request)', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee14() {
    var res;
    return _regenerator2.default.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            _context14.next = 3;
            return _chai2.default.request(_app2.default).post('/api/v1/questions').send(_fakeUsers2.default.badQuesII).set('x-access-token', process.env.user_token);

          case 3:
            res = _context14.sent;

            res.should.have.status(400);
            _context14.next = 10;
            break;

          case 7:
            _context14.prev = 7;
            _context14.t0 = _context14['catch'](0);
            throw _context14.t0.message;

          case 10:
          case 'end':
            return _context14.stop();
        }
      }
    }, _callee14, undefined, [[0, 7]]);
  })));
});

describe('DELETE a question', function () {
  it('Should return 200(OK) on deleting successfully', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee15() {
    var res;
    return _regenerator2.default.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.prev = 0;
            _context15.next = 3;
            return _chai2.default.request(_app2.default).delete('/api/v1/questions/8').set('x-access-token', process.env.user_token);

          case 3:
            res = _context15.sent;

            res.should.have.status(200);
            _context15.next = 10;
            break;

          case 7:
            _context15.prev = 7;
            _context15.t0 = _context15['catch'](0);
            throw _context15.t0.message;

          case 10:
          case 'end':
            return _context15.stop();
        }
      }
    }, _callee15, undefined, [[0, 7]]);
  })));

  it('Should return 404(Not Found)', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee16() {
    var res;
    return _regenerator2.default.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.prev = 0;
            _context16.next = 3;
            return _chai2.default.request(_app2.default).delete('/api/v1/questions/10').set('x-access-token', process.env.user_token);

          case 3:
            res = _context16.sent;

            res.should.have.status(404);
            _context16.next = 10;
            break;

          case 7:
            _context16.prev = 7;
            _context16.t0 = _context16['catch'](0);
            throw _context16.t0.message;

          case 10:
          case 'end':
            return _context16.stop();
        }
      }
    }, _callee16, undefined, [[0, 7]]);
  })));

  it('Should return 401(Unauthorized) on deleting successfully', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee17() {
    var res;
    return _regenerator2.default.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.prev = 0;
            _context17.next = 3;
            return _chai2.default.request(_app2.default).delete('/api/v1/questions/2').set('x-access-token', process.env.userI_token);

          case 3:
            res = _context17.sent;

            res.should.have.status(401);
            _context17.next = 10;
            break;

          case 7:
            _context17.prev = 7;
            _context17.t0 = _context17['catch'](0);
            throw _context17.t0.message;

          case 10:
          case 'end':
            return _context17.stop();
        }
      }
    }, _callee17, undefined, [[0, 7]]);
  })));
});

describe('Answer a question', function () {
  it('Should return 201(Created) on successful posting', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee18() {
    var res;
    return _regenerator2.default.wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            _context18.prev = 0;
            _context18.next = 3;
            return _chai2.default.request(_app2.default).post('/api/v1/questions/7/answers').send(_fakeUsers2.default.goodAns).set('x-access-token', process.env.user_token);

          case 3:
            res = _context18.sent;

            res.should.have.status(201);
            _context18.next = 10;
            break;

          case 7:
            _context18.prev = 7;
            _context18.t0 = _context18['catch'](0);
            throw _context18.t0.message;

          case 10:
          case 'end':
            return _context18.stop();
        }
      }
    }, _callee18, undefined, [[0, 7]]);
  })));

  it('Should return 400(Bad Request) on an empty field', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee19() {
    var res;
    return _regenerator2.default.wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            _context19.prev = 0;
            _context19.next = 3;
            return _chai2.default.request(_app2.default).post('/api/v1/questions/7/answers').send(_fakeUsers2.default.badAns).set('x-access-token', process.env.user_token);

          case 3:
            res = _context19.sent;

            res.should.have.status(400);
            _context19.next = 10;
            break;

          case 7:
            _context19.prev = 7;
            _context19.t0 = _context19['catch'](0);
            throw _context19.t0.messsage;

          case 10:
          case 'end':
            return _context19.stop();
        }
      }
    }, _callee19, undefined, [[0, 7]]);
  })));

  it('Should return 404(Not Found) for unexisting answers', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee20() {
    var res;
    return _regenerator2.default.wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            _context20.prev = 0;
            _context20.next = 3;
            return _chai2.default.request(_app2.default).post('/api/v1/questions/23/answers').send(_fakeUsers2.default.goodAns).set('x-access-token', process.env.user_token);

          case 3:
            res = _context20.sent;

            res.should.have.status(404);
            _context20.next = 10;
            break;

          case 7:
            _context20.prev = 7;
            _context20.t0 = _context20['catch'](0);
            throw _context20.t0.messsage;

          case 10:
          case 'end':
            return _context20.stop();
        }
      }
    }, _callee20, undefined, [[0, 7]]);
  })));
});