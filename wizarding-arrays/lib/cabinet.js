class Cabinet {
  constructor() {
    this.potions = [];
  }
  isEmpty() {
    return this.potions == 0;
  }
  add(item) {
    if(item instanceof Array) {
      for (var i = 0; i < item.length; i++) {
        this.potions.push(item[i]);
      }
    } else {
      this.potions.push(item);
    }
  }
  takeFirstPotion() {
    return this.potions.shift();
  }
  takePotionWithName(itemRequested) {
    var results = [];
    this.potions.forEach((item, index) => {
      if(itemRequested == item.name) {
        results.push(item);
        this.potions.splice(index, 1);
      }
    })
    return results[0];
  }
  count(itemName) {
    var results = 0;
    this.potions.forEach((item) => {
      if(item.name == itemName) {
        results += 1;
      }
    })
    return results;
  }
}

module.exports = Cabinet;
