# view4pug

## Installation

```bash
$ npm install --save view4pug
```

## Example

```js
var view = require('view4pug')();
// pug src
// https://github.com/josudoey/view4pug/blob/master/example.pug
console.log(view('view4pug/example'));
console.log(view('view4pug/example', {
  youAreUsingPug: true
}));

// Output:
// <!DOCTYPE html><html lang="en"><head><title></title><script type="text/javascript">if (foo) bar(1 + 5)</script></head><body><h1>Pug - node template engine</h1><div class="col" id="container"><p>Get on it!</p><p>Pug is a terse and simple templating language with a
// strong focus on performance and powerful features.</p></div></body></html>
// <!DOCTYPE html><html lang="en"><head><title></title><script type="text/javascript">if (foo) bar(1 + 5)</script></head><body><h1>Pug - node template engine</h1><div class="col" id="container"><p>You are amazing</p><p>Pug is a terse and simple templating language with a
// strong focus on performance and powerful features.</p></div></body></html>
```
