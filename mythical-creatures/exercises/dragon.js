class Dragon {
  constructor(name, rider) {
    this.name = name
    this.rider = rider
    this.hungry = true
    this.eat_counter = 0
  }
  greet() {
    return `Hi, ${this.rider}!`
  };

  eat() {
    this.eat_counter += 1;
    if (this.eat_counter >= 3) {
      return this.hungry = false;
    };
  };
}

module.exports = Dragon;
