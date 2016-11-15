/*
  Function must take 3 arguments
 */
var fs = require('fs');
var p = require('path');

module.exports = function (loc, ext, callback) {
  if (arguments.length !== 3) {
    throw new Error("Wrong number of arguments");
  }
  fs.readdir(loc, function(err, files) {
    if (err) {
      return callback(err);
    }
    var list = files.filter(function(file){
      if (ext) {
        return p.extname(file) === '.' + ext;
      }
      return true;
    });
    callback(null, list);
  })
}
