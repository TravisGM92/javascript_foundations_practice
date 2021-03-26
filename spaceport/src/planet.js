class Planet {
  constructor(data) {
    this.name = data['name'];
    this.shop = data['shop'];
    this.currentShip = data['ship'];
    this.coordinates = data['coordinates'];
  }
  landShip(ship) {
    this.currentShip = ship;
  }
  calculateDistance(planet) {
    var result = 0;
    Object.values(planet.coordinates).forEach((coord, index) => {
      if(index == 0) {
        result += (coord - this.coordinates['x'])**2;
      } else if (index == 1) {
        result += (coord - this.coordinates['y'])**2;
      } else {
        result += (coord - this.coordinates['z'])**2;
      }
    })
    return Math.sqrt(result);
  }
  refuel(ship) {
    ship.fuel = ship.fuelCapacity;
  }
  giveClearance(planet) {
    if(this.currentShip.fuel == 0) {
      return 'Clearance denied: Cannot fly without fuel';
    } else {
      this.currentShip.fuel = 0;
      planet.currentShip = this.currentShip;
      this.currentShip = undefined;
      return `Clearance granted: Enjoy your trip to ${planet.name}`
    }
  }
}

module.exports = Planet;
