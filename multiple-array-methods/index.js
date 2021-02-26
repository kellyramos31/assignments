//You should use multiple array methods to solve these problems.Don't use for loops!
//Using the provided peopleArray(bottom of this article), write a function that:

//Returns a list of everyone older than 18, which is
//sorted alphabetically by last name, and where
//each name and age is embedded in a string that looks like an HTML < li > element.

//Provided Array
var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]



//GET OVER 18
const over18 = peopleArray.filter(function (person) {
    if (person.age > 18) {
        const ofAge = [];
        ofAge.push(person)
        return ofAge
    }
})
console.log(over18)


//SORT BY LAST NAME
//below sort code block from Dev Moz -- BUT WHY DOES THIS WORK & WHY HAVE TO DO IT THIS WAY?
const alphaLastName = peopleArray.sort(function (a, b) {
    var nameA = a.lastName.toUpperCase(); // ignore upper and lowercase
    var nameB = b.lastName.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    // names must be equal
    return 0;
});
console.log(alphaLastName)

//ADD <li></li> TAGS AROUND INFO AND MAKE A STRING
//maybe use MAP for this??

const makeString = peopleArray.map(function toString(person) {
    return (`<li>`.concat(`${person.firstName} ${person.lastName} is ${person.age}</li>`))
})
console.log(makeString)



/* MY CODE FROM MAP EXERCISES
Output:
[
    "<li>Kyle Mooney is 27</li>",
    "<li>Sarah Palin is 47</li>",
    "<li>Rick Sanchez is 78</li>",
    "<li>Morty Smith is 29</li>",
    "<li>Lev Tolstoy is 82</li>"
]
*/

/*
Extra Credit
Create another array of one or more individuals and add it to the original array.
Create a function that filters out all people who's last names end with "y" or "a" and save those people in another array.
Remove the second individual from the array.
Return the array in reverse order.
*/


/*
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

const resultMovie = movieAge.map(function makeStrings(movieAge) {
    if (movieAge.age > 18) {
        return movieAge.name.concat(" can go to The Matrix!")
    } else {
        return movieAge.name.concat(" is underage!!")
    }
})
console.log(resultMovie)

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


//code for this exercise:
const domReady = readyToPutInTheDom.map(function readyForDom(readyToPutInTheDom) {
    return "<h1>" + readyToPutInTheDom.name + "</h1>" + "<h2>" + readyToPutInTheDom.age + "</h2>";
})
console.log(domReady)


//code rewritten with ES6 syntax:
const domReady = readyToPutInTheDom.map(readyToPutInTheDom => "<h1>" + readyToPutInTheDom.name + "</h1>" + "<h2>" + readyToPutInTheDom.age + "</h2>")
console.log(domReady)

// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]
*/