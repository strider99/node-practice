const readCSV = require('./util/Read-CSV');
const rl = require("readline");
const CheckArguments = require('./util/CheckArguments');
const eventsNames = require('./util/EventsNames');

let prompt = rl.createInterface(process.stdin, process.stdout);

// store passed parameters from command line
const args = process.argv.slice(2);

const checkArguments = new CheckArguments();

checkArguments.on(eventsNames.events.AFTER_CHECK, (args) => {
  console.log("Args have been printed");
  // readCSV(args);
  prompt.close();
})
checkArguments.emit(eventsNames.events.CHECK,args);

// const startParsingFile = (args) => {
//   if(args.length < 2){
//     // prompt use for filename and separator
//     prompt.question("Invalid input format.\n Enter the <filepath/filename separator>", function (args) {
//       args = args.split(' ');
//       if(args[0] && args[1]){
//         readCSV(args);
//         prompt.close();
//       }
//       else{
//         console.log("File Path or separator was not specified");
//         startParsingFile([]);
//       }
//     });
//   }
//   else{
//     readCSV(args);
//     prompt.close();
//   }
// }


// accept file path and separator as arguments
// startParsingFile(args);


