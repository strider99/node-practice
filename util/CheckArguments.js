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
    // console.log(args);
    let argsLength = args.length;
    console.log(argsLength);
    this.emit(eventsNames.events.AFTER_CHECK,args);
  }

}

module.exports = CheckArguments;