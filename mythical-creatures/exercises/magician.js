class Magician {
  constructor(data) {
    this.name = `The Great ${data['name']}`;
    this.assistant = data['assistant'];
    this.favoriteAccessory = data['clothing'] || 'top hat';
    this.confidencePercentage = 10;
  }

  performIncantation(name) {
    return `${name.toUpperCase()}!`
  };

  performTrick() {
    if(this.favoriteAccessory == 'top hat') {
      this.confidencePercentage += 10
      return 'PULL RABBIT FROM TOP HAT'
    }
    else {
      this.confidencePercentage += 10
      return 'PULL DOVE FROM SLEEVE'
    }
  }

  performShowStopper() {
    if(this.confidencePercentage > 100 && this.assistant == true) {
      return 'WOW! The magician totally just sawed that person in half!'
    }
    else {
      return 'Oh no, this trick is not ready!'
    }
  }
}

module.exports = Magician;
