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
    if(this.isPrivate && skater.money >= this.cost && this.occupants.length < 3) {
      skater.money -= this.cost;
      this.occupants.push(skater);
      return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`
    } else if(!this.isPrivate && this.occupants.length < 3) {
      this.occupants.push(skater);
      return `Welcome to the free ${this.name} Skatepark!`
    } else if(skater.money < this.cost && this.occupants.length < 3){
      return `Sorry, you don't have enough money.`
    } else {
      return `Sorry, we are at max capacity. Thank you for understanding.`
    }
  }
}

module.exports = SkatePark;
