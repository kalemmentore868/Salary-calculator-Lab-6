const main = (() => {
  const prompt = require("prompt-sync")();
  const Employee = require("./Employee");
  const HourlyPaid = require("./HourlyPaidEmployee");
  const MonthlyPaid = require("./MonthlyPaidEmployee");
  const CommissionPaid = require("./CommissionEmployee");

  const employeeList = [];

  let highestEarner;
  let lowestEarner;

  let highestSal;
  let lowestSal;

  for (i = 0; i < 3; i++) {
    const employeeNumber = parseInt(prompt("Please enter phone number "));
    const firstName = prompt("Please enter first name ");
    const lastName = prompt("Please enter second name ");
    const employeeCode = prompt("Please enter employee type code (f,c or h) ");

    if (employeeCode.toLocaleLowerCase() === "f") {
      const fixedSalary = parseInt(prompt("Please enter your Salary "));
      const monthlyEmployee = new MonthlyPaid(
        employeeNumber,
        firstName,
        lastName,
        employeeCode,
        fixedSalary
      );
      employeeList.push(monthlyEmployee);
    } else if (employeeCode.toLocaleLowerCase() === "c") {
      const fixedSalary = parseInt(prompt("Please enter your fixed Salary "));
      const totalSales = parseInt(prompt("Please enter total sales"));
      const commissionEmployee = new CommissionPaid(
        employeeNumber,
        firstName,
        lastName,
        employeeCode,
        fixedSalary,
        totalSales
      );
      employeeList.push(commissionEmployee);
    } else if (employeeCode.toLocaleLowerCase() === "h") {
      const rateOfPay = parseInt(prompt("Please enter rate of pay"));
      const hoursWorked = parseInt(prompt("Please enter hours worked "));
      const hourlyEmployee = new HourlyPaid(
        employeeNumber,
        firstName,
        lastName,
        employeeCode,
        rateOfPay,
        hoursWorked
      );
      employeeList.push(hourlyEmployee);
    }
  }

  let totalCworkers = 0;
  let totalFworkers = 0;
  let totalHworkers = 0;

  let totalGross = 0;
  let totalDeductions = 0;
  let totalNetPay = 0;

  employeeList.map((employee) => {
    console.log(`
      Employee name: ${employee.fisrtName} ${employee.lastName}
      Employee number: ${employee.phoneNumber}
      Employee type: ${employee.employeeCode}
      Gross Salary: ${employee.grossSalary()}
      Deductions: ${employee.deductionsCalculation()}
      Net Salary: ${employee.calNetSalary()}
      `);

    switch (employee.employeeCode.toLocaleLowerCase()) {
      case "c":
        totalCworkers++;
        break;
      case "f":
        totalFworkers++;
        break;
      case "h":
        totalHworkers++;
    }

    // if (i === 0) {
    //   highestSal = employee.grossSalary();
    //   highestEarner = employee;
    //   console.log(highestSal, highestEarner);
    //   lowestSal = employee.grossSalary();
    //   lowestEarner = employee;
    // }

    // if (highestSal < employee.grossSalary()) {
    //   highestSal = employee.grossSalary();
    //   highestEarner = employee;
    // }

    // if (lowestSal > employee.grossSalary()) {
    //   lowestSal = employee.grossSalary();
    //   lowestEarner = employee;
    // }

    totalGross += employee.grossSalary();
    totalDeductions += employee.deductionsCalculation();
    totalNetPay += employee.calNetSalary();
  });

  console.log(`
  Total number of Worker: ${employeeList.length}
  Total Commission Workers: ${totalCworkers}
  Total Hourly Workers: ${totalHworkers}
  Total Fixed Workers: ${totalFworkers}

  For ALL EMPLOYESS:
  Total Gross: ${totalGross}
  Total Deductions: ${totalDeductions}
  Total Net Pay: ${totalNetPay}
  `);

  //   console.log(`
  //     Highest Earner Name: ${highestEarner.firstName} ${highestEarner.lastName}
  //     Salary: ${highestSal}
  //     Lowest Earner Name: ${lowestEarner.firstName} ${lowestEarner.lastName}
  //     Salary: ${lowestSal}
  //     `);
})();
