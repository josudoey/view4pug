var path = require('path');
var resolve = require('resolve');
var pug = require('pug');

var ___dirname = function () {
  var stack = new Error().stack;
  var lines = stack.split('\n');
  var line = lines[3];
  var m = line.match(/at (?:(.+)\s+\()?(?:(.+?):(\d+):(\d+)|([^)]+))\)?/);
  return path.dirname(m[2]);
}

module.exports = function () {
  var cache = {};
  var resOpts = {
    basedir: ___dirname(),
    extensions: ['.pug']
  }
  return function (p, data) {
    if (p in cache) {
      return cache[p](data);
    }

    var fp = resolve.sync(p, resOpts);
    var fn = cache[p] = pug.compileFile(fp);
    return fn(data);
  }
}

