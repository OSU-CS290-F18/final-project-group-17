const express = require('express');
const path = require('path');
const app = express();
const exphbs = require('express-handlebars');
const port = process.env.PORT || 3000;
const axios = require('axios');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));



app.get('/teacher-hub', function(req, res) {
	res.status(200).render('teacherHub', {
		
	});

});

app.get('/student-hub', function(req, res) {
	res.status(200).render('studentHub', {
		
	});

});

app.get('/', function(req, res) {
	res.status(200).render('homePage', {

	});
});

app.listen(port, function() {
	console.log("Server is on port", port);
});
