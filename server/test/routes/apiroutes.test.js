import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.should();
chai.use(chaiHttp);

describe('GET all questions', () => {
  it('Should return a status code of 200 OK', async () => {
    try {
      const res = await chai.request(app)
      .get('/api/v1/questions')
      res.should.have.status(200);
    } catch(e) {
      throw e.message;
    }
  })
})