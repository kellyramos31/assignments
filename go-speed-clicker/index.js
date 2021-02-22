
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



setInterval
clearInterval
setTimeout
