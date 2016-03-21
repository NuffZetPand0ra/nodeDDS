var url = require('url');
var koa = require('koa');
var hb = require('koa-handlebars');
var fs = require('fs');
var app = koa();


app.use(hb({
  defaultLayout: "main"
}));

app.use(function *() {
  yield this.render("index", {
    title: "Test Page",
    name: "World"
  });
});

app.listen(8000);
console.log(app);
