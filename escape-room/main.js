/*//INTRO TO PROGRAMMING
const readline = require("readline-sync");

//GREET THE PLAYER
const name = readline.question("What is your name? ");
console.log("Thank you " + name + "!");
console.log("Let's Play Escape Room!")

//SET UP GLOBAL VARIABLES
let gameOver = false;
let options = ["Put hand in hole", "Find the key", "Open the door"]

//GAME LOOP
while (!gameOver) {
    const userAnswer = readline.keyInSelect(options, "What would you like to do? ");

    //They put their hand in the hole
    if (userAnswer === 0) {
        console.log("UH, OH! Why did you put your hand in the hole? Now, you are dead. No bueno. Game over.")
        gameOver = true;

        //They chose to find the key
    } else if (userAnswer === 1) {
        var lastUserAnswer = userAnswer;
        console.log("Great work!  Now that you've found the key, what do you think you should do next?")

        //They are trying to open the door; BUT need to have found key FIRST. (game continues)
    } else if (userAnswer === 2 && lastUserAnswer !== 1) {
        console.log("Sorry.  You are still in the escape room.  What do you need to open the door?")

        //Try to open door AND found the key first.  GAME over & got out of escape room!
    } else if (userAnswer === 2 && lastUserAnswer === 1) {
        console.log("Congratulations!  You found the key and opened the door!  You are free!")
        gameOver = true;

        //Trying to Cancel out of game; sorry, can't cancel out!
    } else if (userAnswer === -1) {
        console.log("There is no way to cancel out of an escape room.  Please make another choice!");
    }
}
*/

var readlineSync = require('readline-sync')
console.log('Welcome to the Colossal adventure, the 1st of the Jewels of Darkness. n/To win this game, you need to escape from here You will be facing alot of enemies and you need to decide to fight or to run. Are you ready to start? Here you go.You are standing at the end of a Road before 2 small brick building. Around you is a forest. Small Stream flows out of the building and down a gully.In the distance there is a tall gleaming white tower. What are you going to do next?')
// variables
const randomNumber = function (max, min) {
    return Math.floor((Math.random() * max) + min)
}
// player object
let playerInfo = {
    name: readlineSync.question('what is your name?'),
    hp: 100,
    inventory: [],
    maxAttack: randomNumber(9, 1),
    minAttack: randomNumber(10, 2)
}
// enemy function
let enemyInfo = function (number, name) {
    return {
        id: number,
        name: name,
        hp: 20,
        inventory: [],
        maxAttack: randomNumber(10, 1),
        minAttack: randomNumber(8, 1)
    }
}
let damage = randomNumber(playerInfo.maxAttack, playerInfo.minAttack)
let enemyList = [enemyInfo(0, "dragon"), enemyInfo(1, "drawf"), enemyInfo(2, "snake")]

let items = ["a gold coin", " an amazing feather", " a beautiful coat"]

console.log(Math.floor(Math.random() * 100))
// main while loop:
while (enemyList.length > 0 && playerInfo.hp > 0) {
    const playerChoice = readlineSync.keyIn('press w to walk , press p to see inventory', { limit: ['w', 'p'] })
    if (playerChoice === "p") {
        console.log(playerInfo)
    } else if (playerChoice === "w") {
        if (playerInfo.hp > 0) {
            const yourEnemy = enemyList[randomNumber(enemyList.length, 0)]
            // console.log(yourEnemy,'enemy')
            if (Math.floor(Math.random() * 100 < 33)) {
                // attack
                const runOrAttack = readlineSync.keyIn("you have encountered" + " " + yourEnemy.name + "!" + " " + "run or attack [a/r]?", { limit: ['a', 'r'] })
                console.log(runOrAttack)
                if (runOrAttack === 'a')
                // damage
                {
                    let damage = randomNumber(playerInfo.maxAttack, playerInfo.minAttack)
                    yourEnemy.hp = yourEnemy.hp - damage
                    playerInfo.hp = playerInfo.hp - damage
                    console.log(yourEnemy.name + " " + "has" + " " + yourEnemy.hp + " hp remaining!" + "And you have " + " " + playerInfo.hp + "hp remaining!!")
                }
                // run  :50% escape or failed to run
                if (runOrAttack === 'r') {
                    if (Math.floor(Math.random() * 100) < 50) {
                        console.log("Congratualtions!You have escaped !!")
                        break
                    } else {
                        console.log("failed to run")
                        playerInfo.hp = playerInfo.hp - damage
                        console.log(playerInfo.name + " " + "has received" + " " + damage + " " + "hp damage(s) from" + " " + yourEnemy.name)
                    }
                }
                if (yourEnemy.hp <= 0) {
                    enemyList = enemyList.filter(function (enemy) {
                        return enemy.id !== yourEnemy.id
                    })
                    playerInfo.hp = playerInfo.hp + 50
                    //let items = ["a gold coin", " an amazing feather", " a beautiful coat"]
                    let award = items.shift()
                    playerInfo.inventory.push(award)
                    console.log(yourEnemy.name + " " + "has died and your are awarded" + " " + award + " " + "and 50 hp!")


                    //if (enemyList.length < 0) {
                    //    console.log("you have killed all enemies and you won the game!")
                    //    break
                    //}
                    //else if (playerInfo.hp < 0) {
                    //    console.log("You have used up all your hp and you are dead!!")
                    //    break
                    //}

                }

            }

        }
    }
}