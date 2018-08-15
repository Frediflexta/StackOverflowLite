import chai from 'chai';
import questions from '../../models/questions';
import answers from '../../models/answers';

chai.should();

describe('Questions mock-models', () => {
  it('should be an array of objects', () => {
    questions.should.be.an('array');
  })

  it('Should contain a question string and an id', () => {
    const ques = [{
      id: 1,
      text: 'What is the best way of laying out pages when working with html and css',    
    }]
    questions[0].should.have.all.keys({
      id: 1,
      text: 'What is the best way of laying out pages when working with html and css', 
    });
    questions[0].should.eql(ques[0]);
  })
})

describe('Answers mock-models', () => {
  it('should be an array of objects', () =>{
    answers.should.be.an('array');
  })

  it('Should contain an answer id, quesID and text', () => {
    const ans = [{
      id: 1,
    quesID: 5,
    text: 'A parent is a table that stores the primary key, a child is any table that references the parent with a foreign key',
    }]
    answers[0].should.be.deep.equal(ans[0]);
    answers[0].text.should.be.a('string');
    answers[0].should.have.all.keys({
      id: 1,
      quesID: 5,
      text: 'A parent is a table that stores the primary key, a child is any table that references the parent with a foreign key',
    });
  })
})
