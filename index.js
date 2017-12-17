const readCSV = require('./util/Read-CSV');
const rl = require("readline");

let prompt = rl.createInterface(process.stdin, process.stdout);

// store passed parameters from command line
const args = process.argv.slice(2);

const startParsingFile = (args) => {
  if(args.length < 2){
    // prompt use for filename and separator
    prompt.question("Invalid input format.\n Enter the <filepath/filename separator>", function (args) {
      args = args.split(' ');
      if(args[0] && args[1]){
        readCSV(args);
        prompt.close();
      }
      else{
        console.log("File Path or separator was not specified");
        startParsingFile([]);
      }
    });
  }
  else{
    readCSV(args);
    prompt.close();
  }
}


// accept file path and separator as arguments
startParsingFile(args);


