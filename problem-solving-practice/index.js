//DONE -- with Mozilla help -- #1:  Write a function that takes an array of numbers and returns the largest (without using Math.max())
//largest([3, 5, 2, 8, 1]) // => 8

//const numbersArr = [3, 1500, 90, 16000, 5, 3, 88, 62]  
//From moz:  need to use sort and then compare function
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

//numbersArr.sort();
//function compareNumbers(a, b) {
//    return a - b;
//}
/*SYNTAX:  arr.sort([compareFunction])
compareFunction Optional
Specifies a function that defines the sort order. If omitted, the array elements are converted to strings, 
then sorted according to each character's Unicode code point value.
firstEl
The first element for comparison.
secondEl
The second element for comparison.*/


const numbers = [3, 1500, 90, 16000, 5, 9, 88, 62];
numbers.sort(function (a, b) {
    return a - b;
});
console.log(numbers);
console.log(numbers.length)
console.log(numbers[numbers.length - 1]);



//SORT OF DONE -- #2:  Write a function that takes an array of words and a character and returns each word that has that character present.
//lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") // => ["C%4!", "Hey!"]

//NOTE: The below code works, EXCEPT does not seem to create 1 array; looks like the two results are in two separate arrays??

let wordsArr = ["#3", "$$$", "C%4!", "Hey!"]
let char = "!"


function checkForCharacter() {
    for (let i = 0; i < wordsArr.length; i++) {
        const wordsWithCharArr = [];
        if (wordsArr[i].includes(char) != false) {
            wordsWithCharArr.push(wordsArr[i])
            console.log(wordsWithCharArr)
        }
    }
}

checkForCharacter(wordsArr, char)


//DONE -- #3:  Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
//isDivisible(4, 2) // => true
//isDivisible(9, 3) // => true
//isDivisible(15, 4) // => false



function isDivisible(num1, num2) {
    if (num1 % num2 === 0) {
        console.log(true)
        console.log(num1 + " IS divisible by " + num2)
    } else {
        console.log(false)
        console.log(num1 + " is NOT divisible by " + num2)
    }
}

isDivisible(4, 2);
isDivisible(9, 3);
isDivisible(15, 4);
