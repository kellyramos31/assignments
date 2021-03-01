const displayClicks = document.getElementById("number-clicks");

const startButton = document.getElementById("start-time")
const timer = document.getElementById("show-timer")

let countClicks = 0;
let timeTick = 10;
timer.textContent = timeTick;
let intervalId;


function timeTicking() {
    timeTick--
    timer.textContent = timeTick;
    if (timeTick === 0) {
        timer.textContent = "Time's Up!";
        clearInterval(intervalId)
        timeTick = 10;
        countClicks = 0;
    }
}

startButton.addEventListener("click", () => {
    intervalId = setInterval(timeTicking, 1000)
    displayClicks.textContent = "0"
})


window.addEventListener("click", () => {
    if (timeTick > 0) {
        countClicks += 1;
        localStorage.setItem("clicks", countClicks)
        displayClicks.textContent = countClicks;
    } else if (timeTick === 0) {
        displayClicks.textContent = countClicks;
    } else if (timeTick < 0) {
        displayClicks.textContent = countClicks;
    }
})


const lastCountClicks = localStorage.getItem("clicks");
if (lastCountClicks) {
    displayClicks.textContent = lastCountClicks;
} else {
    displayClicks.textContent = newClicks;
}



//Extra credit: Put a countdown timer(10 - 30 seconds) on the page that stops the user's clicks from counting towards the total after the timer ends.
//setInterval
//clearInterval
//setTimeout

//setInterval
//setInterval(function () {
//    console.log('hello');
//}, 1000)

// 1 second
//'hello!'
// 2 seconds 
//'hello!'

//var intervalID = setInterval(function () {
//    console.log('hello!')
//}, 1000)
//The variable you assign to setInterval will store the ID for that interval.You can think about the ID 
//being like the off switch for the interval or timeout you set.


//clearInterval
//When you need to have an interval or timeout stopped, you call the clearInterval(intervalID) 
//or clearTimeout(timeoutID) and pass in the ID of the one you need stopped.

//setTimeout
//setTimeout(arg1, arg2)
//setTimeout(function(){}, 1000)  1000 = 1 second b/c measures milliseconds


/*COUNTER ONLY:
let countClicks = 0;

window.addEventListener("click", () => {
    countClicks += 1;
    localStorage.setItem("clicks", countClicks);
    displayClicks.textContent = countClicks;
    //console.log(displayClicks);
})

const displayClicks = document.getElementById("number-clicks");
const lastCountClicks = localStorage.getItem("clicks");
if (lastCountClicks) {
    displayClicks.textContent = lastCountClicks;
} else {
    displayClicks.textContent = countClicks;
}
*/

