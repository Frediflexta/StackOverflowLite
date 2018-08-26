import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import userData from '../faker/fakeUsers';

chai.should();
chai.use(chaiHttp);

describe('User signup', () => {
  it('Should signup a user successfully', async () => {
    try {
      const res = await chai.request(app)
      .post('/api/v1/auth/signup')
      .send(userData.signupUser)
      res.should.have.status(201);
      res.should.be.json;
      res.body.should.be.a('object');
      res.body.success.should.equal('true');
      res.body.should.have.property('message');
      res.body.message.should.equal('Account was successfully created');
    } catch (e) {
      throw e.message;
    }
  })

  it('Should return 400(Bad Request) on a user signup without a name', async () => {
    try {
      const res = await chai.request(app)
      .post('/api/v1/auth/signup')
      .send(userData.namelesSignup)
      res.should.have.status(400);
      res.should.be.json;
      res.body.should.be.a('object');
      res.body.success.should.equal('false');
      res.body.should.have.property('message');
    } catch (e) {
      throw e.message;
    }
  })

  it('Should return 400(Bad Request) on a user signup with a wrong email', async () => {
    try {
      const res = await chai.request(app)
      .post('/api/v1/auth/signup')
      .send(userData.wrongEmailSignup)
      res.should.have.status(400);
      res.should.be.json;
      res.body.should.be.a('object');
      res.body.success.should.equal('false');
      res.body.should.have.property('message');
    } catch (e) {
      throw e.message;
    }
  })
})

describe('User login', () => {
  it('Should login existing users', async () => {
    try {
      const res = await chai.request(app)
      .post('/api/v1/auth/login')
      .send(userData.loginUser)
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('object');
      res.body.success.should.equal('true');
      res.body.should.have.property('message');
      res.body.message.should.equal('Welcome back');
    } catch (e) {
      throw e.message;
    }
  })

  it('Should return 400(Bad Request) on wrong credential', async () => {
    try {
      const res = await chai.request(app)
      .post('/api/v1/auth/login')
      .send(userData.invalidUser)
      res.should.have.status(400);
      res.should.be.json;
      res.body.should.be.a('object');
      res.body.success.should.equal('false');
      res.body.should.have.property('message');
    } catch (e) {
      throw e.message;
    }
  })

  it('Should return 400(Bad Request) wrong password', async () => {
    try {
      const res = await chai.request(app)
      .post('/api/v1/auth/login')
      .send(userData.invalidPasswordUser)
      res.should.have.status(400);
      res.should.be.json;
      res.body.should.be.a('object');
      res.body.success.should.equal('false');
      res.body.should.have.property('message');
    } catch (e) {
      throw e.message;
    }
  })
})

describe('GET all questions', () => {
  it('Should return a status code of 200 (OK)', async () => {
    try {
      const res = await chai.request(app)
      .get('/api/v1/questions')
      res.should.have.status(200);
    } catch(e) {
      throw e.message;
    }
  })

  // it('Should return a status code of 500(Internal server) error if something goes wrong from the server side', async () => {
  //   try {
  //     const res = await chai.request(app)
  //     .get('/api/v1/questions')
  //     res.should.have.status(500);
  //   } catch (e) {
  //     throw e.message;
  //   }
  // })
})