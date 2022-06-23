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
/*
const start = require("readline-sync");
var userName = start.question("What is your name? ");

var player = {
    name: userName,
    obtainKey: false,
    isAlive: true
}

let choice = ["Open the door.", "Reach into the wall.", "Search for the key."];

function youDied() {
    return player.isAlive = false
}
function hasKey() {
    return player.obtainKey = true
}

//var decision = require("readline-sync"),

//choice[0] = ;
//choice[1] = ;
//choice[2] = ;

console.log("You awaken in a cold, dark cell, " + userName + ". There is a single door leading out of the cell, and a hole in the wall nearby.");

const decision = readline.keyInSelect(choice, "What will you do?");
while (player.isAlive === true) {
    if (decision === 1) {
        console.log("The door is locked.")
    }
    if (decision === 2) {
        console.log("Some fanged creature bites you. You die instantly.")
        youDied()
    }
    if (decision === 3) {
        console.log("You find the key under some rubble.")
        hasKey()
    }
    if (decision === 1 && player.hasKey === true) {
        console.log("The door opens and you escape the cell.")
    }
}
*/



// const readline = require("readline-sync");
// const playerName = readline.question("What is your name? ");
// console.log("Welcome " + playerName + " You find yourself trapped in a locked room. It is your job to find a way to escape. When you are ready to play type one of these commands. put hand in hole, find key, or open the door")

// var person = {
//     name: playerName,
//     isAlive: true,
//     hasKey: false
// }
// var count = 0

// while (person.isALive) {
//     const play = readline.question("Pick first action")
//     if (play === "put hand in hole") {
//         isAlive = false,
//             console.log(playerName + " has died")
//     }
//     else if (play === "find key") {
//         if (count < 6) {
//             console.log("key not found. keep looking")
//             count++
//         }
//         else {
//             console.log(playerName + " has found the key")
//             hasKey = true
//         }
//     }
//     else if (play === "open door") {
//         if (hasKey = true) {
//             console.log(playerName + " has used the key to escape the room. Congradulations")
//         }
//         else {
//             console.log("need key to open door")
//         }
//     }
// }

