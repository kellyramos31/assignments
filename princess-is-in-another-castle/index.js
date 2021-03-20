class Player {
    constructor(name, totalCoins, status, hasStar, gameActive) {
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
        this.gameActive = gameActive;
    }

    setName() {
        this.name
        this.randomStatus()
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
            clearInterval(intervalId);
            gameOver = true;
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

    print() {
        console.log(`Name:  ${this.name}`)
        console.log(`Status: ${this.status}`)
        console.log(`Total Coins:  ${this.totalCoins}`)
        console.log(`Has Star:  ${this.hasStar}`)
    }

}


let gameOver = false;

const namePicked = whichName();

function whichName() {
    const nameNumber = (Math.floor(Math.random() * 2));
    //console.log(nameNumber)
    if (nameNumber === 0) {
        const name = new Player("Mario", 0, "Powered Up", false, true);
        name.setName()
        //console.log(name)
        return name

    } else if (nameNumber === 1) {
        const name = new Player("Luigi", 0, "Powered Up", false, true)
        name.setName()
        //console.log(name)
        return name
    }
}

//console.log(namePicked)

const intervalId = setInterval(() => namePicked.randomStatus(), 1000);