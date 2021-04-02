class Wand {
  constructor(type, size, core) {
    this.type = type;
    this.size = size;
    this.core = core;
  }
  cast(name) {
    return `Casting ${name}!`;
  }
}

module.exports = Wand;
