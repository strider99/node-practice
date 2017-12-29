const readFile = require('./util/Read-File');
const rl = require("readline");
const CheckArguments = require('./util/CheckArguments');
const eventsNames = require('./util/EventsNames');

let prompt = rl.createInterface(process.stdin, process.stdout);

// store passed parameters from command line
const args = process.argv.slice(2);

const checkArguments = new CheckArguments();

checkArguments.on(eventsNames.events.AFTER_CHECK, (receivedParams) => {
  console.log(receivedParams);
  console.log("Args have been printed");
  readFile(receivedParams);
  prompt.close();
})
checkArguments.emit(eventsNames.events.CHECK,args);




