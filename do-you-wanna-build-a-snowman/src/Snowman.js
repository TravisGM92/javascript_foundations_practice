class Snowman {
  constructor(data) {
    this.carrots = data['carrots'];
    this.coal = data['coal'];
    this.buttons = data['buttons'];
    this.snowballs = data['snowballs'];
    this.magicHat = false;
  }
  canWearMagicHat() {
    if(this.coal >= 2 && this.buttons >= 5 && this.carrots >= 1 && this.snowballs >= 2) {
      this.magicHat = true;
    }
  }
}

module.exports = Snowman;
