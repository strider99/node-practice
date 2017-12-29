const fs = require('fs');

const readCsv = (params) => {


	let filePath = params[0][0], separator = params[0][1];
	// console.log(`The file path is ${filePath} and the separator is ${separator} `);
	fs.readFile(filePath, 'utf-8', (err, data) => {
		if(err){
			console.error('File was not found. Exiting...');
		}
		else {
			// store every row in an array 
			const rows = data.trim().split(/\r?\n/);
			rows.forEach((row) => {
				let rowArray = row.split(separator);
				// console.log(rowArray);
				
				if(rowArray.length >= 3){
					console.log(rowArray.join(' '));
				}
				else if(rowArray.length === 1){
					console.log(rowArray + '\x1b[33m%s\x1b[0m','Separator not found');
				}
				else {
					console.warn(`${rowArray.join(' ')}` + '\x1b[33m%s\x1b[0m', ' !Data Not Found!');
				}
			});
		}
			
		}); //end readFile

		
	
} //end readCSV

module.exports = readCsv;