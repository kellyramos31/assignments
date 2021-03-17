class Player {
    constructor(name, totalCoins, status, hasStar, gameActive) {
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
        this.gameActive = gameActive;
    }

    setName(namePicked) {
        this.name
    }

    gotHit() {
        if (this.status === "Powered Up") {
            this.status = "Big";
            this.gameActive = true;
            return this.status
        } else if (this.status === "Big") {
            this.status = "Small";
            this.gameActive = true;
            return this.status
        } else if (this.status === "Small") {
            this.status = "Dead"
            this.gameActive = false;
            gameOver = true;
            clearInterval(intervalId)
            return this.status;
        }
    }

    gotPowerUp() {
        if (this.status === "Powered Up") {
            this.hasStar = true;
            return this.hasStar;
        } else if (this.status === "Small") {
            this.status = "Big";
            return this.status;
        } else if (this.status === "Big") {
            this.status = "Powered Up";
            return this.status;
        }

    }

    addCoin() {
        this.totalCoins += 1;
        return this.totalCoins
    }

    randomStatus() {
        //while (this.status != "Dead") {
        //if (this.status === "Dead" && this.gameActive === false) {
        //    clearInterval(intervalId)
        //    gameOver = true;
        //} else {
        const statusNumber = Math.floor(Math.random() * 3)
        console.log(statusNumber)
        if (statusNumber === 0) {
            this.gotHit()
            this.print()
        } else if (statusNumber === 1) {
            this.gotPowerUp()
            this.print()
        } else if (statusNumber === 2) {
            this.addCoin()
            this.print()
        }
    }
    //}
    //       }

    //startTimer() {
    //const intervalId = setInterval(() => this.randomStatus(), 1000);
    //if (this.gameActive = false && this.status === "Dead") {
    //    clearInterval(intervalId)
    //}
    //}

    //endTimer() {
    //    clearInterval(this.intervalId);
    //    gameOver = true;
    //}

    print() {
        console.log(`Name:  ${this.name}`)
        console.log(`Status: ${this.status}`)
        console.log(`Total Coins:  ${this.totalCoins}`)
        console.log(`Has Star:  ${this.hasStar}`)
    }

}

let gameOver = false;


//whichName();

const nameNumber = (Math.floor(Math.random() * 2));
console.log(nameNumber)
if (nameNumber === 0) {
    const namePicked = new Player("Mario", 0, "Powered Up", false, true);
    namePicked.setName()
    console.log(namePicked)
    //namePicked.startTimer()
    //namePicked.randomStatus()
} else if (nameNumber === 1) {
    const namePicked = new Player("Luigi", 0, "Powered Up", false, true)
    namePicked.setName()
    console.log(namePicked)

    //namePicked.startTimer()
    //namePicked.randomStatus()
}

const intervalId = setInterval(() => namePicked.randomStatus(), 1000);








/*
function startGame() {
    if (namePick === 0) {
        const namePicked = new Player("Mario", 0, "Powered Up", false, true);
        console.log(namePicked)
        namePicked.setName()
        //namePicked.startTimer()
        //namePicked.randomStatus()
    } else if (namePick === 1) {
        const namePicked = new Player("Luigi", 0, "Powered Up", false, true)
        console.log(namePicked)
        namePicked.setName()
        //namePicked.startTimer()
        //namePicked.randomStatus()
    }
}
*/

//}


