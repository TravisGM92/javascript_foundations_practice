class Golfer {
  constructor(data) {
    this.name = data['name'];
    this.handicap = data['handicap'];
    this.frustration = 0;
    this.confidence = 0;
  }
  calculateAvg(par) {
    return `I usually shoot a ${this.handicap+par} on average.`;
  }
  playRound(course) {
    if(course.difficulty == 'hard') {
      this.frustration += 500;
    } else if (course.difficulty == 'moderate') {
      this.frustration += 100;
    }
  }
  hitTheRange() {
    this.confidence += 10;
  }
  marvel(course) {
    var features = course.features;
    return `I love the ${features[0]} and ${features[1]} on this course!`;
  }
  whatYaShoot(par) {
    if(par >= 2) {
      this.frustration += 20;
      return 'Doh!';
    } else if (par == 0) {
      this.frustration -= 10;
      return 'Booyah!';
    } else if (par < 0) {
      this.frustration = 0;
      return 'I AM THE GREATEST GOLFER ALIVE!';
    }
  }
}

module.exports = Golfer;
