const fs = require('fs');

const readData = (params) => {
	//loop throw array of params and log the output
	params.forEach((param) => {
		let filePath = param[0], separator = param[1];
		// console.log(`The file path is ${filePath} and the separator is ${separator} `);
		fs.readFile(filePath, 'utf-8', (err, data) => {
		if(err){
			console.error('\x1b[31m%s\x1b[0m',`File ${filePath} was not found \n `);
		}
		else {
			// store every row in an array 
			const rows = data.trim().split(/\r?\n/);
			rows.forEach((row, index) => {
				let rowArray = row.split(separator);
				// console.log(rowArray);
				
				if(rowArray.length >= 3){
					// console.log(rowArray.join(' '));
					console.log(rowArray);
				}
				// else if(rowArray.length === 1){
				// 	console.log(rowArray + '\x1b[33m%s\x1b[0m','Separator not found');
				// }
				else {
					console.warn(`${rowArray.join(' ')}` + '\x1b[33m%s\x1b[0m', ` !Data Not Found! at ', ${filePath} and line number ${index+1} `);
				}
			});
		}
		
	}); //end readFile
	
}); //end params.forEach
		
	
} //end readCSV

module.exports = readData;