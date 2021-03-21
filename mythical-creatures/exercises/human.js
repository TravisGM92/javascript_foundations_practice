class Human {
  constructor(name) {
    this.name = name;
    this.encounterCounter = 0;
    this.knockedOut = false;
  }
  noticesOgre() {
    const divider = this.encounterCounter % 3;
    if(this.encounterCounter !== 0 && divider == 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Human;
