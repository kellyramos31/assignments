
let countClicks = 0;
let time = 0;



window.addEventListener("click", () => {
    //setTimeout(function () {
    //clearInterval(intervalId);
    //localStorage.setItem("clicks", countClicks);
    //countClicks += 1;
    //displayClicks.textContent = countClicks;
    //}, 10000)
    setTimeout(function () {
        countClicks += 1;
        localStorage.setItem("clicks", countClicks);
        displayClicks.textContent = countClicks
    })
    var intervalId = setInterval(function () {
        const displayTime = document.getElementById("show-timer");
        displayTime.textContent = time
        time += 1;
        //displayClicks.textContent = countClicks;
        clearInterval(intervalId); alert('stop');
    }, 10000)

    //setTimeout(() => {

})

//let timerId = setInterval(() => alert('tick'), 2000);
//setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000)
//console.log(displayTime)


const displayClicks = document.getElementById("number-clicks");
const lastCountClicks = localStorage.getItem("clicks");
if (lastCountClicks) {
    displayClicks.textContent = lastCountClicks;
} else {
    displayClicks.textContent = countClicks;
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




