const readCSV = require('./util/Read-CSV');
const rl = require("readline");
const CheckArguments = require('./util/CheckArguments');
const eventsNames = require('./util/EventsNames');

let prompt = rl.createInterface(process.stdin, process.stdout);

// store passed parameters from command line
const args = process.argv.slice(2);

const checkArguments = new CheckArguments();

checkArguments.on(eventsNames.events.AFTER_CHECK, (parseParams) => {
  console.log(parseParams);
  console.log("Args have been printed");
  // readCSV(args);
  prompt.close();
})
checkArguments.emit(eventsNames.events.CHECK,args);




