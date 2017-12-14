const fs = require('fs');

const readCsv = () => {
	const output = fs.readFile('data/simple.csv', 'utf-8', (err, data) => {
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
		 		console.warn('\x1b[33m%s\x1b[0m',` ${rowArray.join(',')}  !Missing Data Point!`);
		 	}
		 });
		 // console.log(rows);
	});
}

module.exports = readCsv;