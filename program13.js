const http = require('http');
const url = require('url');

function parsetime(date) {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds() };
}

function unixtime(date) {
  return {
    unixtime: date.getTime() };
}

const args = process.argv.slice(2);

http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);
  const reqDate = new Date(reqUrl.query.iso);
  let result;

  /* possible also with regexp */
  if (reqUrl.pathname.toLowerCase() === '/api/parsetime') {
    result = parsetime(reqDate);
  } else if (reqUrl.pathname.toLowerCase() === '/api/unixtime') {
    result = unixtime(reqDate);
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(400);
    res.end();
  }
}).listen(Number(args[0]));
