var pug = require('pug');
var cache = {};
module.exports = function (p, opts) {
  if (p in cache) {
    return cache[p];
  }

  var fp = module.resolve(p);
  var fn = cache[p] = pug.compileFile(fp, opts);
  return fn;
}

