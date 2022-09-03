class Player {
    constructor(name, totalCoins, status) {
        this.Name = name;
        this.TotalCoins = totalCoins;
        this.Status = status
        } 

setName(namePicked) {
        console.log("Mario")
    }
 gotHit() {
        
    }
 gotPowerUp() {

    }
 addCoin() {
        totalCoins++
    }
 print() {
        console.log(name, totalCoins, status, star-properties)
    }
 
}
setInterval(() => {
    let number = Math.floor(Math.random() * 3)
        if(number == 0) {
            mario.gotHit()
        } else if(number == 1) {
            mario.gotPowerUp()
        } else if(number == 2) {
            mario.addCoin()
        }
    }, 1000);
    
const randomRange = windows.setInterval(1000)
hasStar = false;
gameActive = true;  
const status = ["Powered Up", "Big", "Small", "Dead"];
const Mario = new Player("Mario", 0, status[0] ) 
console.log(Mario)
 
