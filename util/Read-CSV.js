const fs = require('fs');

const readCsv = (filePath) => {
	const output = fs.readFile(filePath, 'utf-8', (err, data) => {
		if(err){
			console.warn('there was an error');
		}
		// store every row in an array 
		 const rows = data.trim().split('\r\n');
		 rows.forEach((row) => {
		 	let rowArray = row.split(',');
		 	if(rowArray.length === 3){
		 		console.log(rowArray.join(','));
		 	}
		 	else {
		 		console.warn(`${rowArray.join(',')}` + '\x1b[33m%s\x1b[0m',  ' !Data Not Found!');
		 	}
		 });
		 // console.log(rows);
	});
}

module.exports = readCsv;