const employees = []

function Employees(name, job_title, salary, status = "Full-Time") {
    this.name = name;
    this.job_title = job_title;
    this.salary = salary;
    this.status= status;
    this.printEmployeeForm = function () {
        console.log(name + job_title + salary + status )
    }
}
var addedEmployee = new Employees ("Bob", "Manager", "$40,000", "Part-Time")
var addEmployee = new Employees ("Mike", "Director", "$60,000")
var adEmployee = new Employees ("Rod", "Vice-President", "$80,000")
console.log(addedEmployee)
function newArr() {
   return employees.push(addedEmployee)
}
 console.log(newArr());
 console.log(employees);
 
