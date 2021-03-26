const Part = require('./part');
class Shop {
  constructor(data) {
    this.name = data['name'];
    this.inventory = data['inventory'] || {};
  }

  addInventory(item) {
    if(item instanceof Part) {
      if(!this.inventory[item.type]) {
        this.inventory[item.type] = item;
      }
    }
  }

  outfitShip(ship, itemName) {
    if(!ship.captain) {
      return 'cannot outfit a ship without a captain';
    } else if (ship.captain.credits < this.inventory[itemName].value) {
      return `you require ${(this.inventory[itemName].value - ship.captain.credits)} more credits to make this purchase`
    } else {
      ship.captain.credits -= this.inventory[itemName].value;
      ship.parts[this.inventory[itemName].type] = this.inventory[itemName];
      this.inventory[itemName] = undefined;
      return `${itemName} added to ship`;
    }
  }
}

module.exports = Shop;
