  module.exports = function(app) {
  	// verb: get, plural of target as the URI is the RESTful index method (it returns all friends)
    app.get('/', function(req, res) {
    	console.log("index page reached");
    });
  };