const Employee = require("./Employee");

class MonthlyPaid extends Employee {
  fixedSalary;

  constructor(p, f, l, e, fs) {
    super(p, f, l, e);
    this.fixedSalary = fs;
  }

  grossSalary() {
    return this.fixedSalary;
  }
}

module.exports = MonthlyPaid;
