
/*PRELIMINARIES:
DONE 1.  Write a for loop that prints to the console the numbers 0 through 9.
DONE 2.  Write a for loop that prints to the console 9 through 0.
DONE 3.  Write a for loop that prints these fruits to the console.
    var fruit = ["banana", "orange", "apple", "kiwi"]

BRONZE:
DONE 1.  Write a for loop that will push the numbers 0 through 9 to an array.
DONE 2.  Write a for loop that prints to the console only even numbers 0 through 100.
DONE 3.  Write a for loop that will push every other fruit to an array.
    var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

SILVER:
DONE 1.  Write a loop that will print out all the names of the people of the people array
DONE 2.  Write a loop that pushes the names into a names array, and the occupations into an occupations array.
DONE 3.  Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford",
and every other occupation to another array starting with, in this case, "Singer".

Think about what good names for the arrays would be. Since it will be an array of each name or occupation,
the plurals of name and occupation would be appropriate.
*/

//PRELIMINARIES:
//1.  Write a for loop that prints to the console the numbers 0 through 9.

//var numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
/*
for (var i = 0; i < numbersArr.length; i++) {
    console.log(numbersArr[i]);
}
*/


//2.  Write a for loop that prints to the console 9 through 0.
/*
for (var i = numbersArr.length - 1; i >= 0; i--) {
    console.log(numbersArr[i]);
}
*/


//3.  Write a for loop that prints these fruits to the console.
//var fruit = ["banana", "orange", "apple", "kiwi"]
/*
var fruit = ["banana", "orange", "apple", "kiwi"];

for (var i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}
*/


//BRONZE
//DONE -- 1.  Write a for loop that will push the numbers 0 through 9 to an array.
/*
var numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

var newNumbersArray = [];

for (var i = 0; i < 10; i++) {
    newNumbersArray.push([i]);
}

console.log(newNumbersArray)
*/

//DONE -- 2.  Write a for loop that prints to the console only even numbers 0 through 100.
/*
for (var i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}
*/


//DONE -- 3.  Write a for loop that will push every other fruit to an array.
//var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
/*
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

for (var i = 0; i < fruit.length; i++) {
    if (i % 2 !== 0) {
        console.log(fruit[i]);
    }
}
*/

//SILVER
/*
var peopleArray = [
    {
        name: "Harrison Ford",
        occupation: "Actor"
    },
    {
        name: "Justin Bieber",
        occupation: "Singer"
    },
    {
        name: "Vladimir Putin",
        occupation: "Politician"
    },
    {
        name: "Oprah",
        occupation: "Entertainer"
    }
]
*/

//SILVER
//DONE -- 1.  Write a loop that will print out all the names of the people of the people array
/*
for (var i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name);
}
*/

//DONE -- 2.  Write a loop that pushes the names into a names array, and the occupations into an occupations array.
/*
var namesArray = [];
var occupationsArray = [];

for (var i = 0; i < peopleArray.length; i++) {
    namesArray.push(peopleArray[i].name);
    occupationsArray.push(peopleArray[i].occupation)
}
console.log(namesArray);
console.log(occupationsArray);
*/

//DONE -- 3.  Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford",
//   and every other occupation to another array starting with, in this case, "Singer".
//["Harrison Ford", "Vladimir Putin"] // names
//["Singer", "Entertainer"] // occupations
/*
var secondNamesArray = [];
var secondOccupationsArray = [];

for (var i = 0; i < peopleArray.length; i++) {
    if (i % 2 === 0) {
        secondNamesArray.push(peopleArray[i].name)
    } else {
        secondOccupationsArray.push(peopleArray[i].occupation)
    }
}
console.log(secondNamesArray);
console.log(secondOccupationsArray);
*/

//GOLD:
/*
DONE -- 1.  Create an array that mimics a grid like the following using nested for loops:
    [[0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]]

*/
//THIS CODE BELOW IS GIVING ME 3 ARRAYS (with var j going from 0 to 8), BUT WITH 9 zeroes each
//Works now with both vars i & j going from 0 to 3
//NOTE:  *** My answer to Gold #1 may not be same thing b/c they are 3 separate arrays *****
//NOTE:  see other code below (w/ Isa's help) that creates the above grid correctly

/*
var newArray1 = [];
var newArray2 = [];
var newArray3 = [];

for (var i = 0; i <= 2; i++) {
    for (var j = 0; j <= 2; j++) {
        if (j === 0) {
            newArray1.push([i].value = 0);
        } else if (j === 1) {
            newArray2.push([i].value = 0);
        } else if (j === 2) {
            newArray3.push([i].value = 0);
        }
    }
}
console.log(newArray1);
console.log(newArray2);
console.log(newArray3);
*/

/*
//THIS CODE BELOW WORKS NOW!!! w/ Isa's help; right now it logs 3 arrays (0,1,2)
var newArr = []

for (var i = 0; i <= 2; i++) {
    var newArr2 = [];
    for (var j = 0; j <= 2; j++) {
        newArr2.push(0);
    }
    newArr.push(newArr2)
}
console.log(newArr);
*/





//THIS CODE BELOW WORKS NOW!!! w/ Isa's help; right now it logs 3 arrays (0,1,2)
/*
var newArr = []

for (var i = 0; i <= 2; i++) {
    var newArr2 = [];
    for (var j = 0; j <= 2; j++) {
        newArr2.push(j);
    }
    newArr.push(newArr2)
}
console.log(newArr);
*/

/*


DONE -- 2.Create an array that mimics a grid like the following using nested for loops:

    [[0, 0, 0],
    [1, 1, 1],
    [2, 2, 2]]

    NOTE:  ***My answer to Gold #2 may not be same thing b/c 3 separate arrays*****
*/
/*
var newArray4 = [];
var newArray5 = [];
var newArray6 = [];

for (var i = 0; i <= 2; i++) {
    for (var j = 0; j <= 2; j++) {
        if (j === 0) {
            newArray4.push([i].value = 0);
        } else if (j === 1) {
            newArray5.push([i].value = 1);
        } else if (j === 2) {
            newArray6.push([i].value = 2);
        }
    }
}
console.log(newArray4);
console.log(newArray5);
console.log(newArray6);
var originalArr =
    [[0, 0, 0],
    [1, 1, 1],
    [2, 2, 2]]
console.log(originalArr)

*/

//THIS CODE BELOW WORKS NOW!!! w/ Isa's help; right now it logs 3 arrays (0,1,2)
//TRY TO ALTER THIS TO GET FOLLOWING GRID:
/* [[0, 0, 0],
    [1, 1, 1],
    [2, 2, 2]]*/


/*
var newArr = []

for (var i = 0; i <= 2; i++) {
    var newArr2 = [];
    for (var j = 0; j <= 2; j++) {
        newArr2.push(i);
    }
    newArr.push(newArr2)
}
console.log(newArr);
*/


/*
DONE -- 3.Create an array that mimics a grid like the following using nested for loops:

NOTE:  ***My answer to Gold #3 may not be same thing b/c 3 separate arrays***** SEE OTHER CODE BELOW w/ Isa's help

    [[0, 1, 2],
    [0, 1, 2],
    [0, 1, 2]]
    */
/*
var newArray7 = [];
var newArray8 = [];
var newArray9 = [];

for (var i = 0; i <= 2; i++) {
    for (var j = 0; j <= 2; j++) {
        if (j === 0) {
            newArray7.push([i].value = i);
        } else if (j === 1) {
            newArray8.push([i].value = i);
        } else if (j === 2) {
            newArray9.push([i].value = i);
        }
    }
}
console.log(newArray7);
console.log(newArray8);
console.log(newArray9);
*/

/* THIS CODE HERE WORKS (w/ Isa's help)
//THIS CODE BELOW WORKS NOW!!! w/ Isa's help; right now it logs 3 arrays (0,1,2)
var newArr = []

for (var i = 0; i <= 2; i++) {
    var newArr2 = [];
    for (var j = 0; j <= 2; j++) {
        newArr2.push(j);
    }
    newArr.push(newArr2)
}
console.log(newArr);
*/




/*
DONE -- 4.Given a grid like the previous ones, write a nested for loop that would change every number to an x.
var grid = [["x", ...],
["x", ...],
["x", ...], ...]
*/


var grid = [
    [0, 1, 2],
    [0, 1, 2],
    [0, 1, 2],
]


//var grid = [0, 1, 2]
//grid.splice(0, 3, "x", "x", "x");
//console.log(grid)


for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
        grid.splice(0, 3, "x", "x", "x");             //cuts the three items out of the array & replaces values with "x"
        console.log(grid);                           //check value of grid array
    }
}





