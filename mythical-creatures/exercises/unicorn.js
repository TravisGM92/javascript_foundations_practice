class Unicorn {
  constructor(name, color='white') {
    this.name = name;
    this.color = color;
  }
  isWhite() {
    if (this.color !== 'white') {
      return false;
    }
  };
  says(string) {
    return `**;* ${string} *;**`;
  }
}
module.exports = Unicorn;
