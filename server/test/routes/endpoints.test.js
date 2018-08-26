import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import userData from '../faker/fakeUsers';

chai.should();
chai.use(chaiHttp);

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