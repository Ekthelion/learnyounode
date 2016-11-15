var read_directory = require('./program6_module.js');

var args = process.argv.slice(2);
var loc = args[0];
var filter = args[1];

read_directory(loc, filter, function(err, files) {
  if (err) {
    return console.error(err);
  }
  files.forEach(function(file) {
    console.log(file);
  })
})
