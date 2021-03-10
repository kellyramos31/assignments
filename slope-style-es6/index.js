//DONE--#1:  Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

//collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", "unicorn")

//*function collectAnimals(/*your code here*/) {
//    /*and here*/
//}

//collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// ["dog", "cat", "mouse", "jackolope", "platypus"]


function collectAnimals(...animal) {
    return animal
}
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", "unicorn", "bat", "giraffe", "zebra", "goat"))


//DONE -- #2:  Write a function that returns a food object with the array names as properties using Object Literals:

function combineFruit(fruit, sweets, vegetables) {
    return {
        fruit,
        sweets,
        vegetables
    }
}

console.log(combineFruit(["apple", "pear"],
    ["cake", "pie"],
    ["carrot"]))



//#3:  Use destructuring to use the property names as variables. Destructure the object in the parameter:

const vacation = {
    location: "Burly Idaho",
    duration: "2 weeks"
};

const { location, duration } = vacation;

function parseSentence() {
    return `We're going to have a good time in ${location} for ${duration}`
}
console.log(parseSentence(vacation))


//???DONE-- #4:  Use destructuring to make this code ES6:

//function returnFirst(items) {
//    const firstItem = items[0]; /*change this line to be es6*/
//    return firstItem
//}

const firstItem = ["cat"]

function returnFirst(items) {
    const [item1] = firstItem;
    return firstItem;
}
console.log(returnFirst(firstItem))

//DONE--#5:  Write destructuring code to assign variables that will help us return the expected string.
//Also, change the string to be using Template literals:


//const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

//function returnFavorites(arr) {
/*your code here*/
//    return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav"
//}
//returnFavorites(favoriteActivities)


const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr) {
    const [firstFav, secondFav, thirdFav, fourthFav, fifthFav] = favoriteActivities;/*your code here*/
    return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}.`
}
console.log(returnFavorites(favoriteActivities))



//DONE -- #6:  Use the Rest and Spread Operator to help take any number of arrays, and return one array.
//You will need to change how the arrays are passed in.You may write it assuming you will always recieve three arrays if you would like to.
/*
function combineAnimals() {

}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);

// ["dog", "cat", "mouse", "jackolope", "platypus"]
*/
const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];


function combineAnimals(...arr) {
    const allAnimals = [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]
    return allAnimals;
}

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]



//DONE --#7 Try to make the following function more ES6xy:
/*
function product(a, b, c, d, e) {
    var numbers = [a, b, c, d, e];

    return numbers.reduce(function (acc, number) {
        return acc * number;
    }, 1)
}
*/

const numbers = [1, 2, 3, 4, 5];
const giveProduct = numbers.reduce((acc, num) => acc * num);

console.log(giveProduct)


//DONE --(but not sure if correct or what intended) #8 Make the following function more ES6xy. Use at least both the rest and spread operators:
/*
function unshift(array, a, b, c, d, e) {
    return [a, b, c, d, e].concat(array);
}
*/

const arr1 = ["a", "b", "c", "d", "e"]
const arr2 = ["merry", "christmas"]

function unshift(...arr) {
    const newArr = [...arr2, ...arr1]
    return newArr
}
console.log(unshift(arr1, arr2))


//DONE -- #9 Write some destructuring code to help this function out. Use object literals to simplify it:
/*
function populatePeople(names) {
    return names.map(function (name) {
        name = name.split(" ");
          // your code
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]
*/


function populatePeople(names) {
    return names.map(function (name) {
        name = name.split(" ");
        const { firstName, lastName } = name;
        return name
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))