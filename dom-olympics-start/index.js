/*
const head = document.getElementById("header");
head.textContent = "JavaScript Made This!!"
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

//BRONZE
//  Write some custom JS to automatically change the words of the conversation to something fun & good

//BRONZE
//  Write some custom JS to automatically change the words of the conversation to something fun & good
/*var leftMessage = document.getElementsByClassName("message left");
var rightMessage = document.getElementsByClassName("message right");
for (var i = 0; i <= leftMessage.length && rightMessage.length; i++) {
    var newLeft = leftMessage[i].textContent = ["Howdy, friend", "I love sparkling conversation"];
    var newRight = rightMessage[i].textContent = ["Hi, neighbor", "Then you're in the right place!"];
}
*/
//var rightMessage = document.getElementsByClassName("message right");
/*
var allMessages = document.getElementsByClassName("message");

for (var i = 0; i <= allMessages.length; i++) {
    if (i % 2 === 0) {
        var newMessagesLeft = ["Howdy, friend", "I love sparkling conversation"];
        allMessages[i].textContent = newMessagesLeft[i];
    } else
        var newMessagesRight = ["Hi, neighbor", "Then you've come to the right place!"];
        allMessages[i].textContent = newMessagesRight[i];
}
*/

//THIS ONE WORKS!!!  YAY!! FINALLY!! :)
/*
var allMessages = document.getElementsByClassName("message");

for (var i = 0; i < allMessages.length; i++) {
    var newMessages = ["Howdy, friend", "Hi, neighbor", "I love sparkling conversation", "Then you've come to the right place!"];
    allMessages[i].textContent = newMessages[i];
}
*/

/*Slack from Isa:  Okay. I figured out the Bronze one. I like what you were trying to do, and it's really close to the correct solution. Instead of getting leftMessage and rightMessage individually from the DOM, I would grab all of them together: var messages = document.getElementsByClassName("message")
That will return an array of messages. The messages on the left have even indexes, the ones on the right have odd indexes. You can loop through the array of messages, and then based on what index you're at, change the textContent to say something else.
3:45
See if that works, or gets you closer. I can send you my solution, just let me know*/



//BRONZE
//  Write some custom JS to automatically change the words of the conversation to something fun & good
/*
var leftMessage = document.getElementsByClassName("message left");
var rightMessage = document.getElementsByClassName("message right");
for (var i = 0; i <= leftMessage.length && rightMessage.length; i++) {
    var newLeft = leftMessage[i].textContent = ["Howdy, friend", "I love sparkling conversation"];
    var newRight = rightMessage[i].textContent = ["Hi, neighbor", "Then you're in the right place!"];
}
*/
/*

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
*/
/*
GOLD
var sendButton = document.getElementById("send-button");
var userInputForm = document.getElementById("input");
//console.log(userInputForm.value);  //returns "Thank you. Goodbye" which is what is in form now.
sendButton.addEventListener("click", function () {
    //if (userInputForm.value != "") {
    var newMessageDiv = document.createElement("div");
    newMessageDiv.textContent = userInputForm;
    newMessageDiv.className.add("message");
    console.log(newMessageDiv.textContent)
    var messageChain = document.getElementsByClassName("messages");
    messageChain[0].parentNode.append(newMessageDiv);
})
*/


//GOLD
//Be able to add more messages using the form at the bottom.
/*
const sendButton = document.getElementById("send-button");
const userInputForm = document.getElementById("input");
//console.log(userInputForm.value);  //returns "Thank you. Goodbye" which is what is in form now.
sendButton.addEventListener("click", function (e) {
    e.preventDefault()
    //if (userInputForm.value != "") {  -- maybe don't need this; too complicated??
    var newMessageDiv = document.createElement("div");
    newMessageDiv.classList.add("message");
    newMessageDiv.textContent = userInputForm.value;
    console.log(newMessageDiv.textContent)
    var messageChain = document.getElementsByClassName("message");
    messageChain[0].parentNode.appendChild(newMessageDiv);
})




 //EXTRA CREDIT
 //Every other message will be posted on the right in one color, and the next on the left the other color.

*/
/*
const myHeader = document.getElementById("header");

const userName = "James";
myHeader.textContent = "JavaScript Made This!!"
myHeader.append(newBreak)
const newBreak = document.createElement("br")
const secondLine = document.createElement("h2")
secondLine.textContent = "James wrote the JavaScript";
myHeader.append(secondLine);
*/

