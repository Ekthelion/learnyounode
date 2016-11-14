var fs = require('fs');
var path = require('path');
var p = process.argv[2];
var ext = '.' + process.argv[3];

if (process.argv.length > 2) {
  fs.readdir(p, function (err, list) {
    if (err) {
      return console.error(err);
    }
    list.filter(function(file) {
      if (process.argv[3]) {
        return path.extname(file) === ext;
      }
      return true;
    }).forEach(function(file) {
      console.log("%s", file);
    })
  })
}
