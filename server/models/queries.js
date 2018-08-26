const queries = {
  signup: 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)',
  signin: 'SELECT * FROM users WHERE username = $1',
};

export default queries;
