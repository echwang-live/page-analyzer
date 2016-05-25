var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(bodyParser.json());

// require('./server/config/mongoose.js');

// Static content
app.use(express.static(path.join(__dirname, './client')));

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(5000, function() {
  console.log("something cool on port 5000");
})