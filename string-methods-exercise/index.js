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

// var startingString = "hey friends! practice practice practice!";
// var halfIndex;

// function returnNumberHalfRound() {
//   var strLength = startingString.length; //get length of string
//   var halfLength = strLength / 2; //divide length in half
//   var roundIt = Math.floor(halfLength); //round down
//   halfIndex = roundIt;
//   console.log(roundIt); //console log result
// }
// returnNumberHalfRound(startingString);

function round(str) {
  const halfStringNum = Math.floor(str.length / 2);
  return halfStringNum;
}
console.log(round("hello"));

//3.  Write a function that uses slice() and the other functions you've written to return the first half of the given string.
// returnFirstHalf("Hello") // => "He"
//returnFirstHalf("Hello World") // => "Hello"
/*
function returnHalfString() {
    returnNumberHalfRound();
    var halfOfWordStr = startingString.slice(0, halfIndex)
    console.log(halfOfWordStr);
}

returnHalfString();
*/

//4.  Write a function that takes a string as a parameter and returns that string where the first half is capitalized,
//and the second half is lowercase.
// Hint: If your string length is odd, use Math.floor() to round down.
//  capilizeAndLowercase("Hello") // => "HEllo"
//  capilizeAndLowercase("Hello World") // => "HELLO world"

/*
function halfStringUpHalfStringDown() {
    returnNumberHalfRound();
    var firstHalfWordStr = startingString.slice(0, halfIndex).toUpperCase();
    var secondHalfWordStr = startingString.slice(halfIndex).toLowerCase();
    var joinBack = firstHalfWordStr.concat(secondHalfWordStr);
    console.log(joinBack);
}

halfStringUpHalfStringDown()
*/

//--DONE -- OPTIONAL CODE CHALLENGE:
//    (This one is a step up in difficulty and utilizes the.split() string method and.join() array method):
//    Write a function that takes a string as a parameter and capitalizes any character that follows a space.
//    capitalize("hey friends! practice practice practice!") // -> "Hey Friends! Practice Practice Practice!"

//CHECK THIS LINK FOR HINT ABOUT HOW TO INDEX: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt

//var startingString = "hey friends! practice practice practice!";
/*
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
        //console.log(splitOffFirstLetter);
        restOfWordArr.push(createSeparateWordsArr[i].slice(1))
        console.log(restOfWordArr)
        capitalizedFirstLetterArr.push(splitOffFirstLetter[i].toUpperCase());

    } console.log(capitalizedFirstLetterArr);

    for (let j = 0; j < capitalizedFirstLetterArr.length; j++) {
        reconnectWordsArr.push(capitalizedFirstLetterArr[j].concat(restOfWordArr[j]));

    } console.log(reconnectWordsArr)

    stringBackTogetherCaps = reconnectWordsArr.join(" ");
    console.log(stringBackTogetherCaps)
}

capsOnSpace()
*/

//CODE CHALLENGE:
// function reverse(word) {
//     const splitItUp = word.split("").reverse().join("")
//     console.log(splitItUp)
// }
// reverse("cat")

// console.log(splitItUp)
// const flipIt = splitItUp.reverse()
// console.log(flipIt)
// const joinItBack = flipIt.join()
// console.log(joinItBack)

//CODE CHALLENGE Anagram:
// function isAnagram(word1, word2) {
//     const array1 = word1.split("")
//     const array2 = word2.split("")
//     const matchedLetters = []

//     if (array1.length !== array2.length){
//         console.log("FALSE (outside of loop) -- not an anagram")
//         return false

//     } else if (array1.length === array2.length){

//     for (let i = 0; i < array1.length; i++){

//         if (array2.includes(array1[i])){
//             matchedLetters.push(array1[i])
//             console.log("it's a letter match!", array1[i])
//             console.log("matchedLetters Array", matchedLetters)
//         } else if (!array2.includes(array1[i])) {
//             console.log("FALSE (from loop) -- not an anagram")
//             return false
//         }}
//     }
//         console.log("TRUE -- loop done -- this is an anagram")
//         return true
// }

// function isAnagram(word1, word2) {
//     const array1 = word1.split("")
//     const array2 = word2.split("")
//     // const matchedLetters = []  //this really just serves as a checkpoint

//     if (array1.length !== array2.length){
//         console.log("FALSE --NOT an anagram :(")
//         return false

//     } else if (array1.length === array2.length){

//     for (let i = 0; i < array1.length; i++){

//         if (array2.includes(array1[i])){
//             // matchedLetters.push(array1[i])
//             console.log("it's a letter match!", array1[i])

//         } else if (!array2.includes(array1[i])) {
//             console.log("FALSE --NOT an anagram :(")
//             return false
//         }}
//     }
//         // console.log("matchedLetters Array", matchedLetters)
//         console.log("TRUE -- it's an ANAGRAM :)")
//         return true
// }

// isAnagram("dusty", "study")
//isAnagram("night", "thing")
// isAnagram("listened", "silent")
//isAnagram('triangle', 'integral')
//isAnagram('arc', 'car')

// CHECK ARRAY LENGTHS FIRST:
// start off with if lengths are different -- not an anagram
// if lengths are equal, then start matching/finding if letters are same

// THEN COMPARE LETTERS ACROSS THE TWO ARRAYS:
