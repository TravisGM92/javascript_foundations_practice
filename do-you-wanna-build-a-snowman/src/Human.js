var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {snowballs: 0, coal: 0, buttons: 0, carrots: 0};
    this.snowman = null;
  }
  gatherMaterials(item, amount) {
    this.materials[item] += amount;
  }
  buildASnowman() {
    var snowman = new Snowman(this.materials);
    this.snowman = snowman;
    return snowman;
  }
  placeMagicHat() {
    if(this.snowman.magicHat) {
      return 'Woah, this snowman is coming to life!';
    } else {
      return "I guess I didn't build it correctly."
    }
  }
}

module.exports = Human;
