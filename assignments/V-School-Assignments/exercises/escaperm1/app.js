const readline = require("readline-sync");
let isAlive = true
let hasKey = false

const options = ["Put hand in hole", "Find the key", "Open the door"]
const choice = readline.keyInSelect(options, "Welcome to the game. What would you like to do? ")
const a = ("You need the key.")
while (isAlive === true && hasKey === false) {
    if (options[choice] === "Put hand in hole") {
        console.log("You're dead!")
        isAlive = false
    } else if (options[choice] === "Find the key") {
        console.log("You found the key! Now what will you do?")
        key()
    } else if(options[choice] === "Open the door") {
        console.log(a)
    }
}
function key() {
    let hasKey = true
while(isAlive === true && hasKey === true) {
    if (options[choice] === "Open the door" && hasKey === true) {
            console.log("You're free! You win!")
            isAlive = false 
    }
}
}



