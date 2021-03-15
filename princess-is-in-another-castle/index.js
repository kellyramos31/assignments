class Player {
    constructor(name, totalCoins, status, hasStar, gameActive) {
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
        this.gameActive = gameActive;
    }

    gotHit() {
        if (this.status === "Powered Up") {
            this.status = "Big";
            return this.status

        } else if (this.status === "Big") {
            this.status = "Small"
            return this.status
        } else if (this.status === "Small") {
            this.status = "Dead"
            this.gameActive = "false"
            gameOver = true;
            return this.status
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
            this.status = "Powered Up"
            return this.status;
        }

    }

    addCoin() {
        this.totalCoins += 1;
        return this.totalCoins
    }

    randomStatus() {
        while (this.status != "Dead") {
            const statusNumber = Math.floor(Math.random() * 3)
            console.log(statusNumber)
            if (statusNumber === 0) {
                this.gotHit()
                this.print()
            } else if (statusNumber === 1) {
                this.gotPowerUp()
                this.print
            } else if (statusNumber === 2) {
                this.addCoin()
                this.print()
            }
        }
    }

    startTimer() {
        const intervalId = setInterval(this.randomStatus, 1000);
        if (gameOver = true || this.status === "Dead") {
            clearInterval(intervalId)
        }
    }

    print() {
        console.log(`Name:  ${this.name}`)
        console.log(`Status: ${this.status}`)
        console.log(`Total Coins:  ${this.totalCoins}`)
        console.log(`Has Star:  ${this.hasStar}`)
    }

}


let gameOver = false;
whichName();


function whichName() {
    const namePick = (Math.floor(Math.random() * 2));
    console.log(namePick)
    if (namePick === 0) {
        const namePicked = new Player("Mario", 0, "Powered Up", false, true);
        console.log(namePicked)
        namePicked.startTimer()
        namePicked.randomStatus()
    } else if (namePick === 1) {
        const namePicked = new Player("Luigi", 0, "Powered Up", false, true)
        console.log(namePicked)
        namePicked.startTimer()
        namePicked.randomStatus()
    }
}

