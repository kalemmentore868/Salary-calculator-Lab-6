const Employee = require("./Employee");

class CommissionPaid extends Employee {
  fixedSalary;
  totalSales;

  constructor(p, f, l, e, fs, ts) {
    super(p, f, l, e);
    this.fixedSalary = fs;
    this.totalSales = ts;
  }

  grossSalary() {
    return this.fixedSalary + this.totalSales * 0.05;
  }
}

module.exports = CommissionPaid;
