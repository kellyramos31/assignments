
//DONE -- 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.


const numArray = [3, 6, 8, 2]
/*
//code for exercise:
const result = numArray.filter(function fiveAndGreaterOnly(num) {
    if (num > 5) {
        return num
    }
})

console.log(result)
*/

//re-written with shortened syntax:
const result = numArray.filter(num => num > 5)
console.log(result)

// test
//console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]


//DONE -- 2) Given an array of numbers, return a new array that only includes the even numbers.

//code for exercise:
/*
const resultEvens = numArray.filter(function evensOnly(num) {
    if (num % 2 === 0) {
        return num
    }
})
console.log(resultEvens)
*/
//re-written with shortened syntax:
const resultEvens = numArray.filter(num => num % 2 === 0)
console.log(resultEvens)

// test
//console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]



//DONE -- 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
const stringsArr = ["dog", "wolf", "by", "family", "eaten", "camping"]

//code for exercise:
/*
const fiveOrLess = stringsArr.filter(function fiveCharactersOrFewerOnly(string) {
    if (string.length <= 5) {
        return string
    }
})
console.log(fiveOrLess)
*/

//re-written with shortened syntax:
const fiveOrLess = stringsArr.filter(string => string.length <= 5)
console.log(fiveOrLess)

// test
//console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]



//DONE -- 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

const people = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

//code for exercise:
/*
const yesIlluminati = people.filter(function peopleWhoBelongToTheIlluminati(person) {
    if (person.member == true) {
        return person
    }
})
console.log(yesIlluminati)
*/

//re-written with shortened syntax:
const yesIlluminati = people.filter(person => person.member == true)
console.log(yesIlluminati)


// test
// =>
//[ { name: 'Angelina Jolie', member: true },
//  { name: 'Paris Hilton', member: true },
//  { name: 'Bob Ziroll', member: true } ]



//DONE--5) Make a filtered list of all the people who are old enough to see The Matrix(older than 18)
const nameAge = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

//code for exercise:
/*
const oldEnough = nameAge.filter(function ofAge(num) {
    if (num.age > 17) {
        return nameAge.name + " " + nameAge.age
    }
})
console.log(oldEnough)
*/
//re-written with shortened syntax:
const oldEnough = nameAge.filter(num => num.age > 17)
console.log(oldEnough)

// test
// =>
//[ { name: 'Angelina Jolie', age: 80 },
//  { name: 'Bob Ziroll', age: 100 } ]
