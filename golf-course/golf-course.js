class GolfCourse {
  constructor(name, difficulty, openings, features) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];
  }
  checkInGroup(group) {
    const course = new GolfCourse(this.name, this.difficulty, this.openings, this.features)
    if(course.checkIfEnoughRoom(group)) {
      var i = group.length;
      while(i--) {
        if(this.openings != 0) {
          this.openings -= 1;
          this.currentlyPlaying.push(group[i].name);
        }
      }
      return "You're checked in. Have fun!";
    } else {
      return 'Sorry, we are currently booked! Please come back later.';
    }
  }
  checkIfEnoughRoom(group) {
    if(this.openings > group.length) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = GolfCourse;
