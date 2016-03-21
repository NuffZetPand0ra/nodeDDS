var url = require('url');
var domjs = require('domjs/lib/html5');
var koa = require('koa');
var app = koa();



// x-response-time

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
});

// logger

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
  console.log(url.parse(this.url, true, true));
});

// response

app.use(function *(){
  this.body = "Hej!";
//  this.body = domjs.build(mytemplate);
});

app.listen(8000);
console.log(app);
