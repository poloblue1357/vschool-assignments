const readline = require("readline-sync")

choices = ["Walk", "Search for key", "Open the door", "Put your hand in the hole"]

let a = "You need the key."
let alive = true;
let key = false;

while (alive) {
    index = readline.keyInSelect(choices, "Welcome to the game. Find the key to escape. What would you like to do? ")
    if(choices[index] === "Walk") {
        console.log("It's a nice day for a stroll!")
        console.log(a)
    } else if(choices[index] === "Search for key") {
        console.log("You found the key. Now what will you do?")
        hasKey() 
    } else if (choices[index] === "Open the door" && key == false) {
        console.log(a)
    } else if (choices[index] === "Put your hand in the hole") {
        console.log("You ded :(")
        alive = false
    } else if (choices[index] == "Open the door" && key == true) {
        console.log("You're free! You WIN!")
        alive = false
    }
}
function hasKey() {
    key = true
}
// while (alive == true && key == true) {
//     if(index[choices] == "Open the door" && key == true) {
//         console.log("You're free! You WIN!")
//         alive = false
//     }
// }

