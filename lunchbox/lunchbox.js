class LunchBox {
  constructor(data) {
    this.owner = data['owner'];
    this.material = data['madeOf'];
    this.shape = data['shape'];
    this.color = data['color'];
    this.snacks = [];
  }
  acquireSnack(snack) {
    this.snacks.push(snack);
    snack.isInLunchBox = true;
  }
  findHealthySnacks() {
    var result = [];
    this.snacks.forEach(snack => snack.healthy ? result.push(snack.type) : 'no');
    return result;
  }
}

module.exports = LunchBox;
