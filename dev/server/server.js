const http = require('http');
const app = require('./express');

const port = 8081;

const server = http.createServer(app);

server.listen(port);         