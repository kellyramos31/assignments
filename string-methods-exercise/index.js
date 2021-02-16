
//DONE -- 1.  Write a function that takes a string as a parameter and returns the same string in 
//all capital letters followed by all lowercase letters.
//  capilizeAndLowercase("HelLo") // => "HELLOhello"


var jumbledLetters = "HelLo"

function capitalizeAndLowercase() {
    var upTheCase = jumbledLetters.toUpperCase();
    var lowTheCase = jumbledLetters.toLowerCase();
    var combinedUpLow = upTheCase.concat(lowTheCase);
    console.log(combinedUpLow);
}

capitalizeAndLowercase();


//DONE -- 2.  Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.
// Hint: You'll need to use Math.floor().
//  findMiddleIndex("Hello") // => 2
//  findMiddleIndex("Hello World") // => 5

var startingString = "hey friends! practice practice practice!";
var halfIndex

function returnNumberHalfRound() {
    var strLength = startingString.length;   //get length of string
    var halfLength = strLength / 2; //divide length in half
    var roundIt = Math.floor(halfLength)//round down
    halfIndex = roundIt;
    console.log(roundIt);//console log result

}

//returnNumberHalfRound();


//3.  Write a function that uses slice() and the other functions you've written to return the first half of the given string.
// returnFirstHalf("Hello") // => "He"
//returnFirstHalf("Hello World") // => "Hello"

function returnHalfString() {
    returnNumberHalfRound();
    var halfOfWordStr = startingString.slice(0, halfIndex)
    console.log(halfOfWordStr);
}

returnHalfString();


//4.  Write a function that takes a string as a parameter and returns that string where the first half is capitalized, 
//and the second half is lowercase.
// Hint: If your string length is odd, use Math.floor() to round down.
//  capilizeAndLowercase("Hello") // => "HEllo"
//  capilizeAndLowercase("Hello World") // => "HELLO world"


function halfStringUpHalfStringDown() {
    returnNumberHalfRound();
    var firstHalfWordStr = startingString.slice(0, halfIndex).toUpperCase();
    var secondHalfWordStr = startingString.slice(halfIndex).toLowerCase();
    var joinBack = firstHalfWordStr.concat(secondHalfWordStr);
    console.log(joinBack);
}

halfStringUpHalfStringDown()



//--DONE -- OPTIONAL CODE CHALLENGE:
//    (This one is a step up in difficulty and utilizes the.split() string method and.join() array method):
//    Write a function that takes a string as a parameter and capitalizes any character that follows a space.
//    capitalize("hey friends! practice practice practice!") // -> "Hey Friends! Practice Practice Practice!"



//CHECK THIS LINK FOR HINT ABOUT HOW TO INDEX: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt

//var startingString = "hey friends! practice practice practice!";

var startingString = "grab some chips and let's watch the superbowl!";

function capsOnSpace() {
    let createSeparateWordsArr = startingString.split(" ");  //breaks up the original string so each word is separate item in array
    console.log(createSeparateWordsArr);
    let splitOffFirstLetter = [];                                //this holds the first letters from each word in string before capitalize them
    let capitalizedFirstLetterArr = [];                         //this array holds the capitalized split off first letters
    let restOfWordArr = [];                                     //this array holds the string of words with first letter cut off
    let reconnectWordsArr = [];                                 //this array holds the string with caps attached back to words 
    let stringBackTogetherCaps                                  //string back together with capitalized words

    for (let i = 0; i < createSeparateWordsArr.length; i++) {
        splitOffFirstLetter.push(createSeparateWordsArr[i].slice(0, 1));
        console.log(splitOffFirstLetter);
        restOfWordArr.push(createSeparateWordsArr[i].slice(1))
        console.log(restOfWordArr)
        capitalizedFirstLetterArr.push(splitOffFirstLetter[i].toUpperCase());
        console.log(capitalizedFirstLetterArr);
    }

    for (let j = 0; j < capitalizedFirstLetterArr.length; j++) {
        reconnectWordsArr.push(capitalizedFirstLetterArr[j].concat(restOfWordArr[j]));
        console.log(reconnectWordsArr)
    }

    stringBackTogetherCaps = reconnectWordsArr.join(" ");
    console.log(stringBackTogetherCaps)
}

capsOnSpace()

