const readlineSync = require("readline-sync");
const o = ["add", "subtract", "multiply", "divide"]
const num1 = readlineSync.question("Please enter your first number: ")
console.log(num1)
const num2 = readlineSync.question("Please enter your second number: ")
console.log(num2)
const operator = readlineSync.keyInSelect(o, "Please enter the operation to perform:  ")
 
function quikMaffs() {
    if(operator == 0) {
        let total = +num1 + +num2
        console.log(total)
    } else if (operator == 1) {
        let total = num1 - num2
        console.log(total)
    } else if (operator == 2) {
        let total = num1 * num2
        console.log(total)
    } else if (operator == 3) {
        let total = num1 / num2
        console.log(total)
    }
}
quikMaffs()