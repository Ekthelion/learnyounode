const http = require('http');

const args = process.argv.slice(2);

http.createServer((req, res) => {
  if (req.method !== 'POST') {
    return res.end('Server accepts only POST requests.');
  }

  let body = '';

  req.on('data', (data) => {
    body += data;
  });

  req.on('end', () => {
    res.end(body.toString().toUpperCase());
  });
  return true;
}).listen(Number(args[0]));
