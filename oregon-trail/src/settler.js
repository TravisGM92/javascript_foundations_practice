class Settler {
  constructor(data) {
    this.name = data['name'];
    this.age = data['age'];
    this.nationality = data['nationality'] || 'unknown';
    this.status = 'healthy';
    this.ailments = [];
  }
  experienceDistress(name) {
    if(this.status == 'dead') {
      'no';
    } else {
      this.ailments.push(name);
      if(this.ailments.length == 1) {
        this.status = 'fair';
      } else if (this.ailments.length == 2) {
        this.status = 'poor';
      } else {
        this.status = 'dead';
      }
    }
  }
  heal() {
    if(this.status != 'dead') {
      this.ailments = [];
      this.status = 'healthy';
    } else {
      return `Sorry, we can't heal a corpse. ${this.name} needs a proper burial!`;
    }
  }
}

module.exports = Settler;
