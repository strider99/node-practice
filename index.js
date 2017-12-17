const readCSV = require('./util/Read-CSV');
const rl = require("readline");

let prompt = rl.createInterface(process.stdin, process.stdout);

// store passed parameters from command line
const args = process.argv.slice(2);

const startParsingFile = (args) => {
  if(args.length === 0){
    // prompt use for filename and separator
    prompt.question("Enter the <filepath/filename separator>", function (params) {
      params = params.split(' ');
      if(params[0]){
        readCSV(params[0]);
        prompt.close();
      }
      else{
        console.log("File Path or separator was not specified");
        startParsingFile([]);
      }
    });
  }
  else{
    readCSV(args[0]);
    prompt.close();
  }
}


// accept file path and separator as arguments
startParsingFile(args);


