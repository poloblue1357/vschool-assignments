const readline = require("readline-sync")

var num1 = readline.question("Pleae enter your first number: ")

var num2 = readline.question("Please enter your second number: ")

operations = ["Add", "Subtract", "Multiply", "Divide" ]
index = readline.keyInSelect(operations, "Which function do you want? ")
if( index == 0) {
      let addition = +num1 + +num2
    console.log("The result is: " + addition )
} else if (index == 1) {
    let subtraction = +num1 - +num2
    console.log("The result is: " + subtraction )
} else if (index == 2) {
    let multiply = +num1 * +num2
    console.log("The result is:" + multiply )
} else if (index == 3) {
    let divide = +num1 / +num2
    console.log("The result is: " + divide )
}
