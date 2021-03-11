
let gameActive = true;

class Player {
    constructor(name, totalCoins, status, hasStar) {
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = false;
    }
    setName(namePicked) {
        if (namePicked === "Mario") {
            Player.name = "Mario";

        } else if (namePicked === "Luigi") {
            Player.name = "Luigi"
        }
    }
}

/*
 gotHit() {
    const statusNumber = Math.floor(Math.random() * 2)   //Random number between 0 & 2 (so can be 0, 1 or 2)
    if(statusNumber === 0) {
        gotHit()
    } else if (statusNumber === 1) {
        gotPowerUp()
    } else if (statusNumber === 2){
        addCoin()
    }
 }

 gotPowerUp() {

 }

 addCoin() {

 }
 print() {

 }
}

*/

const name = Math.floor(Math.random() * 2)   //Random number between 0 & 1 (so can be 0 or 1)
if (name === 0) {
    namePicked = "Mario"
    namePicked = new Player(namePicked, 0, "")
    setName(namePicked)
} else if (name === 1) {
    namePicked = "Luigi"
    setName(namePicked)
}

console.log(Player.name)







