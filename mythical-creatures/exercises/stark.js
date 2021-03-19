const Direwolf = require('./direwolf');

class Stark{
  constructor(details) {
    this.name = details.name;
    this.location = details.area || 'Winterfell';
    this.safe = false;

  }

  sayHouseWords() {
    if (this.safe) {
      return 'The North Remembers';
    } else {
    return 'Winter is Coming'
    }
  }

  callDirewolf(direwolfName, direwolfHome) {
    var newDirewolf = new Direwolf(direwolfName, this.location);
    newDirewolf.protect(this);
    return newDirewolf;
  }

}


module.exports = Stark;
