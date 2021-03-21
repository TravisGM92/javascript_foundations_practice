class Ogre {
  constructor(data) {
    this.name = data['name'];
    this.home = data['abode'] || 'Swamp';
    this.swings = 0;
  }
  encounter(type) {
    type.encounterCounter += 1;
    if(type.noticesOgre()) {
      this.swingAt(type);
    }
  }
  swingAt(type) {
    this.swings += 1;
    if(this.swings % 3 == 2) {
      type.knockedOut = true;
    }
  }
  apologize(type) {
    type.knockedOut = false;
  }
}

module.exports = Ogre;
