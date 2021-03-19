class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
    this.humanWards = [];
  }
  receiveBelief() {
    this.dust += 1;
  }
  believe() {
    this.dust += 10;
  }
  makeDresses(ingredients) {
    ingredients.forEach(ingredient => {
      this.clothes['dresses'].push(ingredient);
    })
  }
  becomeProvoked() {
    this.disposition = 'Vengeful';
  }
  replaceInfant(infant) {
    if(this.disposition === 'Vengeful') {
      infant.disposition = 'Malicious';
      this.humanWards.push(infant);
      if(this.humanWards.length > 2) {
        this.disposition = 'Good natured';
      }
    }
    return infant;
  }
}

module.exports = Fairy;
