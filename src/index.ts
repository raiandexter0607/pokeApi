import http from 'http';

const port = 3000;

const server = http.createServer();
server.listen(port, '0.0.0.0', () => {
    console.log(`Server Running on Port ${port}`);
  });
  