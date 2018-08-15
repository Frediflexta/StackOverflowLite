import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from '../server/routes/apiRoutes';

// create an instance of an express app
const app = express();

/* middleware to handle parsing i/o as json and also logging informations to the console */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use((bodyParser.urlencoded({ extended: false })));

// Routes
app.use('/api/v1', routes);

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to StackOverflowLite! Get informed',
  });
});

export default app;
