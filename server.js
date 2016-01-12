var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var port = process.env.PORT || 3003;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname + '/app/'));
app.get('/', function(req, res) {
  res.sendFile('index.html');
});
app.listen(port, function() {
});