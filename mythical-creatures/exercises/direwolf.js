class Direwolf {
  constructor(name, home='Beyond the Wall', size='Massive') {
    this.name = name;
    this.home = home;
    this.size = size;
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }
  protect(stark) {
    if(stark.location === this.home && this.starksToProtect.length < 2) {
      this.starksToProtect.push(stark);
      stark.safe = true;
      this.huntsWhiteWalkers = false;
    }
  }
  leave(stark) {
    stark.safe = false;
    this.starksToProtect.shift(stark);
  }
}

module.exports = Direwolf;
