var url = require('url')
  , koa = require('koa')
  , hb = require('koa-handlebars')
  , fs = require('fs')
  , app = koa()
	;

// console.log(hb.options,hb)
app.use(hb({
  defaultLayout: "main"
, partialsDir: "partials"
}));

app.use(function *() {
  yield this.render("index", {
    title: "Test Page",
    name: "World"
  });
});

app.listen(8000);
console.log(app);
