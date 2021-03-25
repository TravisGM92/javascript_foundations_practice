const Being = require('./being');
const Part = require('./part');

class Ship {
  constructor(data) {
    this.name = data['name'];
    this.type = data['type'];
    this.maxCrew = data['maxCrew'];
    this.odometer = data['odometer'] || 0;
    this.fuelCapacity = data['fuelCapacity'] || 10;
    this.fuel = 0;
    this.captain = data['captain'];
    this.crew = [];
    this.cargo = [];
    this.parts = data['parts'] || {};
    this.readyToFly = (this.captain != undefined && this.fuel > 0);
  }
  addCrew(people) {
    people.forEach(member => {
      if(this.crew.length < this.maxCrew && member instanceof Being) {
        this.crew.push(member);
      }
    });
  };

  loadCargo(item) {
    if(item instanceof Part) {
      this.cargo.push(item);
    }
  };

  updatePart(item) {
    if(this.parts[item.type] == undefined) {
      this.parts[item.type] = item
    } else {
      var diff = this.parts[item.type].value - item.value;
      this.parts[item.type] = item;
      return diff;
    }
  }

  checkReadiness() {
    if(this.captain == undefined) {
      return 'Cannot fly without a captain';
    } else if (Object.keys(this.parts).length === 0) {
      return 'Cannot fly without parts';
    } else if (this.fuel == 0) {
      return 'Cannot fly without fuel';
    } else {
      this.readyToFly = true;
      return 'Good to go!';
    }
  }
}

  module.exports = Ship;
