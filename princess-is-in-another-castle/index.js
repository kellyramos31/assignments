
class Player {
    constructor(name, totalCoins, status, hasStar, gameActive) {
        this.name = name;
        this.totalCoins = 0;
        this.status = " ";
        this.hasStar = false;
        this.gameActive = true;
    }
    setName() {

    }
    gotHit() {
        if (this.status === "Powered Up") {
            this.status === "Big";
        } else if (this.status === "Big") {
            this.status === "Small"
        } else if (this.status === "Small") {
            this.status === "Dead"
        }
        print();
    }
    gotPowerUp() {
        if (this.status === "Powered Up") {
            this.hasStar = true;
        } else if (this.status === "Small") {
            this.status === "Big"
        } else if (this.status === "Big") {
            this.status === "Powered Up"
        }
        print()
    }
    addCoin() {
        this.totalCoins += 1;
        print()
    }
    print() {
        console.log(this)
    }

}


const intervalId = setInterval(randomNumGen, 1000)
function stopGame() {
    if (gameActive = false) {
        clearInterval(intervalId)
    }
}

//THIS GETS CALLED INSIDE SET INTERVAL FUNCTION
function randomNumGen() {
    const name = Math.floor(Math.random() * 2)   //Random number between 0 & 1 (so can be 0 or 1)
    if (name === 0) {
        const namePicked = new Player("Mario", 0, "Powered Up", false, true);
        console.log(namePicked)
        return namePicked;

    } else if (name === 1) {
        const namePicked = new Player("Luigi", 0, "Powered Up", false, true);
        console.log(namePicked)
        return namePicked;
    }

    const statusNumber = Math.floor(Math.random() * 3)   //Random number between 0 & 2 (so can be 0, 1 or 2)
    if (statusNumber === 0) {
        gotHit()
    } else if (statusNumber === 1) {
        gotPowerUp()
    } else if (statusNumber === 2) {
        addCoin()
    } else if (Player.status === "Dead") {
        Player.gameActive = false
        stopGame()
    }
}

setInterval(randomNumGen, 1000)









