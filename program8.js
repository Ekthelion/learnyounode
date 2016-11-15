var http = require('http');

http.get(process.argv[2], (res) => {
  res.setEncoding('utf8');
  let raw_data = '';
  res.on('data', (chunk) => {
    raw_data += chunk;
  });
  res.on('end', () => {
    console.log(raw_data.length);
    console.log(raw_data);
  });
  /*res.on('error', (err) => {
    console.error(err);
  })*/
})
/*.on('error', (err) => {
  console.error(err);
})*/
