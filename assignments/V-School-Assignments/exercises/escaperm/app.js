const readlineSync = require('readline-sync')
const option = ["Put hand in hole", "Find the key", "Open the door"]
let isAlive = true
let hasKey = false

const index = readlineSync.keyInSelect(option,("Welcome to the game. Here are your options: "))
const b = readlineSync.keyInSelect(option, ("Good call. Now what will you do? "))
const c = readlineSync.keyInSelect(option, ("You're free now! "))
while(isAlive === true && hasKey === false){
     if (option[index] === 'Put hand in hole'){
       console.log("You're Dead!")
       isAlive = false
       
    } else if (option[index] === "Find the key") {
        b
        hasKey = true

    } else if (option[index] === "Open the door") {
        console.log(index)

    } else if (option[index] === "Open the door" && hasKey === true) {
        console.log("You Won!")
        c
    }

}
   
