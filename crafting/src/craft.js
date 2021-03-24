class Craft {
  constructor(data) {
    this.name = data['type'];
    this.materials = data['materials'];
    this.completed = false;
  }
  completeCraft() {
    this.completed = true;
    return 'All done! It looks great!';
  }
  calculateProjectTotal() {
    var total = 0;
    this.materials.forEach(item => {
      total += (item.price * item.amount);
    })
    return total;
  }
}

module.exports = Craft;
