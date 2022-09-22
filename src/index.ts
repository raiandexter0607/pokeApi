import http from 'http';
import app from './app';

const port = 3000;

const server = http.createServer(app);

server.listen(port, '0.0.0.0', () => {
    console.log(`Server Running on Port ${port}`);
  });
  