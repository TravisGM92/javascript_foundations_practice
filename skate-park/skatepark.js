const Skater = require('./skater');

class SkatePark {
  constructor(data) {
    this.name = data['name'];
    this.yearFounded = data['year'];
    this.style = data['type'];
    this.features = data['features'];
    this.isPrivate = data['isPrivate'] || false;
    this.cost = data['price'] || 0;
    this.occupants = [];
  }
  admit(skater) {
    if(this.canAdmit(skater)) {
      this.occupants.push(skater);
      return this.greetSkater();
    } else {
      return this.sadGreeting();
    }
  }
  canAdmit(skater) {
    if(skater.money >= this.cost && this.occupants.length < 3) {
      skater.money -= this.cost;
      return true;
    } else {
      return false;
    }
  }

  greetSkater() {
    if(this.isPrivate) {
      return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`;
    } else {
      return `Welcome to the free ${this.name} Skatepark!`;
    }
  }

  sadGreeting() {
    if(this.occupants < 3) {
      return "Sorry, you don't have enough money.";
    } else {
      return 'Sorry, we are at max capacity. Thank you for understanding.';
    }
  }
}

module.exports = SkatePark;
