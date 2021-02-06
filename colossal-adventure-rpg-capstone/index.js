/*The year is 1985. Your job is to build a text - based(console) RPG game.

The point of this exercise is to better master Javascript functions, loops, conditionals, and some data types.

Project Requirements:
Console must greet player with a fun message
Console must ask for the player's name and store it
Walking:
    The console will ask the user to enter a "w" to walk
Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared(A 1 / 3 or 1 / 4 chance of being attacked)
If a wild enemy appears:
The enemy is random(can be chosen out of a minimum of 3 different enemy names)
The user can decide to attack or run
If attacking, a random amount of damage will be delt between a min and max
If running, there will be a 50 % chance of escaping
After the player attacks or runs the enemy attacks back for a random damage amount
If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory.After this, the player will continue walking.Use a while loop to control this flow.
If the enemy kills the player the console prints a cool death message and the game ends
Inventory
When the player kills enemies, they are awarded with items
If the user enters 'Print' or 'p' in the console, the console will print the players name, HP, and each item in their inventory
*/

/* 

possible inventory of errors:  infinite loop, missing curly brace, undefined, null, NaN, cannot read property, uncaught syntax error

possible enemies:  Twitter, Slack channel, Stack OverFlow, w3schools, colleagues/developer friends
*/


const readline = require("readline-sync");

const name = readline.question("What is your name? ");

const characterName = readline.question("Welcome to My Buggy Adventure, ".concat(name).concat("! Now, you need a name for the game.  Type in your choice for your game character's name: "))

const startGame = readline.question("Great, ".concat(characterName + "! Are you ready to play?  Type Y or N. "))

if (startGame === "Y") {
    console.log("Welcome to My Buggy Adventure, where you're the bug and you need to survive, so that you can keep messing with the program (and the programmer!)!!!")
    walk();
} else {
    console.log("When you're ready to start, please type Y")
}


const gameOver = false;
const options = ["Walk", "Attack", "Run", "End Game"]
const enemies = ["Google search", "delete & start over", "console.log", "breakpoint", "sources tab", "Slack channel", "developer friend"]

function walk() {
    const walking = readline.question("Please type W, to walk through the glitchy program. ");
    if (walking === "W") {
        console.log("now we're walking!")
    }
}



//when player selects "W"
//random enemy -- random algorithm runs to determine IF an enemy appears
//if enemy appears, which enemy is random
//user has choice to attack or run
//if attack: random amount of damage between a min & max
//if run:  50% chance of escaping
//then have 1/3 or 1/4 chance of being attacked
//After the player attacks or runs the enemy attacks back for a random damage amount
//If the player kills the enemy you can give the Player some HP and a special item 
//that is stored in the inventory.After this, the player will continue walking.Use a while loop to control this flow.
//If the enemy kills the player the console prints a cool death message and the game ends     








/*
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
