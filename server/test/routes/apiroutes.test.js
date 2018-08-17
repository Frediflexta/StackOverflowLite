import chai from 'chai';
import chaiHttp from 'chai-http';
import sinonChai from 'sinon-chai';
import { mockReq, mockRes } from 'sinon-express-mock';
import app from '../../app';
import QuesController from '../../controllers/quesController';

chai.should();
chai.use(chaiHttp);
chai.use(sinonChai);

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
  it('Should return 201 (Created) when question is sent succesfully', async () => {
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

const request = {
  body: {
    id: 1,
    text: 'A parent is a table that stores the primary key, a child is any table that references the parent with a foreign key',
  },
  params: {
    quesID: 5
  }
}

const badRequest = {
  body: {
    id: 1,
    text: '',
  },
  params: {
    quesID: 5
  }
}

const req = mockReq(req);
const res = mockRes();

describe('POST answers to a specific question', () => {
  beforeEach(() => {
    QuesController.postAns(req, res);
  });

  it('Should return 201(Created) when answers is successfully sent', () => {
    try {
      res.status.should.have.been.calledWith(201);
    } catch (e) {
      throw e.message;
    }
  })

  it('Should return 204(No Content answer is posted with an empty field', () => {
    try {
      const wrongReq = mockReq(badRequest);
      QuesController.postAns(wrongReq, res);
      res.status.should.have.been.calledWith(204);
    } catch (e) {
      throw e.message;
    }
  })
})
