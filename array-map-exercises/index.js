//Use the built -in .map() method on arrays to solve all of these problems

/*Feel free to copy and paste the function and tests in this assignment.

//DONE -- 1) Make an array of numbers that are doubles of the first array
*/

numArray = [2, 5, 100]
/*
//code for this exercise:
const doubleIt = numArray.map(function doubleNumbers(arr) {
    return arr * 2;// your code here
})
console.log(doubleIt)
*/

//code rewritten with ES6 syntax:  
const doubleIt = numArray.map(arr => arr * 2)
console.log(doubleIt)

//console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]


//DONE -- 2) Take an array of numbers and make them strings
//code for this exercise:
/*
const makeString = numArray.map(function stringItUp(arr) {
    return arr.toString();
})
console.log(makeString)
*/

//code rewritten with ES6 syntax:  
const makeString = numArray.map(arr => arr.toString())
console.log(makeString)

//function stringItUp(arr) {
//  // your code here
//}
//console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]



//DONE -- 3) Capitalize each of an array of names
//code for this exercise:

namesArr = ["john", "JACOB", "jinGleHeimer", "schmidt"]
/*
const resultUpperCase = namesArr.map(function capitalizeNames(namesArr) {
    return namesArr[0].toUpperCase() + namesArr.substring(1).toLowerCase();
})
console.log(resultUpperCase)
*/

//code rewritten with ES6 syntax:  
const resultUpperCase = namesArr.map(namesArr => namesArr[0].toUpperCase() + namesArr.substring(1).toLowerCase())
console.log(resultUpperCase)

//console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]



//DONE -- 4) Make an array of strings of the names

const namesOnly = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

//code for this exercise:
/*
const result = namesOnly.map(function (namesOnly) {
    return namesOnly.name
})
console.log(result)
*/

//code rewritten with ES6 syntax:  
const result = namesOnly.map(namesOnly => namesOnly.name)
console.log(result)

// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]



//DONE --5) Make an array of strings of the names saying whether or not they can go to The Matrix

const movieAge = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];

//code for this exercise:
/*
const resultMovie = movieAge.map(function makeStrings(movieAge) {
    if (movieAge.age > 18) {
        return movieAge.name.concat(" can go to The Matrix!")
    } else {
        return movieAge.name.concat(" is underage!!")
    }
})
console.log(resultMovie)
*/
//code rewritten with ES6 syntax:  

const resultMovie = movieAge.map(movieAge => {
    if (movieAge.age > 18) {
        return movieAge.name.concat(" can go to The Matrix!")
    } else {
        return movieAge.name.concat(" is underage!!")
    }
})
console.log(resultMovie)


//function makeStrings(arr) {
// your code here
//}

// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]



//DONE -- 6) Make an array of the names in h1s, and the ages in h2s

const readyToPutInTheDom = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

/*
//code for this exercise:
const domReady = readyToPutInTheDom.map(function readyForDom(readyToPutInTheDom) {
    return "<h1>" + readyToPutInTheDom.name + "</h1>" + "<h2>" + readyToPutInTheDom.age + "</h2>";
})
console.log(domReady)
*/

//code rewritten with ES6 syntax:  //NOTE:  can re-write this to also include template literals instead
const domReady = readyToPutInTheDom.map(readyToPutInTheDom => "<h1>" + readyToPutInTheDom.name + "</h1>" + "<h2>" + readyToPutInTheDom.age + "</h2>")
console.log(domReady)

// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]


//From Maira's L2 video:  
//const domStrings = arrayofPeople.map(function(person, index)=>{
//    return {`<h1>${person.name}</h1><h2>${person.age}</h2>`}
//})
//console.log("final result:  ", domStrings)