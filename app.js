const yargs = require('yargs');
const chalk = require('chalk');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address for requested weather information',
			string: true // parses user input as a string
		}
	})
	.help()
	.alias('help', 'h').argv;

geocode.geocodeAddress(argv.address, (err, res) => {
	if (err) {
		console.warn(chalk.red(err));
	} else {
		console.info(res);
	}
});

weather.getWeather(37.8267, -122.4233, (err, res) => {
	if (err) {
		console.warn(chalk.red(err));
	} else {
		console.info(res);
	}
});
