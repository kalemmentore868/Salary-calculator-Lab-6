const Employee = require("./Employee");

class HourlyPaid extends Employee {
  rateOfPay;
  hoursWorked;

  constructor(p, f, l, e, r, hw) {
    super(p, f, l, e);
    this.rateOfPay = r;
    this.hoursWorked = hw;
  }

  grossSalary() {
    let pay = 0;
    if (this.hoursWorked > 120) {
      const timeAndHalfHours = this.hoursWorked - 120;
      const timeAndHalfPay = this.rateOfPay * 1.5;
      pay =
        this.hoursWorked * this.rateOfPay + timeAndHalfHours * timeAndHalfPay;
    } else {
      pay = this.hoursWorked * this.rateOfPay;
    }

    return pay;
  }
}

module.exports = HourlyPaid;
