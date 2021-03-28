class Snack {
  constructor(type) {
    this.type = type;
    this.deliciousLevel = 'extra';
    this.amount = 100;
    this.isInLunchBox = false;
    this.cuttingItClose = false;
    this.healthy = this.checkForHealthy();
  }
  getEaten() {
    this.amount -= 10;
    if(this.amount <= 20) {
      this.cuttingItClose = true;
    }
  }
  checkForHealthy() {
    if(this.type.includes('Fruit') || this.type.includes('fruit')) {
      this.healthy = true;
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Snack;
