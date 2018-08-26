import faker from 'faker';

const userData = {
  signupUser: {
    username: faker.name.findName(),
    email: faker.internet.email(),
    password: 'postgres'
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
    username: 'Ephraim',
    password: 'postgres'
  },
  invalidUser: {
    username: faker.name.findName(),
    password: faker.lorem.word()
  },
  invalidPasswordUser: {
    username: 'Ephraim',
    password: faker.lorem.word()
  }
}

export default userData;
