import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import userData from '../faker/fakeUsers';
import dotenv from 'dotenv';

dotenv.config();
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
      process.env.userI_token = res.header['x-access-token'];
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
      process.env.user_token = res.header['x-access-token'];
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
})

describe('GET a single question', () => {
  it('Should return a status code of 200(Ok)', async () => {
    try {
      const res = await chai.request(app)
      .get('/api/v1/questions/1')
      res.should.have.status(200);
    } catch (e) {
      throw e.message;
    }
  })
  
  it('Should return a status code of 400(Bad request) when params NaN', async () => {
    try {
      const res = await chai.request(app)
      .get('/api/v1/questions/1o')
      res.should.have.status(400);
    } catch (e) {
      throw e.message;
    }
  })

  it('Should return a status 404(Not Found)', async () => {
    try {
      const res = await chai.request(app)
      .get('/api/v1/questions/20')
      res.should.have.status(404);
    } catch (e) {
      throw e.message;
    }
  })

  // it('Should return a status 500(Internal error)', async () => {
  //   try {
  //     const res = await chai.request(app)
  //     .get('/api/v1/questions/1')
  //     res.should.have.status(500);
  //   } catch (e) {
  //     throw e.message;
  //   }
  // })  
})

describe('POST questions', () => {
  it('Should return 201(Created) on successful posting ', async () => {
    console.log()
    try {
      const res = await chai.request(app)
      .post('/api/v1/questions')
      .send(userData.goodQues)
      .set('x-access-token', process.env.user_token)
      res.should.have.status(201);
      res.should.be.json;
      res.body.should.be.a('object');
      res.body.success.should.equal('true');
      res.body.should.have.property('message');
    } catch (e) {
      throw e.message
    }
  })

  it('Should return 400(Bad Request)' , async () => {
    try {
      const res = await chai.request(app)
      .post('/api/v1/questions')
      .send(userData.badQuesI)
      .set('x-access-token', process.env.user_token)
      res.should.have.status(400);
    } catch (e) {
      throw e.message
    }
  })

  it('Should return 400(Bad Request)', async () => {
    try {
      const res = await chai.request(app)
      .post('/api/v1/questions')
      .send(userData.badQuesII)
      .set('x-access-token', process.env.user_token)
      res.should.have.status(400);
    } catch (e) {
      throw e.message
    }
  })

  it('Should return 400(Bad Request)', async () => {
    try {
      const res = await chai.request(app)
      .post('/api/v1/questions')
      .send(userData.badQuesII)
      .set('x-access-token', process.env.user_token)
      res.should.have.status(400);
    } catch (e) {
      throw e.message
    }
  })
})

describe('DELETE a question', () => {
  it('Should return 200(OK) on deleting successfully', async () => {
    try {
      const res = await chai.request(app)
      .delete('/api/v1/questions/8')
      .set('x-access-token', process.env.user_token)
      res.should.have.status(200)
    } catch (e) {
      throw e.message;
    }
  })

  it('Should return 404(Not Found)', async () => {
    try {
      const res = await chai.request(app)
      .delete('/api/v1/questions/10')
      .set('x-access-token', process.env.user_token)
      res.should.have.status(404)
    } catch (e) {
      throw e.message;
    }
  })

  it('Should return 401(Unauthorized) on deleting successfully', async () => {
    try {
      const res = await chai.request(app)
      .delete('/api/v1/questions/2')
      .set('x-access-token', process.env.userI_token)
      res.should.have.status(401)
    } catch (e){
      throw e.message;
    }
  })
})

describe('Answer a question', () => {
  it('Should return 201(Created) on successful posting', async () => {
    try {
      const res = await chai.request(app)
      .post('/api/v1/questions/7/answers')
      .send(userData.goodAns)
      .set('x-access-token', process.env.user_token)
      res.should.have.status(201);
    } catch (e) {
      throw e.message
    }
  });

  it ('Should return 400(Bad Request) on an empty field', async () => {
    try {
      const res = await chai.request(app)
      .post('/api/v1/questions/7/answers')
      .send(userData.badAns)
      .set('x-access-token', process.env.user_token)
      res.should.have.status(400);
    } catch (e) {
      throw e.messsage
    }
  })

  it ('Should return 404(Not Found) for unexisting answers', async () => {
    try {
      const res = await chai.request(app)
      .post('/api/v1/questions/23/answers')
      .send(userData.goodAns)
      .set('x-access-token', process.env.user_token)
      res.should.have.status(404);
    } catch (e) {
      throw e.messsage
    }
  })
})