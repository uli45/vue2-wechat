const express = require('express')
const os = require('os');
var app = express()

var getIPAddress = function() {
	var ifaces = os.networkInterfaces();
	var ip = '';
	for (var dev in ifaces) {
		ifaces[dev].forEach(function(details) {
			if (ip === '' && details.family === 'IPv4' && !details.internal) {
				ip = details.address;
				return;
			}
		});
	}
	return ip || "127.0.0.1";
};

let ip = getIPAddress();

console.log("-->>>>开启：", ip)

app.use(express.static(__dirname + '../../dist/release'))
app.use(express.static(__dirname + '../../unpackage/release'))
app.use(express.static(__dirname + '../../dist/build'))

app.listen(8520, () => {

})

module.exports = app
