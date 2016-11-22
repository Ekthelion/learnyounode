const http = require('http');
const fs = require('fs');

const args = process.argv.slice(2);

http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });

  const readStream = fs.createReadStream(args[1]);

  readStream.on('open', () => {
    readStream.pipe(res);
  });

  readStream.on('error', (err) => {
    res.end(err);
  });
}).listen(Number(args[0]));
