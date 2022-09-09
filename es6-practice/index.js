//DONE --LET & CONST
//Replace all the vars with let and const.Alter the code however necessary to make sure this continues to 
//work(so the pet's name isn't "John", but instead "spot" is returned).You only need to delete var and insert let and const
//John is the pet owner, and his name should be stored differently than the other names.
/*
var name = "John"
var age = 101

function runForLoop(pets) {
    var petObjects = []
    for (var i = 0; i < pets.length; i++) {
        var pet = { type: pets[i] }
        var name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])
*/

const name = "John"
let age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])


//ES6 ARROW FUNCTIONS

//DONE -- TASK 1
//Re - write this.map() using an arrow function:
//Be aware that if JavaScript sees a {
//directly after the => it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol.

const carrots = ["bright orange", "ripe", "rotten"]
/*
function mapVegetables(arr) {
    return arr.map(function (carrot) {
        return { type: "carrot", name: carrot }
    })
}
*/
const newCarrotArr = carrots.map(carrot => ({ type: "carrot", name: carrot }));
console.log(newCarrotArr)



//DONE --TASK 2
//Re - write this.filter() using an arrow function:

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]
/*
function filterForFriendly(arr) {
    return arr.filter(function (person) {
        return person.friendly
    })
}
*/

const filterForFriendly = people.filter(person => person.friendly);
console.log(filterForFriendly)



//DONE --TASK 3
//Re - write the following functions to be arrow functions:
/*
function doMathSum(a, b) {
    return a + b
}
*/
const doMathSum = (a, b) => a + b;

console.log(doMathSum(3, 2))
/*
var produceProduct = function (a, b) {
    return a * b
}
*/

const produceProduct = (a, b) => a * b;
console.log(produceProduct(2, 6))



//DONE --TASK 4
//Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:
/*
Hi Kat Stark, how does it feel to be 40 ?
    firstName should default to "Jane"
lastName should default to "Doe"
age should default to 100

Extra Credit
Use template literals to build the string
*/

const printItOut = (firstName = "Jane", lastName = "Doe", age = 100) => (`Hi ${firstName} ${lastName}, how does it feel to be ${age} ?`)
console.log(printItOut())
console.log(printItOut("Pokemon", "Smith", 99))



//DONE --TASK 5
//Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
];

/*
function filterForDogs(arr) {
    return arr.filter(animal => {
        if (animal.type === "dog") {
            return true
        } else {
            return false
        }
    })
}
*/

const filterForDogs = animals.filter(animal => animal.type === "dog");
console.log(filterForDogs)


//DONE --TEMPLATE LITERALS
/*
Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:

Hi Janice!

Welcome to Hawaii.

I hope you enjoy your stay.  Please ask the president of Hawaii if you need anything.
*/

const welcomeMessage = (location, name) => (`\n\nHi ${name}!\n\nWelcome to ${location}.\n\nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.`)

console.log(welcomeMessage("Kauai", "Kelly"))


// const dogsArr = ["wolf", "fox", "coyote", "jackal"]
// const catsArr = ["puma", "bobcat", "lynx", "caracal", "tiger"]
// function unshift(...arr) {
//   return [...arr]
// }
// console.log(unshift(...arr, dogsArr))

const dogsArr = ["wolf", "fox", "coyote", "jackal"]
const catsArr = ["puma", "bobcat", "lynx", "caracal", "tiger"]
// function unshift(array, ...catsArr) {
//   return [...catsArr, array];
// }
// console.log(unshift(dogsArr, catsArr))

// function unshift(array, ...second) {
//   return [...second, ...array];
// }

// console.log()

function unshift(array, ...second) {
  return [...second, ...array];
}

console.log(unshift(dogsArr, ...catsArr))

