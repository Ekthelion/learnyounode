var http = require('http');

var args = process.argv.slice(2);
var finished = 0;
var content = [];

function print_results() {
  content.forEach(function (elem) {
    console.log(elem);
  });
}

function do_request(index) {
  http.get(args[index], (res) => {
    res.setEncoding('utf8');
    let raw_data = '';
    res.on('data', (chunk) => {
      raw_data += chunk;
    });
    res.on('end', () => {
      finished++;
      content[index] = raw_data;
      if (finished === args.length) {
        print_results();
      }
    });
    res.on('error', console.error);
  })
};

for (var i = 0; i < args.length; i++) {
  do_request(i);
}
