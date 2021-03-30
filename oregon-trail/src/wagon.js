class Wagon {
  constructor(data) {
    this.title = data['name'];
    this.wheels = data['wheels'] || [];
    this.axles = data['axles'] || [];
    this.oxen = data['oxen'] || [];
    this.yokes = data['yokes'] || [];
    this.food = data['food'] || [];
    this.ammunition = data['ammunition'] || [];
    this.clothes = data['clothes'] || [];
    this.settlers = data['settlers'] || [];
    this.allPartTypes = {'wheels': this.wheels, 'axles': this.axles, 'oxen': this.oxen, 'yokes': this.yokes, 'food': this.food, 'ammunition': this.ammunition, 'clothes': this.clothes, 'settlers': this.settlers };
  }
  addPart(part) {
    if(part.type != 'ox') {
      var partName = `${part.type}s`;
      this.allPartTypes[partName].push(part);
    } else {
      this.allPartTypes['oxen'].push(part);
    }
  }
  canTravel() {
    return (this.checkWheels() && this.checkAxles() && this.checkOxen() && this.checkYokes() && this.checkSettlers());
  }
  checkWheels() {
    var result = true;
    this.wheels.forEach(wheel => wheel.broken == true ? result = false : 'no');
    return (this.wheels.length >= 4 && result);
  }
  checkAxles() {
    var result = true;
    this.axles.forEach(axle => axle.broken == true ? result = false : 'no');
    return (this.axles.length >= 2 && result);
  }
  checkOxen() {
    var result = true;
    this.oxen.forEach(ox => ox.broken == true ? result = false : 'no');
    return (this.oxen.length >= 2 && result);
  }
  checkYokes() {
    var result = true;
    this.yokes.forEach(yoke => yoke.broken == true ? result = false : 'no');
    var yokesNeeded = this.oxen.length/2;
    return (result && this.yokes.length >= yokesNeeded);
  }
  checkSettlers() {
    return (this.settlers.length > 0 && this.settlers[0].status != 'dead');
  }
}

module.exports = Wagon;
