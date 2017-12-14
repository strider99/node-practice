const fs = require('fs');

const readFile = () => {
	const output = fs.readFile('data.txt', 'utf8',(err, data) => {
		if(err) {
			console.log("There was some error");
		}
	const lines = data.trim().split('\r\n');
	console.log(lines[0]);
	});

};
module.exports = readFile;