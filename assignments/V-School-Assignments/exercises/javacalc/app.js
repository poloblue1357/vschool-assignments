const readlineSync = require("readline-sync");
const func = ["add", "sub", "mul", "div"]
const numb1 = readlineSync.question("Please enter your first number ")
const numb2 = readlineSync.question("Please enter your second number ")
const op = readlineSync.keyInSelect(func, "Please enter your operation to perform ")


function quickMaffs () {
    if(op == 0) {
        let total = +numb1 + +numb2
        console.log(total)
    } else if ( op == 1) {
        let total = +numb1 - +numb2
        console.log("The total is: " + total)        
    } else if (op == 2) {
        let total = +numb1 * +numb2
        console.log(total)
    } else if (op == 3) {
        let total = +numb1 / +numb2
        console.log(total)
    }
}
quickMaffs()

