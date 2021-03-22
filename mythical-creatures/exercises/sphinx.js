class Sphinx {
  constructor() {
    this.riddles = [];
    this.heroesEaten = 0;
  }
  collectRiddle(riddle) {
    if(this.riddles.length < 3) {
      this.riddles.push(riddle);
    } else {
      this.riddles.shift();
      this.riddles.push(riddle);
    }
  }
  attemptAnswer(answer) {
    var i = this.riddles.length;
    const eles = this.riddles.length;
    var correct = 0;
    while(i--) {
      if(this.riddles[i]['answer'] == answer) {
        this.riddles.splice(i, 1);
        correct += 1;
      }
    }
    if(correct == 0) {
      this.heroesEaten += 1;
    } else if (correct == eles) {
      return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`;
    } else {
      return "That wasn't that hard, I bet you don't get the next one";
    }
  }
}

module.exports = Sphinx;
