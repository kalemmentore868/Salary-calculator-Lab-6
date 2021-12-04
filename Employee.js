class Employee {
  phoneNumber;
  fisrtName;
  lastName;
  employeeCode;

  constructor(p, f, l, e) {
    this.phoneNumber = p;
    this.firstName = f;
    this.lastName = l;
    this.employeeCode = e;
  }

  grossSalary() {}

  deductionsCalculation() {
    return (this.grossSalary() - 1000) * 0.15;
  }

  calNetSalary() {
    return this.grossSalary() - this.deductionsCalculation();
  }
}

module.exports = Employee;
