class Hobbit {
  constructor(data) {
    this.name = data['name'];
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.hasRing = false;
  }

  celebrateBirthday() {
    if (this.age > 31 && this.age < 100) {
      this.adult = true;
    }
    else if (this.age > 32) {
      this.adult = true;
      this.old = true;
    }
    this.age += 1;
  }

  getRing() {
    if (this.name == 'Frodo') {
      this.hasRing = true;
      return "Here is the ring!"
    }
    else {
      return "You can't have it!"
    }
  }
}

module.exports = Hobbit;
