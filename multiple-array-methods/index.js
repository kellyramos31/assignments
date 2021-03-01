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


/*
//ALL SEPARATE FUNCTIONS:

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
const alphaLastName = over18.sort(function (a, b) {
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

//ADD <li></li> TAGS AROUND INFO AND MAKE INTO STRINGS

const makeString = alphaLastName.map(function toString(person) {
    return (`<li>`.concat(`${person.firstName} ${person.lastName} is ${person.age}</li>`))
})
console.log(makeString)
*/

//COMBINED INTO ONE FUNCTION:

function ofAge(arr) {
    const over18 = peopleArray.filter(function (person) {
        if (person.age > 18) {
            const ofAge = [];
            ofAge.push(person)
            return ofAge
        }
    })
    console.log(over18)
    over18.sort(function (a, b) {
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

    const makeString = over18.map(function toString(person) {
        return (`<li>`.concat(`${person.firstName} ${person.lastName} is ${person.age}</li>`))
    })
    console.log(makeString)

}
console.log(ofAge(peopleArray))




/*
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




/*ALLY'S SUGGESTIONS TO HELP COMBINE:
//GET OVER 18:
function sortedOfAge(arr) { //pass arr through instead of peopleArray so it will do any array
const over18 = arr.filter(overAge => overAge.age >= 18); //simplified over18 code to run on one line-- deleted if statement
over18.sort(function (a, b) { //deleted const alphaLastName
    var nameA = a.lastName.toUpperCase();
    var nameB = b.lastName.toUpperCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
})
const makeString = over18.map(function toString(person) {
    return (`<li>`.concat(`${person.firstName} ${person.lastName} is ${person.age}</li>`))
})
    return makeString //returned makestring to show the array
}
console.log(sortedOfAge(peopleArray)) //ran the peopleArray here so you could run any array into the function
*/