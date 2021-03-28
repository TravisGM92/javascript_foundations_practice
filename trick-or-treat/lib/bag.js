class Bag {
  constructor() {
    this.empty = true;
    this.count = 0;
    this.candies = [];
  }
  fill(candy) {
    this.candies.push(candy);
    this.count += 1;
  }
  contains(name) {
    var result = false;
    this.candies.forEach((candy) => candy.type == name ? result = true : 'no');
    return result;
  }
}

module.exports = Bag;
