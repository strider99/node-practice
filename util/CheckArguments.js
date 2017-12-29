// This module will check for errors in the arguments received from command line
const EventEmitter = require('events');
const eventsNames = require('./EventsNames');
class CheckArguments extends EventEmitter {
  constructor(ops){
    super(ops);
    this.on(eventsNames.events.CHECK, (args) => {
      this.check(args);
    })
  }
  check(args){
    let argsLength = args.length;
    let parseParams = []; //store arrays of filepath, separator and file format
    if(argsLength < 3){
      console.log("Invalid Input format.");
      process.exit();
    }
    else if(argsLength % 3 == 0){
      for(let i = 0; i <= argsLength - 3; i = i + 3){
        parseParams.push([args[i], args[i+1], args[i+2]]);
      }
      this.emit(eventsNames.events.AFTER_CHECK,parseParams);
    }
  }

}

module.exports = CheckArguments;