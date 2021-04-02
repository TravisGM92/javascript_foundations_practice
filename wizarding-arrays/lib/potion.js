class Potion {
  constructor(name, rarity) {
    this.name = name;
    this.rareness = rarity || 0;
  }
  isRare() {
    return this.rareness > 7;
  }
}

module.exports = Potion;
