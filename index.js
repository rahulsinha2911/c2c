var http = require('http');
require('dotenv').config();

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  console.log(process.env.REDIS_HOST)
  res.end('Hello World!');
}).listen(8080);
