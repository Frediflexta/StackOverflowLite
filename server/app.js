import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from '../server/routes/apiRoutes';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use((bodyParser.urlencoded({ extended: false })));

app.get('/api/v1', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to StackOverflowLite! Get informed',
  });
});

app.use('/api/v1', routes);

app.all('*', (req, res) => {
  res.status(404).json({
    status: 'fail',
    message: 'Endpoint does not exist',
  });
});

export default app;
