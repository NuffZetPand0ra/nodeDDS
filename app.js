var url = require('url')
  , koa = require('koa')
  , router = require('koa-router')()
  , koaBOdy = require('koa-body')
  , hb = require('koa-handlebars')
  , fs = require('fs')
  , app = koa()
	, dds = require('dds-node-adapter')
	;

// console.log(hb.options,hb)
app.use(hb({
  defaultLayout: "main"
, partialsDir: "partials"
, helpers: {
		suitSymbol: function(item){
			var symbol;
			switch(item){
				case 's':
					symbol = "&spades;"
					break
				case 'h':
					symbol = "&hearts;"
					break
				case 'd':
					symbol = "&diams;"
					break
				case 'c':
					symbol = "&clubs;"
					break
			}
			return symbol
		},
		uppercase: function(str){
			if(typeof str == "string"){
				return str.toUpperCase()
			}
			return str
		}
	}
}));

router.get("/", function *() {
	if(this.req.url == "/favicon.ico"){return true}
	var request = url.parse(this.req.url, true)
	  , data = {
			title: "DBF DDS"
		}
		;
	console.log("Vi sender!", request, this.request.body)
  yield this.render("index", data);
});
router.get("/solve", function *(){
	var testData = require('./testhand.json')
	  , urlData = url.parse(this.req.url, true)
		, cardData = urlData.query.data
		;
	//Getting north, east and south
	var extracted = cardData.match(/[ \t][SHRK] ([EKDBT2-9]+)?/g)
	console.log(cardData, extracted)
	// this.body = JSON.stringify(cardData)
	
	// console.log(url.parse(this.req.url, true))
	// yield this.render("solve", testData)
	// this.body = "Resultat"
})

app.use(router.routes())

app.listen(8000);
console.log(app);
