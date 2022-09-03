let status = ["dead", "small", "big", "powered up"]
let totalCoins = 0

class Player {
    constructor(charName, totalCoins, status, hasStar = false, gameActive = true) {
        this.name = charName
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar 
        this.gameActive = gameActive
    } 
    setName(namePicked ) {
        this.name  = "mario"
      }
    gotHit() {
        if(this.hasStar === true) {
            this.hasStar === false
            this.status = "powered up"
            console.log("Your star protected you!")
        } else if(this.status == "powered up") {
            this.status = "big"
        } else if(this.status == "big") {
            this.status = "small"
        } else if(this.status == "small") {
            this.status = "dead"
            this.gameActive = false
        }
    }
    gotPowerup() {
        if(this.status == "small") {
            this.status = "big"
        } else if(this.status == "big") {
            this.status = "powered up"
        } else if(this.status == "powered up") {
            this.hasStar = true
        }
    }
    addCoin() {
        this.totalCoins++
    }
    print() {
        randomRange()
        console.log("Name: " + this.name, ", Coins: " + this.totalCoins, ", Status: " + this.status, ", Has star: " + this.hasStar)
    }
}
function randomRange() {
    let randomNumber = Math.floor(Math.random() * 3)
    console.log(randomNumber)
    if(randomNumber === 0) {
        mario.gotHit()
    } else if(randomNumber === 1) {
        mario.gotPowerup()
    } else if(randomNumber === 2) {
        mario.addCoin()
    }
}
setInterval(() => {
    if(mario.gameActive === false) {
        clearInterval(() => {
            console.log("Game over.")
        }, 1);
    } else {
        mario.print()
    }
}, 1000);

const mario = new Player("Mario", 0, "small")
mario.print()