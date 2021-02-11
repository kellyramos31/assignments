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


//VARIABLES 
const readline = require("readline-sync");

const name = readline.question("\nGreetings!  What is your name? ");

let gameOver = false;

const errorChoicesArr = ["INFINITE LOOP", "MISSING CURLY BRACE", "IMPOSTER SYNDROME", "UNDEFINED", "NaN", "TYPE ERROR", "SYNTAX ERROR"]

const enemyForYou = ["with a GOOGLE SEARCH", "with CAFFEINE", "by DELETING & STARTING OVER", "with a CONSOLE.LOG", "with a DEV TOOLS BREAKPOINT", "with the SOURCES TAB", "by sending a SLACK CHANNEL MESSAGE", "by calling a DEVELOPER FRIEND"]

let inventoryOfErrorsArr = [];


//GREETINGS FOR START OF GAME

const characterName = readline.question(`\nWelcome to our world, ${name}! Now, you need a game name.  Type in your choice for your game character's name: `);

const startGame = readline.question(`\nThanks, ${characterName}! Let's Play!  Enter Y if you're ready to go:  `);


//PLAYER TOTALS OBJECT

playerTotals = {
    name: name,
    healthPoints: 100,
    inventory: inventoryOfErrorsArr
}


//OVERALL GAME LOOP

if (startGame === "Y" || startGame === "y") {
    console.log(`\nWELCOME TO MY BUGGY ADVENTURE, ${characterName}...where YOU are the BUG in the JavaScript!`)
    console.log(`~~Your mission is to SURVIVE so that you can keep messing with the program...and the programmer!!!)~~`)
    console.log(`\nYou'll start with a total of 100 health points.`)
    console.log(`Each time you attack the developer OR the developer attacks you,`)
    console.log(`you will feel a little less buggy and your health points will DECREASE.`);
    console.log(`\nBUT...if you can TAKE OUT the developer during a fierce battle,`)
    console.log(`you will EARN health points, so you can feel EVEN BUGGIER!`);
    console.log(`    PLUS...a developer's demise activates a BONUS REWARD:`)
    console.log(`    a sparkling NEW WEAPON added to your inventory stash, so you can`)
    console.log(`    throw it at the next crafty software developer who comes your way!`);
    console.log(`\nGOOD LUCK!`)

    while (!gameOver) {
        if (playerTotals.healthPoints > 0) {
            walk();
        } else if (playerTotals.healthPoints <= 0) {
            console.log(`\nYou fought the BUGGY fight, ${characterName}.`)
            console.log(`But that last attack was just too much for you.`)
            console.log(`\nYour health points have been depleted,`)
            console.log(`which means you've been SQUASHED.`)
            console.log(`HASTA LA VISTA, BUGGY!`)
            console.log(`See you next time!`)
            gameOver = true;
        }
    }
}


//FUNCTIONS

function walk() {
    const walking = readline.question(`\nKEEP IT BUGGY!  Please enter W (to WALK through the code) or X (to end game) `, { trueValue: ["w", "W"], falseValue: ["x", "X"] });  //ADD P for tallies to this menu??
    if (walking === true) {                                                      //when player selects "W"
        console.log(`\nHere we go!`)
        maybeEnemy();

    } else if (walking === false) {
        gameOver = true;
        console.log(`You have cancelled out of the game`)
    }
}

function maybeEnemy() {                                 //random enemy -- random algorithm runs to determine IF an enemy appears
    let enemy = Math.floor(Math.random() * 3)          //returns random number between 0 and 2 (33% chance of being attacked when walking)
    if (enemy === 0) {
        console.log(`\nUH OH!  You are under ATTACK from the evil programmer!`)
        uhOhEnemy();
        attackOrRun();
    } else {
        console.log(`You're still wreaking havoc ${characterName}, YOU CRAZY BUG! `)
        console.log(`Let's make the developer keep re-running that code!`);
        walk();
    }
}

function uhOhEnemy() {
    let uhOh = Math.floor(Math.random() * 8);                    //if enemy appears, which enemy appears is random
    //console.log(uhOh)
    let heresTheEnemy = enemyForYou[uhOh];
    console.log(`And that sinister software engineer is going`)
    console.log(`to ATTACK you ${heresTheEnemy}!`)
}

function attackOrRun() {                                          //user has choice to attack or run
    const attackRunAnswer = readline.question(`\nSo you must make a quick decision:  Enter A (to ATTACK) or R (to RUN) `, { trueValue: ["a", "A"], falseValue: ["r", "R"] });
    if (attackRunAnswer === true) {                                 //true means ATTACK
        console.log("\nNow, YOU are on the ATTACK and throwing your most devious ERROR!");
        let damage = Math.floor(Math.random() * 10) + 1;            //if attack: random amount of damage between a min(1) & max(10)
        //console.log(damage);
        playerTotals.healthPoints -= damage;
        //console.log(playerTotals.healthPoints);
        console.log(`Thankfully, your buggy self survived this time,`)
        console.log(`but you sustained some damage.`)
        console.log(`You lost ${damage} healthpoint(s) in that last battle :(`)
        console.log(`BE CAREFUL OUT THERE!`);
        enemyAttacksBack();
        viewPlayerTotals();

    } else if (attackRunAnswer === false) {                                     //false means RUN
        console.log("\nYou are ON THE RUN! But will you escape undetected?")
        let runFastEnough = Math.floor(Math.random() * 2);                          //if run:  50% chance of escaping
        if (runFastEnough === 0) {                                                  //if returns 0, then ESCAPED BY RUNNING
            console.log(`Good thing you're fast, ${characterName}!!  You are safe FOR NOW.`);
            enemyAttacksBack();
            viewPlayerTotals();

        } else if (runFastEnough === 1) {                                           //if returns 1, then RAN, BUT NOT FAST ENOUGH.  
            console.log(`\nWell, ${characterName}, you CAN'T outrun this wiley programmer!`)
            console.log(`YOU'VE BEEN SQUASHED!!`)
            console.log(`BYE, BYE, BUG!!`)
            console.log(`SEE YOU NEXT TIME!!`);
            gameOver = true;
            //console.log(gameOver)
        }
    }
}

function enemyAttacksBack() {                                         //After the player attacks or runs the enemy attacks back for a random damage amount
    let fightsBackDamage = Math.floor(Math.random() * 20) + 1;
    console.log(`\nOH NO!  That crazy developer is not going to give up so easily!`)
    console.log(`Here come's the COUNTER ATTACK!`)
    //console.log(fightsBackDamage);
    if (fightsBackDamage === 3 || fightsBackDamage === 9 || fightsBackDamage === 10) {   //If the player kills the enemy:give the Player some HP and a special item that is stored in the inventory.   
        console.log(`\nCONGRATS!! You're one NASTY BUG!`)
        console.log(`You have TRIUMPHED`)
        console.log(`...and TAKEN OUT the perfectionist PROGRAMMER!`);
        let positiveHealthPoints = Math.floor(Math.random() * 20) + 1         //awards random number of health points for fighting off enemy
        playerTotals.healthPoints += positiveHealthPoints;
        //console.log(playerTotals.healthPoints)
        let randomReward = errorChoicesArr[Math.floor(Math.random() * errorChoicesArr.length)];  //randomly select inventory item from errors array
        inventoryOfErrorsArr.push(randomReward);
        //console.log(inventoryOfErrorsArr);
        console.log(`\nBRAVO, ${characterName}!`);
        console.log(`Your REWARD is ${positiveHealthPoints} health point(s).  ROCK ON, BUG!`)
        console.log(`\nYou deserve an extra REWARD after that EPIC battle!`)
        console.log(`\nAnd HERE IT IS...to beef up your weapons inventory,`)
        console.log(`you have been gifted:  ${randomReward}! `);
        console.log(`\nNow you have EVEN MORE TOOLS`)
        console.log(`to outwit the NEXT conniving developer!`)
        //console.log(playerTotals)

    } else {
        playerTotals.healthPoints -= fightsBackDamage;
        //console.log(playerTotals.healthPoints)
        console.log(`This fearless developer is RUTHLESS!  WATCH YOUR BACK!!`)
        console.log(`\nWOW, ${characterName}! That was intense!`)
        console.log(`You sustained ${fightsBackDamage} point(s) worth of damage during that brawl`)
        console.log(`and are feeling the pain.`)
        console.log(`\nSTAY VIGILANT!`)
        console.log(`And throw those errors like confetti!`);
    }
}

function viewPlayerTotals() {                                            //check player's game tallies
    const checkTallies = readline.question(`\nIf you would like to check your game totals, enter "P".  Otherwise, enter "C" to continue `, { trueValue: ["p", "P"], falseValue: ["c", "C"] });  //ADD P for tallies to this menu??
    if (checkTallies === true) {
        console.log(`\nHere are your latest tallies:`)                                             //when player selects "P"
        console.log(playerTotals)
        walk()
    } else if (checkTallies === false && playerTotals.healthPoints > 0) {
        walk();
    } else if (checkTallies === false && playerTotals.healthPoints <= 0) {
        console.log(`\nHere are your final player tallies, ${characterName}:`)
        console.log(playerTotals)
        console.log(`\nYour health points have been depleted,`)
        console.log(`...which means you've been SQUASHED.`)
        console.log(`HASTA LA VISTA, BUGGY!`)
        console.log(`See you next time!`)
        gameOver = true;
    }
}
