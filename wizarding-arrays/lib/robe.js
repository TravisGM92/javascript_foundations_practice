class Robe {
  constructor() {
    this.pockets = [[], [], [], [], [], [], [], [], [], []];
  }
  addToPocket(item) {
    for (let i = 0; i <= this.pockets.length; i++) {
      if(this.pockets[i].length == 0) {
        this.pockets[i].push(item);
        break;
      }
    }
  }
  retrieve(item) {
    var result = false;
    for (let i = 0; i < this.pockets.length; i++ ) {
      if(this.pockets[i].includes(item)) {
        result = true;
        var itemRetrieved = item;
        this.pockets[i] = [];
        return itemRetrieved;
      }
    }
  }
  emptyAllPockets() {
    for (let i = 0; i < this.pockets.length; i++) {
      this.pockets[i] = [];
    }
  }
}

module.exports = Robe;
