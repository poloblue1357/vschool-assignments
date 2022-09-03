const employees = []

function Employee(name, title, salary, status = "Full Time") {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = status;
}

Employee.prototype.printEmployeeForm = function() {
    console.log("Name: " + this.name, ", Job Title: " + this.title,", Salary: " + this.salary, ", Status: " + this.status)
}

var dan = new Employee("Dan", "SoundCloud Rapper", "$0")
dan.printEmployeeForm()
employees.push(dan)

var carlos = new Employee("Carlos", "Investment Banker", "$230,000")
carlos.printEmployeeForm()
employees.push(carlos)

var jenny = new Employee("Jenny", "Dental Assistant", "$60,000", "Part-Time")
jenny.printEmployeeForm()
employees.push(jenny)


