/*The year is 1985. Your job is to build a text - based(console) RPG game.

***The point of this exercise is to better master Javascript functions, loops, conditionals, and some data types.***

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

possible inventory of errors:  

possible enemies:  Twitter, Slack channel, Stack OverFlow, w3schools, colleagues/developer friends
*/


const readline = require("readline-sync");

const name = readline.question("What is your name? ");

let gameOver = false;

const options = ["Walk"]

const errorChoicesArr = ["infinite loop", "missing curly brace", "undefined", "NaN", "cannot read property of", "uncaught syntax error"]

const enemyForYou = ["with a GOOGLE SEARCH", "by DELETING & STARTING OVER", "with a CONSOLE.LOG", "with a DEV TOOLS BREAKPOINT", "with the SOURCES TAB", "by sending a SLACK CHANNEL MESSAGE", "by calling a DEVELOPER FRIEND"]

let inventoryOfErrorsArr = [];

//PLAYER TOTALS OBJECT

playerTotals = {
    name: name,
    healthPoints: 100,
    inventory: inventoryOfErrorsArr
}



const characterName = readline.question(`Welcome to MY BUGGY ADVENTURE, ${name}! Now, you need a game name.  Type in your choice for your game character's name: `);

const startGame = readline.question(`Great, ${characterName}! Let's Play!  Type Y if you're ready to go:  `);



//const userAnswer = readline.keyIn('Enter W (to Walk) or X (to Cancel)', { limit: 'wx' }); `What would you like to do, ${characterName}?`;
//example:  direction = readlineSync.keyIn('Left or Right? ', { limit: 'lr' }); // 'l' or 'r'


if (startGame === "Y" || startGame === "y") {
    console.log("Welcome to MY BUGGY ADVENTURE, where YOU are the BUG!  And you need to survive, so that you can keep messing with the program (and the programmer!)!!!")
    while (!gameOver) {
        walk();
    }
}


function walk() {
    const walking = readline.question(`Please enter W (to WALK) or X (to end game) `, { trueValue: ["w", "W"], falseValue: ["x", "X"] });
    if (walking === true) {                                                      //when player selects "W"
        console.log(`Now we're stepping through the code, ${characterName}!`)
        maybeEnemy();
    } else if (walking === false) {
        gameOver == true;
        console.log(`You have cancelled out of the game`)
    }
}


function maybeEnemy() {                                 //random enemy -- random algorithm runs to determine IF an enemy appears
    let enemy = Math.floor(Math.random() * 5)          //returns random number between 0 and 4 (right now 50% chance of attack; reduce to 33% or 25%)
    if (enemy % 2 === 0) {
        console.log(enemy + " UH OH!  You are under ATTACK from the evil programmer!")
        uhOhEnemy();
        attackOrRun();
    } else {
        console.log(`All is WELL, ${characterName}`)
        console.log(`GREAT JOB!  You're still causing havoc, YOU CRAZY BUG! `)
        console.log(`Let's keep WALKING through the program!`);
        walk();
    }
}

function uhOhEnemy() {
    let uhOh = Math.floor(Math.random() * 7);                    //if enemy appears, which enemy appears is random
    console.log(uhOh)
    let heresTheEnemy = enemyForYou[uhOh];
    console.log(`And that sinister software engineer is going to ATTACK you ${heresTheEnemy}!`)
    attackOrRun();
}

function attackOrRun() {                                          //user has choice to attack or run
    const attackRunAnswer = readline.question(`Now you have a choice.  Enter A (to ATTACK) or R (to RUN) `, { trueValue: ["a", "A"], falseValue: ["r", "R"] });
    if (attackRunAnswer === true) {                                 //true means ATTACK
        console.log("You are on the attack! Keep it BUGGY!");
        let damage = Math.floor(Math.random() * 10) + 1;            //if attack: random amount of damage between a min(1) & max(10)
        console.log(damage);
        playerTotals.healthPoints -= damage;
        console.log(playerTotals.healthPoints);
        console.log(`Your buggy self survived, but you sustained some damage and lost ${damage} healthpoint(s) in that last battle:(`)
        console.log(`Now your total healthpoints are at ${playerTotals.healthPoints}.  Be careful out there!`);
        enemyAttacksBack();

    } else if (attackRunAnswer === false) {                                     //false means RUN
        console.log("You are on the run! But will you escape undetected?")
        let runFastEnough = Math.floor(Math.random() * 2);                          //if run:  50% chance of escaping
        if (runFastEnough === 0) {
            console.log(`Good thing you are a fast runner, ${characterName}!  You are safe FOR NOW.`);
            enemyAttacksBack();

        } else if (runFastEnough === 1) {
            console.log(`Well, ${characterName}, you can't outrun this wiley programmer!  YOU'VE BEEN SQUASHED!  Bye, bye!`);
            gameOver = true;
            console.log(gameOver)
        }
    }
}

function enemyAttacksBack() {                                         //After the player attacks or runs the enemy attacks back for a random damage amount
    let fightsBackDamage = Math.floor(Math.random() * 10) + 1;
    console.log(fightsBackDamage);
    if (fightsBackDamage === 3 || fightsBackDamage === 9) {  //If the player kills the enemy -- give the Player some HP and a special item that is stored in the inventory.   
        console.log(`CONGRATS!! You're one NASTY BUG!  You are triumphant over and safe from the DASTARDLY PROGRAMMER (for now!)!`);
        let positiveHealthPoints = Math.floor(Math.random() * 10) + 1         //awards random number of health points for fighting off enemy
        playerTotals.healthPoints += positiveHealthPoints;
        let inventoryItem = Math.floor(Math.random() * 7);              //randomly select inventory item from errors array
        let newErrorReward = inventoryOfErrorsArr.push(errorChoicesArr[inventoryItem]);
        playersTotal.inventoryOfErrorsArr += newErrorReward;
        console.log(`Bravo, ${characterName}!`);
        console.log(`Your reward is ${positiveHealthPoints} health point(s)`)
        console.log(`AND a NEW ERROR has been added to your inventory: ${newErrorReward}! ROCK ON, BUG!`);

    } else {
        playerTotals.healthPoints -= fightsBackDamage;
        console.log(playerTotals.healthPoints)
        console.log(`HOLD ON!  That fierce developer is not going to give up!  WATCH OUT!!`)
        console.log(`Whew, ${characterName}, that was an intense battle!`)
        console.log(`You sustained ${fightsBackDamage} point(s) worth of damage in that brawl and are a little bit weaker.`)
        console.log(`Your new health points total is ${playerTotals.healthPoints}.  STAY VIGILANT!`);
    }
}



//After this, the player will continue walking.  Use a while loop to control this flow.
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
