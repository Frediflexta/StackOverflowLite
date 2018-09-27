import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import routes from '../server/routes/apiRoutes';

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use((bodyParser.urlencoded({ extended: false })));
app.use('/UI', express.static(path.resolve(__dirname, './../UI/')));
app.use('/js', express.static(path.resolve(__dirname, './../UI/js/')));

app.get('/api/v1', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to StackOverflowLite! Get informed',
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './../UI/index.html'));
});

app.use('/api/v1', routes);

app.all('*', (req, res) => {
  res.status(404).json({
    status: 'fail',
    message: 'Endpoint does not exist',
  });
});

export default app;
