/*
  Function must take 3 arguments
 */
var fs = require('fs');
var p = require('path');

module.exports = function () {
  if (arguments.length !== 3) {
    throw new Error("Wrong number of arguments");
  }

}
