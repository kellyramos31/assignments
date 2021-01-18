const head = document.getElementById("header");
head.innerText = "JavaScript Made This!!"
head.style.fontWeight = "bold";
head.style.fontSize = "30px";
head.style.textAlign = "center";

const wroteThis = document.createElement("h4");
wroteThis.textContent = " wrote the JavaScript";
wroteThis.style.fontSize = "15px"
head.append(wroteThis);

const myName = document.createElement("span");
myName.textContent = "Kelly";
myName.classList.add("name");
wroteThis.prepend(myName);


//  Write some custom JS to automatically change the words of the conversation to something fun & good
//var funAndGood = document.getElementsByClassName("message");




//  Wait until user clicks the "clear" button, then clears out all conversation:
var clearAllConvo = document.getElementById('clear-button');
clearAllConvo.addEventListener("click", function () {
    var clearIt = document.querySelectorAll(".message");
    for (var i = 0; i <= clearIt.length; i++) {
        newText = clearIt[i];
        newText.textContent = "";
        newText.style.backgroundColor = "white";
    }
})


//SILVER
//Use the drop down to write some JS that will notice when the drop down has changed and then changes the background colors of the messages accordingly.
//Feel free to edit the HTML <select> tag to make it more usable or elaborate.  Mo themes, mo fun.
var dropDownColor = document.getElementById("theme-drop-down");
dropDownColor.addEventListener("input", function (event) {
    if (event.target.value == 'theme-one') {
        var blueMessage = document.getElementsByClassName("left");
        var brownMessage = document.getElementsByClassName("right");
        for (var i = 0; i <= blueMessage.length && brownMessage.length; i++) {
            newBlue = blueMessage[i];
            newBlue.style.backgroundColor = "royalblue";
            newBlue.style.color = "white";
            newBrown = brownMessage[i];
            newBrown.style.backgroundColor = "brown";
        }
    }
})

dropDownColor.addEventListener("input", function (event) {
    if (event.target.value == 'theme-two') {
        var redMessage = document.getElementsByClassName("left");
        var blackMessage = document.getElementsByClassName("right");
        for (var i = 0; i <= redMessage.length && blackMessage.length; i++) {
            newRed = redMessage[i];
            newRed.style.backgroundColor = "red";
            newRed.style.color = "white";
            newBlack = blackMessage[i];
            newBlack.style.backgroundColor = "black";
            newBlack.style.color = "white";
        }
    }
})

dropDownColor.addEventListener("input", function (event) {
    if (event.target.value == 'theme-three') {
        var pinkMessage = document.getElementsByClassName("left");
        var purpleMessage = document.getElementsByClassName("right");
        for (var i = 0; i <= pinkMessage.length && purpleMessage.length; i++) {
            newPink = pinkMessage[i];
            newPink.style.backgroundColor = "pink";
            newPink.style.color = "black";
            newPurple = purpleMessage[i];
            newPurple.style.backgroundColor = "purple";
            newPurple.style.color = "white";
        }
    }
})

dropDownColor.addEventListener("input", function (event) {
    if (event.target.value == 'theme-four') {
        var greenMessage = document.getElementsByClassName("left");
        var yellowMessage = document.getElementsByClassName("right");
        for (var i = 0; i <= greenMessage.length && yellowMessage.length; i++) {
            newGreen = greenMessage[i];
            newGreen.style.backgroundColor = "green";
            newGreen.style.color = "white";
            newYellow = yellowMessage[i];
            newYellow.style.backgroundColor = "yellow";
            newYellow.style.color = "black";
        }
    }
})


//GOLD
//Be able to add more messages using the form at the bottom.






 //EXTRA CREDIT
 //Every other message will be posted on the right in one color, and the next on the left the other color.