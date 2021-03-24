var pluralize = require('pluralize');
var Skier = require('./Skier');

class Lift {
  constructor(limit) {
    this.inService = true;
    this.limit = limit;
    this.skiers = [];
    this.safetyBar = 'up';
  }
  admitSkier(name, hasTicket) {
    if(this.skiers.length < this.limit && hasTicket == true) {
      var person = new Skier(name, hasTicket);
      this.skiers.push(person);
    } else if(hasTicket == true){
      return `Sorry, ${name}. Please wait for the next lift!`;
    } else {
      return `Sorry, ${name}. You need a lift ticket!`;
    }
  }
  startLift() {
    if(this.skiers.length == this.limit) {
      this.safetyBar = 'down';
    } else {
      var amount = this.limit - this.skiers.length;
      return `We still need ${amount} more ${pluralize('skier', amount)}!`;
    }
  }
}

module.exports = Lift;
