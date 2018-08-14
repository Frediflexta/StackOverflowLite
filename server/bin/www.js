import app from '../app';

// Get port from enviroment and store in express
const port = Number(process.env.PORT) || 3000;

// listen on provided port on all network interfaces
app.listen(port);
