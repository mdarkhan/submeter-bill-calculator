const http = require('http');
const fs = require('fs');
const path = require('path');
const page = fs.readFileSync(path.join(__dirname, 'index.html'));
const port = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-cache' });
  res.end(page);
}).listen(port, '0.0.0.0', () => console.log('listening on ' + port));
