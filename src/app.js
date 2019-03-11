const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Configure handlebars templating engine and define
// a custom handlebars directory versus the views default
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../templates/views'));
hbs.registerPartials(path.join(__dirname, '../templates/partials'));

// Set location of static assets. This is default to serving
// index.html at the root url
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
	res.render('index', {
		title: 'Node Weather Home Page',
		name: 'Tim Acker'
	});
});

app.get('/about', (req, res) => {
	res.render('index', {
		title: 'Node Weather About Page',
		name: 'Tim Acker'
	});
});

app.get('/help', (req, res) => {
	res.render('index', {
		title: 'Node Weather Help Page',
		name: 'Tim Acker'
	});
});

app.get('/weather', (req, res) => {
	res.send({
		location: 'Cary, NC',
		temperature: 49
	});
});

app.listen(3000, () => {
	console.info('Server listening on port 3000.');
});
