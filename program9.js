const http = require('http');

const args = process.argv.slice(2);
let finished = 0;
const content = [];

function printResults() {
  content.forEach((elem) => {
    console.log(elem);
  });
}

function doRequest(index) {
  http.get(args[index], (res) => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => {
      rawData += chunk;
    });
    res.on('end', () => {
      finished += 1;
      content[index] = rawData;
      if (finished === args.length) {
        printResults();
      }
    });
    res.on('error', console.error);
  });
}

for (let i = 0; i < args.length; i += 1) {
  doRequest(i);
}
