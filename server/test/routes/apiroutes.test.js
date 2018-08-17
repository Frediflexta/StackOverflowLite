import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.should();
chai.use(chaiHttp);

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

  it('Should return 200 (OK) when default route is tried', async () => {
    try {
      const res = await chai.request(app)
      .get('/')
      res.should.have.status(200); 
    } catch(e) {
      throw e.message;
    }
  })

  it('Should return 404 (Not Found) on any route that is invalid or use of an invalid Http verb', async () => {
    try {
      const res = await chai.request(app)
      .get('/*')
      res.should.have.status(404);
    } catch(e) {
      throw e.message;
    }
  })
})
  
describe('GET a question', () => {
  it('Should return a status code of 200 (OK)', async () => {
    try {
      const res = await chai.request(app)
      .get('/api/v1/questions/1')
      res.should.have.status(200);
    } catch(e) {
      throw e.message;
    }
  })

  it('Should return a status code 400 (Not Found)', async () => {
    try {
      const res = await chai.request(app)
        .get('/api/v1/questions/8')
        res.should.have.status(404);
    } catch(e) {
      throw e.message;
    }
  })
})

describe('POST questions', () => {
  it('Should return 201 (Created) when question get sent succesfully', async () => {
    try {
      const res = await chai.request(app)
      .post('/api/v1/questions')
      res.should.have.status(201);
    } catch(e) {
      throw e.message;
    }
  })

  it('Should return 204 (No Content) if a POST is sent with a blank request body', async () => {
    try {
      const res = await chai.request(app)
      .post('/api/v1/questions')
      .send({
        id: 1,
        title: 'How to use css',
        text: '',
      })
      res.should.have.status(204);
    } catch(e) {
      throw e.message;
    }
  })
})
