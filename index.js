var express = require('express');
var app = express();
const path = require('path');
const exphbs = require('express-handlebars');
var wrapper_to_get_or_check_bsk = require('./wrapper_to_get_or_check_bsk');
var options = {
	title: 'My Awesome Photo Gallery'
};
// app.get('/', (req, res) => {
// 	res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

//Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// app.use(express.static(path.join(__dirname, 'public')));

//Homepage Route
app.get('/', (req, res) => {
	res.render('index', {
		title: 'BSK tools'
	});
});

app.get('/encode', function(req, res) {
	let tbs = req.query.tbs;
	let bsk_text = wrapper_to_get_or_check_bsk.bsk_solver(tbs);
	res.send(bsk_text);
});

app.get('/decode', function(req, res) {
	let tbs = req.query.tbs;
	let bsk = req.query.bsk;
	let bsk_text = wrapper_to_get_or_check_bsk.decode_bsk(tbs, bsk);
	res.send(bsk_text);
});

app.listen(5500);
