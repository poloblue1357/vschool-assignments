const readlineSync = require("readline-sync");
let isAlive = true;
let hasWon = false;

const witch = new EnemyInfo("Witch", 100, 15)
const sorcerer = new EnemyInfo("Sorcerer", 120, 18)
const ogre = new EnemyInfo("Ogre", 200, 30)
function EnemyInfo(name, hp, ad) {
    this.name = name;
    this.health = hp;
    this.attack = ad;
}
let items = ["sword", "bow", "axe", "spear"]
let inventory = []
const enemies = [ogre, sorcerer, witch]
const hero = new Hero("Hero", 400, 10)
function Hero(name, hp, ad) {
    
    this.name = name;
    this.health = hp;
    this.attack = ad;
}

console.log("Hello! Welcome to The Game. May the odds be ever in your favor.")
const name = readlineSync.question("What's your name? ")
console.log(`Nice to meet you ${name}, your journey will now begin.`)

while (isAlive && !hasWon) {
    let choice = readlineSync.keyIn("Do you want to (w) walk, (i) check inventory, (p) print info, or (q) quit?", {limit:'wiqp'})
    if (choice === "w"){
        walk() 
    } else if (choice === "i") {
        checkInventory()
    } else if (choice === "p"){
        printInfo()
    } else {
        isAlive = false
        console.log("You quit.")
    }
 
function walk() {
    let random = Math.floor(Math.random()*4)
    if (random === 0) {
        enemyEncounter()
    } else {
        console.log("You continue walking safely.")
    }
}
function enemyEncounter() {
    let setEnemy = randomEnemy()
    let fightorrun = readlineSync.keyIn(`You encountered a ${setEnemy.name}. Would you like you (f) fight, (r) run, (q) or quit?`, {limit: `frq`}) 
    if (fightorrun === "f") {
        fight(setEnemy)
    } else if (fightorrun === "r") {
        run(setEnemy)
    } else if (fightorrun === "q") {
        isAlive = false
        console.log("You quit.")
    }
}

function randomEnemy() {
    let rEnemy = Math.floor(Math.random()* enemies.length)
    return enemies[rEnemy]

}
function fight(setEnemy) {
    while (setEnemy.health > 0 && hero.health > 0) {
        let attackpower = Math.floor(Math.random() * 10) + 90
        setEnemy.health -= attackpower
        console.log(`The enemy now has ${setEnemy.health} hp!`)
        let enemypower = Math.floor(Math.random() *10) + 20
        hero.health -= enemypower
        console.log(`The Hero now has ${hero.health} hp!`)
    
        if (hero.health <= 0) {
            isAlive = false
            console.log("You're dead.")
        } else if (setEnemy.health <= 0) {
            hero.health += 20 
            let randomItemnums = Math.floor(Math.random()*items.length)
            let randomItem = items[randomItemnums]
            inventory.push(randomItem)
            console.log(`You killed ${setEnemy.name} and gained ${randomItem}.`)
            enemies.splice(enemies.indexOf(setEnemy), 1)
            youWon()
            
        }
    }
}
function youWon() {
    if (enemies == undefined || enemies.length == 0) {
    console.log("You Won!")
    hasWon = true
    } else {
        console.log("Continue journey..")
    }
}
function run(setEnemy) {
    let runaway = Math.random()
    if (runaway >= 0.5) {
        console.log("You ran away safely.")
    } else {
        console.log("You can't run. You will now fight!")
        fight(setEnemy)
    }
}

function checkInventory() {
    console.log(inventory)
}
function printInfo() {
    console.log(name, hero.health, inventory)
}
}
