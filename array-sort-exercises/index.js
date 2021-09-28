//Use the built -in .sort() method on arrays to solve all of these problems

//Feel free to copy and paste the function and tests in this assignment.

//DONE -- 1) Sort an array from smallest number to largest

//code for this exercise:

numArr = [1, 90, 5, 2, 3, 20]

//practice again
const smallToLarge = numArr.sort((a, b) => a - b)
console.log(smallToLarge)

/*
numArr.sort(function leastToGreatest(a, b) {
    return a - b;
})
console.log(numArr)
*/
//re-written to shorter ES6 version:
/*
numArr.sort((a, b) => a - b)
console.log(numArr)
*/


//console.log(leastToGreatest()); // [1, 2, 3, 5, 20, 90] 

//DONE --2) Sort an array from largest number to smallest
//code for this exercise:

//practice again
const largestToSmallest = numArr.sort((a, b) => b - a)
console.log(largestToSmallest)


/*
numArr.sort(function greatestToLeast(a, b) {
    return b - a;
})
console.log(numArr)
*/
//rewritten in shorter ES6:
/*
numArr.sort((a, b) => b - a)
console.log(numArr)
*/
//console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1]


//DONE -- 3) Sort an array from shortest string to longest
wordArr = ["dog", "wolf", "by", "family", "eaten"]

//practice again
const shortStringToLongString = wordArr.sort((a, b) => a.length - b.length)
console.log(shortStringToLongString)


//code for this exercise:
/*
wordArr.sort(function lengthSort(a, b) {
    return a.length - b.length
})
console.log(wordArr); // ["by", "dog", "wolf", "eaten", "family"]
*/
//re-written in shorter ES6:
/*
wordArr.sort((a, b) => a.length - b.length)
console.log(wordArr)
*/

//DONE -- 4) Sort an array alphabetically
//note:  when Googled it, said to just use .sort() without passing in any arguments to alphabetize.
sameWordArr = ["dog", "wolf", "by", "family", "eaten"]

//practice again 
const alphabetize = sameWordArr.sort()
console.log(alphabetize)


//code for this exercise:
/*
sameWordArr.sort()
console.log(sameWordArr)
*/
//console.log(alphabetical()); // ["by", "dog", "eaten", "family", "wolf"]


//5) Sort the objects in the array by age
characterArr = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

//practice again
const sortByAge = characterArr.sort((a, b) => a.age - b.age)
console.log(sortByAge)

//code for this exercise:
/*
characterArr.sort(function byAge(a, b) {
    return a.age - b.age;
})
console.log(characterArr)
*/
//rewritten in shorter ES6:
/*
characterArr.sort((a, b) => a.age - b.age);
console.log(characterArr)
*/


// => [ { name: 'Misunderstood Observer', age: 2 },
//  { name: 'Quiet Samurai', age: 22 },
//  { name: 'Unlucky Swami', age: 77 },
//  { name: 'Arrogant Ambassador', age: 100 } ]
