import faker from 'faker';

const userData = {
  signupUser: {
    username: 'test user',
    email: 'teste@gmail.com',
    password: 'testpassword'
  },
  namelesSignup: {
    username: '',
    email: faker.internet.email(),
    password: 'postgres'
  },
  wrongEmailSignup: {
    username: faker.name.findName(),
    email: 'Eph@.com',
    password: 'postgres'
  },
  loginUser: {
    username: 'test user',
    password: 'testpassword'
  },
  invalidUser: {
    username: faker.name.findName(),
    password: faker.lorem.word()
  },
  invalidPasswordUser: {
    username: 'Ephraim',
    password: faker.lorem.word()
  },
  goodQues: {
    questitle: 'TDD',
    quesbody: 'How do i test my endpoints'
  },
  badQuesI: {
    questitle: '',
    quesbody: 'How do i test my endpoints'
  },
  badQuesII: {
    questitle: 'TDD',
    quesbody: ''
  },
  badQuesIII: {
    questitle: '',
    quesbody: undefined
  }
}

export default userData;
