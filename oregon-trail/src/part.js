class Part {
  constructor(type) {
    this.type = type;
    this.broken = false;
    this.breakNumber = 0;
  }
  break() {
    this.breakNumber += 1;
    this.broken = true;
  }
  repair() {
    if(this.breakNumber < 2) {
      this.broken = false;
    } else {
      return `This ${this.type} has seen better days, we'll need a brand new one!`;
    }
  }
}

module.exports = Part;
