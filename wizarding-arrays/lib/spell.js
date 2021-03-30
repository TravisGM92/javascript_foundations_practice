class Spell {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.executionHistory = [];
  }
  execute(target) {
    if(target instanceof Array) {
      target.forEach(spell => {
        this.executionHistory.push(spell);
      });
      return this.castSpells(target);
    } else {
      this.executionHistory.push(target);
      return `Success! You've cast a spell on the ${target}.`
    }
  }
  castSpells(target, index=0) {
    if(index == (target.length - 1)) {
      return `Success! You've cast a spell on the ${target[index]}.`;
    } else {
      return `Success! You've cast a spell on the ${target[index]}. ` + this.castSpells(target, index+1);
    }
  }
  clearExecutionHistory() {
    this.executionHistory = [];
  }
}

module.exports = Spell;
