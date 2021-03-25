class Part {
  constructor(data) {
    this.name = data['name'];
    this.type = data['type'];
    this.value = data['value'];
    this.broken = false;
    this.checkForValidity = this.checkStatus();
    this.isValid = ![this.name, this.type, this.value].some((item) => item == undefined);
  }
  checkStatus() {
    const requiredInfo = {name: this.name, type: this.type, value: this.value};
    var keys = Object.keys(requiredInfo);
    var values = Object.values(requiredInfo);
    var result = [];
    values.forEach((property, index) => { property === undefined ? result.push(index) : 'none' });
    return `This part needs a ${keys[result[0]]}!`
  }
};

module.exports = Part;
