const readCSV = require('./util/Read-CSV');

// accept file path as argument
let filePath = process.argv[2];

readCSV(filePath);

