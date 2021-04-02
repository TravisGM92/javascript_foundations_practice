const Pet = require('../lib/pet')

class Wizard {
  constructor(data) {
    this.name = data['name'];
    this.pets = [];
    this.petsCount = 0;
    this.wand = undefined;
  }
  adoptPet(pet) {
    this.pets.push(pet);
    this.petsCount += 1;
  }
  petList(index=0) {
    if(index == (this.petsCount - 1)) {
      return `An ${this.pets[index].type} named ${this.pets[index].name}.`;
    } else {
      return `A ${this.pets[index].type} named ${this.pets[index].name}; ` + this.petList(index+1);
    }
  }
  getWand(wand) {
    this.wand = wand;
  }
  castSpell(spell) {
    return `Casting ${spell}!`
  }
}

module.exports = Wizard;
