var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(victim) {
    var newVictim = new Statue(victim.name);
    if(this.statues.length < 3) {
      this.statues.push(newVictim);
    }
    else {
      var freedPerson = new Person(this.statues[0].name);
      this.statues.shift();
      this.statues.push(newVictim);
      freedPerson.mood = 'relieved';
      return freedPerson;
    }
  }
}

module.exports = Medusa;
