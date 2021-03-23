class Skater {
  constructor(data) {
    this.name = data['name'];
    this.skill = data['skill'];
    this.tricks = data['tricks'];
    this.money = data['cash'];
    this.frustration = 0;
    this.learning = {};
  }
  practice(trick) {
    if(!this.tricks[trick]) {
      this.frustration += 1;
      if(this.learning[trick]) {
        this.learning[trick] += 1;
      } else {
        this.learning[trick] = 1;
      }
    }
    if(this.learning[trick] >= 3) {
      this.tricks[trick] = true;
      this.frustration = 0;
      return `I just learned to ${trick}!!!`;
    }
  }
}

module.exports = Skater;
