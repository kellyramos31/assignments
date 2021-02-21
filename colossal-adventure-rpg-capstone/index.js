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

//INITIALIZE READLINE-SYNC
const readline = require("readline-sync");

//VARIABLES 
const name = readline.question("\nGreetings!  What is your name? ");

//const chalk = require('chalk');

//console.log(chalk.blue("Hello World"))

let gameOver = false;

const errorChoicesArr = ["INFINITE LOOP", "MISSING CURLY BRACE", "IMPOSTER SYNDROME", "UNDEFINED", "ERRANT SEMI-COLON", "NOT A FUNCTION", "NaN", "REFERENCE ERROR", "TYPE ERROR", "SYNTAX ERROR"]

const enemyForYou = ["with a GOOGLE SEARCH", "with CAFFEINE", "by DELETING & STARTING OVER", "with a CONSOLE.LOG", "with a DEV TOOLS BREAKPOINT", "with the SOURCES TAB", "by sending a SLACK CHANNEL MESSAGE", "by Zooming with a DEVELOPER FRIEND"]

let inventoryOfErrorsArr = [];

const options = ["Yes"]

const aOrR = ["Attack", "Run"]

const pOrC = ["Print", "Continue"]

//GET PLAYER NAMES
const characterName = readline.question(`\nWelcome to our world, ${name}! Now, you need a game name.  Type in your choice for a game character name: `);
const readyToGo = readline.keyInSelect(options, `Are you ready to play?`)

//PLAYER TOTALS OBJECT
playerTotals = {
    name: characterName,
    healthPoints: 75,
    inventory: inventoryOfErrorsArr
}

//OVERALL GAME LOOP
if (options[readyToGo] === "Yes" || options[readyToGo] === 1) {
    welcomeGreeting();                                                         //welcome message
    while (!gameOver) {
        if ((playerTotals.healthPoints > 0 && playerTotals.healthPoints < 100) && (inventoryOfErrorsArr.length < 3)) {                                   //game continues if still have HP left; if YES, then WALK
            walk();
        } else if (playerTotals.healthPoints <= 0) {                           //else, if HP is zero or negative, then game ends
            byeByePlayer()
        } else if (playerTotals.healthPoints >= 100 || inventoryOfErrorsArr.length >= 3) {             //player(a.k.a. the bug) wins the game
            console.log(`\nCONGRATULATIONS, ${characterName}!  You've WON!`);
            console.log(`\nYou have worn out all of the developers...`)
            console.log(`and been crowned the BUGGIEST BUG in town!`)
            console.log(`\nHere are your final player tallies:`)
            console.log(playerTotals)
            gameOver = true;
        }
    }

} else if (options[readyToGo] !== 1) {
    console.log(`\nYou have cancelled out of the game, ${name}.`);
    console.log(`Hope to see you back here soon!`)
    gameOver = true;
}


//FUNCTIONS
function welcomeGreeting() {
    console.log(`\nchalk.green(WELCOME TO MY BUGGY ADVENTURE), ${characterName}...where YOU are the BUG in the JavaScript!`)
    console.log(`~~Your mission is to SURVIVE so that you can keep messing with the program...and the programmer!!!)~~`)
    console.log(`\nYou'll start with a total of 75 health points.`)
    console.log(`Each time you attack the developer OR the developer attacks you,`)
    console.log(`you will feel a little less buggy and your health points will DECREASE.`);
    console.log(`\nBUT...if you can TAKE OUT the developer,`)
    console.log(`you will EARN health points, so you can get EVEN BUGGIER!`);
    console.log(`\nPLUS...the developer's demise also activates a BONUS REWARD:`)
    console.log(`A sparkling NEW WEAPON will be added to your inventory stash,`)
    console.log(`so you can throw it at the next crafty software developer who comes your way!`);
    console.log(`\nTO WIN:  increase your HP to 100 OR accumulate 3 rewards in your inventory.`)
    console.log(`\nGOOD LUCK!`)
}

function walk() {
    const walking = readline.question(`\nKEEP IT BUGGY!  Please enter W (to WALK through the code) or X (to end game) `, { trueValue: ["w", "W"], falseValue: ["x", "X"] });  //ADD P for tallies to this menu??
    if (walking === true) {                                                      //when player selects "W" or "w"
        console.log(`\nHere we go!`)
        maybeEnemy();

    } else if (walking === true && (aOrR[makeDecision] === "Attack" || aOrR[makeDecision] === 0)) {
        enemyAttacksBack();
        viewPlayerTotals();

    } else if (walking === true && (aOrR[makeDecision] === "Run" || aOrR[makeDecision] === 1)) {
        enemyAttacksBack();
        viewPlayerTotals();

    } else if (walking === false) {                                            //when player selects "X" or "x"
        gameOver = true;
        console.log(`\nYou have cancelled out of the game, ${name}.  Hope to see again soon!`)
    }
}

function maybeEnemy() {                                 //random enemy -- random algorithm runs to determine IF an enemy appears
    let enemy = Math.floor(Math.random() * 4)          //upped this to 50% chance;returns random number between 0 and 2 (so 33% chance of being attacked when walking)
    if (enemy === 0 || enemy === 2) {                  //if 0 or 2 is randomly returned, then you are attacked.
        console.log(`\nUH OH!  You are under ATTACK from the evil programmer!`)
        uhOhEnemy();
        attackOrRun();
    } else {                                          //if 1 or 2 is generated, then the bug keeps walking through the program.
        console.log(`\nYou're still wreaking havoc ${characterName}, YOU CRAZY BUG! `)
        console.log(`Let's make the developer keep re-running the code!`);
        walk();
    }
}

function uhOhEnemy() {
    let uhOh = Math.floor(Math.random() * 8);           //if enemy appears, which enemy appears is random (from array of 8 possible enemies)
    //console.log(uhOh)
    let heresTheEnemy = enemyForYou[uhOh];
    console.log(`And that sinister software engineer is`)
    console.log(`ATTACKING you ${heresTheEnemy}!`)
}

function attackOrRun() {                                          //user has choice to attack or run
    const makeDecision = readline.keyInSelect(aOrR, `OK, ${characterName}, Are you going to ATTACK or RUN?`)
    if (aOrR[makeDecision] === "Attack" || aOrR[makeDecision] === 0) {                                 //decided to ATTACK
        console.log("\nNow, YOU are on the ATTACK and throwing your most devious ERROR!");
        let damage = Math.floor(Math.random() * 20) + 1;            //if attack: random amount of damage between a min(1) & max(20)
        //console.log(damage);
        playerTotals.healthPoints -= damage;
        //console.log(playerTotals.healthPoints);
        console.log(`\nThankfully, your buggy self survived this time,`)
        console.log(`but you've sustained some damage.`)
        console.log(`\nYou lost ${damage} healthpoint(s) in that last battle :(`)
        console.log(`BE CAREFUL OUT THERE!`);
        //enemyAttacksBack();
        viewPlayerTotals();

    } else if (aOrR[makeDecision] === "Run" || aOrR[makeDecision] === 1) {        //user decided to RUN
        console.log("\nYou are ON THE RUN! But will you escape undetected?")
        let runFastEnough = Math.floor(Math.random() * 2);                   //if run:  50% chance of escaping (randomly generates a 0 or 1 here)
        if (runFastEnough === 0) {                                           //if returns 0: then ESCAPED BY RUNNING
            console.log(`Good thing you're fast, ${characterName}!!  You are safe FOR NOW.`);
            //enemyAttacksBack();
            viewPlayerTotals();

        } else if (runFastEnough === 1) {                          //if returns 1: then you ran, BUT NOT FAST ENOUGH & bug (player) is exterminated
            console.log(`\nWell, ${characterName}, you CANNOT outrun this wiley programmer!`)
            console.log(`\nYOU'VE BEEN SQUASHED!!`)
            console.log(`BYE, BYE, BUG!!`)
            console.log(`\nSee you next time!!`);
            gameOver = true;
            //console.log(gameOver)
        }
    }
}

function enemyAttacksBack() {
    let fightsBackDamage = Math.floor(Math.random() * 10) + 1;    //adjusted to 1-10 pts;After player attacks/runs--enemy attacks back for a random amt. damage (1-20)
    console.log(`\nLOOK OUT!  That crazy developer is not going to give up so easily!`)
    console.log(`Here comes the COUNTER ATTACK!`)
    //console.log(fightsBackDamage);
    if (fightsBackDamage === 3 || fightsBackDamage === 9 || fightsBackDamage === 10 || fightsBackDamage === 12 || fightsBackDamage === 17) {   //If the player kills the enemy:give the Player some HP and a special item that is stored in the inventory.   
        console.log(`\nCONGRATS!! You're one NASTY BUG!`)
        console.log(`You have TRIUMPHED`)
        console.log(`...and TAKEN OUT the perfectionist programmer!`);
        let positiveHealthPoints = Math.floor(Math.random() * 20) + 1         //awards random number of HP for enemy's demise
        playerTotals.healthPoints += positiveHealthPoints;
        //console.log(playerTotals.healthPoints)
        let randomReward = errorChoicesArr[Math.floor(Math.random() * errorChoicesArr.length)];  //rewards randomly selected item from array
        inventoryOfErrorsArr.push(randomReward);                                                 //adds reward to player inventory
        //console.log(inventoryOfErrorsArr);
        console.log(`\nBRAVO, ${characterName}!`);
        console.log(`Your REWARD is ${positiveHealthPoints} health point(s).  ROCK ON, BUG!`)
        console.log(`You deserve an extra special REWARD after that EPIC battle!`)
        console.log(`\nAnd HERE IT IS...`)
        console.log(`To beef up your weapons inventory,`)
        console.log(`you have been gifted this intriguing developer conundrum:  ${randomReward}! `);
        console.log(`\nWay to go! It could be the key to outwitting`)
        console.log(`the next conniving developer who tries to stop you!`)
        //console.log(playerTotals)

    } else {                                                 //if enemy not killed off, random damage points assigned after enemy attacks back
        playerTotals.healthPoints -= fightsBackDamage;
        //console.log(playerTotals.healthPoints)
        console.log(`This fearless engineer is RUTHLESS!  WATCH YOUR BACK!!`)
        console.log(`\nWOW, ${characterName}! That was intense!`)
        console.log(`\nYou sustained ${fightsBackDamage} more point(s) worth of damage during that second brawl`)
        console.log(`and are feeling the pain.`)
        console.log(`\nSTAY VIGILANT!`)
        console.log(`And keep throwing those errors like confetti!`);
    }
}

function viewPlayerTotals() {                                            //check player's game tallies
    const checkTallies = readline.keyInSelect(pOrC, `\nIf you would like to check your game totals, select "Print".  Otherwise, select "Continue" `);  //Option To Print Tallies OR Continue
    if ((pOrC[checkTallies] === 0 || pOrC[checkTallies] === "Print") && ((playerTotals.healthPoints > 0) && (playerTotals.healthPoints < 100)) && (inventoryOfErrorsArr.length < 3)) {          //when player selects "Print"; also, checks for positive HP total
        console.log(`\nHere are your latest tallies:`)
        console.log(playerTotals)
        enemyAttacksBack()
        console.log(`\nAfter that vicious counter-attack, here's where you stand:`)
        console.log(playerTotals)
        //walk()

    } else if ((pOrC[checkTallies] === 0 || pOrC[checkTallies] === "Print") && (playerTotals.healthPoints <= 0)) {    //when player selects "Print" & no HP left or negative HP
        console.log(`\nOH NO! Your health points have been fully depleted,`)
        console.log(`...which means you've been SQUASHED.`)
        console.log(`\nHASTA LA VISTA, BUGGY!`)
        console.log(`See you next time!`)
        console.log(`\nHere are your final player tallies:`)
        console.log(playerTotals)
        gameOver = true;

    } else if ((pOrC[checkTallies] === 0 || pOrC[checkTallies] === "Print") && ((playerTotals.healthPoints >= 100)) || (inventoryOfErrorsArr.length >= 3)) {
        console.log(`\nCONGRATULATIONS, ${characterName}!  You've WON!`);
        console.log(`\nYou have worn out all of the developers...`)
        console.log(`and been crowned the BUGGIEST BUG in town!`)
        console.log(`\nHere are your final player tallies:`)
        console.log(playerTotals)
        gameOver = true;

    } else if ((pOrC[checkTallies] === 1 || pOrC[checkTallies] === "Continue") && ((playerTotals.healthPoints > 0) && (playerTotals.healthPoints < 100)) && (inventoryOfErrorsArr.length < 3)) {  //when player selects "Continue"; checks for positive HP total
        enemyAttacksBack();
        console.log(`\nAfter that ambush, here are your updated tallies:`)
        console.log(playerTotals)
        //walk();

    } else if ((pOrC[checkTallies] === 1 || pOrC[checkTallies] === "Continue") && (playerTotals.healthPoints <= 0)) {           //when player selects "Continue" & no HP left or negative HP
        console.log(`\nOH NO! Your health points are no longer sustaining you,`)
        console.log(`...which means you've been SQUASHED.`)
        console.log(`\nHASTA LA VISTA, BUGGY!`)
        console.log(`See you next time!`)
        console.log(`\nHere are your final player tallies:`)
        console.log(playerTotals)
        gameOver = true;

    } else if ((pOrC[checkTallies] === 1 || pOrC[checkTallies] === "Continue") && (inventoryOfErrorsArr.length >= 3 || playerTotals.healthPoints >= 100)) {
        console.log(`\nCONGRATULATIONS, ${characterName}!  You've WON!`);
        console.log(`\nYou have worn out all of the developers...`)
        console.log(`and been crowned the BUGGIEST BUG in town!`)
        console.log(`\nHere are your final player tallies:`)
        console.log(playerTotals)
        gameOver = true;

    } else {
        console.log(`\nSorry to see you go.  Hope you'll come play MY BUGGY ADVENTURE another time very soon!`)
        gameOver = true;
    }
}

function byeByePlayer() {
    console.log(`\nYou fought the BUGGY fight, ${characterName}.`)
    console.log(`But that last attack was just too much for you.`)
    console.log(`\nYour health points have been depleted,`)
    console.log(`which means you've been SQUASHED.`)
    console.log(`\nHASTA LA VISTA, BUGGY!`)
    console.log(`\nSee you next time!`)
    gameOver = true;
}
