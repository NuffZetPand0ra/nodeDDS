var dds = require('dds-node-adapter');
var Mark = require('markup-js');

var context = {
    name: {
        first: "John",
        last: "Doe"
    }
};

var template = "Hi, {{name.first}}!";

var result = Mark.up(template, context);
console.log(result)

var pbn = "N:KJT.KT9432.K.AK4 5432.J.J753.QT63 A986.A76.QT94.52 Q7.Q85.A862.J987";

		dds.calcResultTable(pbn, function(result, err) {
			console.log(result)
		})
