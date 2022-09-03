const readline = require("readline-sync")

console.log("Welcome to the game. May the odds be ever in your favor!")
const userName = readline.question("May I have your name? ")
console.log(`Good to meet you ${userName}!`);

let isAlive = true;
let hasWon = false;

const troll = new Enemy("Troll", 95, 15, "Club")
const goblin = new Enemy("Goblin", 80, 18, "Magic")
const witch = new Enemy("Witch", 90, 30, "Wand")
const ghost = new Enemy("Ghost", 100, 23, "Dagger")

function Enemy(name, hp, attackDamage, weapon) {
    this.name = name;
    this.health = hp;
    this.attack = attackDamage;
    this.weapon = weapon;
}

const enemies = [troll, goblin, witch, ghost]
const weapons = ["Club", "Magic", "Wand", "Dagger"]
const inventory = []

const hero = new Hero(userName, 400, 20)
function Hero(name, hp, attackDamage) {
    this.name = name;
    this.health = hp;
    this.attack = attackDamage;
}

while(isAlive && !hasWon ) {
    let choose = readline.keyIn( "Do you want to (w) walk, (p) print inventory and status, or (q) quit? ", {limit: "wpq"} )
    if(choose === "w") {
        walk()
    } else if(choose === "p") {
        status()
    } else if(choose === "q") {
        console.log(`Until next time!`)
        isAlive = false
    }
}
function walk() {
    let num = randomNumber(0, 3)
    if(num === 1) {
        let indexEnemy = randomEnemy()
        console.log(`Oh no! You encountered a ${indexEnemy.name}.`)
        enemyEncounter()
    } else {
        console.log("You continue walking safely.")
    }   
}
function randomEnemy() {
    let rEnemy = Math.floor(Math.random() * enemies.length)
    return enemies[rEnemy]
}
function randomNumber(min, max) {
    return Math.floor(Math.random() * 4)
}
function enemyEncounter() {
    let indexEnemy = randomEnemy()
    let decision = readline.keyIn(`Do you want to (f) fight, (r) run, or q (quit)? `, {limit: "frq"})
    if(decision === "f") {
        fight(indexEnemy)
    } else if(decision === "r") {
        run(indexEnemy)
    } else if(decision === "q") {
        isAlive = false;
        console.log("Quitting is for cowards.")
    }
} 
function fight(indexEnemy) {
    while(indexEnemy.health > 0 && hero.health > 0) {
        let attackPower = Math.floor(Math.random() * 10) + 40
        indexEnemy.health -= attackPower
        console.log(`The enemy now has ${indexEnemy.health} hp!`)
        let enemyPower = Math.floor(Math.random() * 10) + 20
        hero.health -= enemyPower
        console.log(`${userName} now has ${hero.health} hp!`)

        if(hero.health <= 0) {
            isAlive = false
            console.log("You're dead.")
        } else if(indexEnemy.health <= 0) {
            hero.health += 20
            let randomItemNums = Math.floor(Math.random() * weapons.length)
            let randomItem = weapons[randomItemNums]
            inventory.push(randomItem)
            console.log(`You killed the ${indexEnemy.name} and gained ${randomItem}`)
            enemies.splice(enemies.indexOf(indexEnemy), 1)
            youWon()
        }
    }
}
function youWon() {
    if(enemies == undefined || enemies.length == 0) {
        console.log("You won!")
        hasWon = true
    } else {
        console.log("Continue your journey....")
    }
}
function run(indexEnemy) {
    let getaway = Math.random()
        if(getaway >= 0.5) {
            console.log("You got away!")
        } else {
            console.log("You can't escape! You will now fight.")
            fight(indexEnemy)
        }
}
function status() {
    console.log(userName, hero.health, inventory)
}



