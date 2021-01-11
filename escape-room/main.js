
//INTRO TO PROGRAMMING
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


