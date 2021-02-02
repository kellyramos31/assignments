
//DONE -- 1.  Write a function that takes a string as a parameter and returns the same string in 
//all capital letters followed by all lowercase letters.
//  capilizeAndLowercase("HelLo") // => "HELLOhello"

/*
var jumbledLetters = "HelLo"

function capitalizeAndLowercase() {
    var upTheCase = jumbledLetters.toUpperCase();
    var lowTheCase = jumbledLetters.toLowerCase();
    var combinedUpLow = upTheCase.concat(lowTheCase);
    console.log(combinedUpLow);
}

capitalizeAndLowercase();
*/

//DONE -- 2.  Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.
// Hint: You'll need to use Math.floor().
//  findMiddleIndex("Hello") // => 2
//  findMiddleIndex("Hello World") // => 5

var startingString = "Hello World";
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



//OPTIONAL CODE CHALLENGE:
//    (This one is a step up in difficulty and utilizes the.split() string method and.join() array method):
//    Write a function that takes a string as a parameter and capitalizes any character that follows a space.
//    capitalize("hey friends! practice practice practice!") // -> "Hey Friends! Practice Practice Practice!"




