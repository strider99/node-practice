const fs = require('fs');

const readData = (params) => {
	//loop throw array of params and log the output
	const outputArray = [], invalidDataArray = [];
	let filesRemaining = params.length;
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
				
				if(rowArray.length >= 3){
					// console.log(rowArray.join(' '));
					if(separator == '|'){
						outputArray.push(rowArray[2] + ' ' + rowArray[0]);
					}
					else if(separator == '$') {
						outputArray.push(rowArray[1] + ' ' + rowArray[0]);
					}
					else {
						outputArray.push(rowArray[0] + ' ' + rowArray[1]);
					}

				}
				// else if(rowArray.length === 1){
					// 	console.log(rowArray + '\x1b[33m%s\x1b[0m','Separator not found');
					// }
					else {
						invalidDataArray.push(`${rowArray.join(' ')}  at  ${filePath} and line number ${index+1} `);
					}
				}); //end of forEach
			}
			filesRemaining -= 1;
			if( filesRemaining == 0){
				outputArray.sort();
				outputArray.forEach(person => console.log(person));
				console.log('\n');
				invalidDataArray.forEach(item => console.log(item));

			}
			
		}); //end readFile
		
	
	}); //end params.forEach

		
	
} //end readCSV

module.exports = readData;