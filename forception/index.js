/*Write a function that takes two arrays as parameters.The first array will be an array
of people's names, and the second array will be the alphabet.
Using a for loop within a for loop, create and return array that looks like this:

function forception(people, alphabet){
    // your code here
}
// Output:
["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
"Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jacob:", "A", "B", "C", "D", "E", "F",
"G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y",
"Z", "Jingle:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
"R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Heimer:", "A", "B", "C", "D", "E", "F", "G", "H", "I",
"J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Schmidt:", "A",
"B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U",
"V", "W", "X", "Y", "Z"]

Here's the array of names and the alphabet to get you started:
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
*/

//THIS CODE BELOW RE-CREATES THE OUTPUT ABOVE -- BUT IT IS ONLY 1 FOR LOOP (***NOT A FOR LOOP WITHIN A FOR LOOP)
/*
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet) {
    var newCombinedArr = [];
    var alphaCapitalize = alphabet.toUpperCase();
    var newAlphabetArr = alphaCapitalize.split("");
    console.log(newAlphabetArr);
    for (var i = 0; i < people.length; i++) {
        newCombinedArr.push(people[i]);
        newCombinedArr.push(newAlphabetArr);

    }
    console.log(newCombinedArr)
}

forception(people, alphabet);
*/

//CODE BELOW PRINTS CORRECT OUTPUT USING 2 LOOPS (A FOR LOOP WITHIN A FOR LOOP):

var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet) {
    var newCombinedArr = [];
    var alphaCapitalize = alphabet.toUpperCase();
    var newAlphabetArr = alphaCapitalize.split("");
    for (var i = 0; i < people.length; i++) {
        newCombinedArr.push(people[i]);
        for (var j = 0; j < newAlphabetArr.length; j++)
            newCombinedArr.push(newAlphabetArr[j]);
    }
    console.log(newCombinedArr)
}

forception(people, alphabet);



