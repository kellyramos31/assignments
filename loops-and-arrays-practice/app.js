//DONE:  #1  Loop through the following array and count how many "computers" there are.  Log the final count:


var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]

var totalComputers;
for (var i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        console.count("computer");
    }
}


//DONE:  #2  Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    }, {
        name: "Madeline",
        age: 80,
        gender: "female"
    }, {
        name: "Cheryl",
        age: 22,
        gender: "female"
    }, {
        name: "Sam",
        age: 30,
        gender: "male"
    }, {
        name: "Suzy",
        age: 4,
        gender: "female"
    }
]

for (var i = 0; i <= peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log("old enough")
    } else {
        console.log("not old enough")
    }
}


// DONE:  Optional Bonus challenge (see direction details below)

var lightBulbArray = [2, 5, 435, 4, 3];
var sumArray = 0;

for (var i = 0; i < lightBulbArray.length; i++) {
    sumArray += lightBulbArray[i];
    if (i === (lightBulbArray.length - 1)) {
        if (sumArray % 2 === 0) {
            console.log("The light is off.")
        } else {
            console.log("The light is on!")
        }
    }
}

//Optional Bonus challenge
//Imagine you have a button that toggles a light on and off. Loop through the following array of numbers
//and toggle the button the numbers of times for each number.The array[2, 3, 2] would toggle the button 7 times.

//The light is off to start with.  Log to the console whether or not the light is on at the end.

//Sample Arrays:

//[2, 5, 435, 4, 3] // "The light is on"
////[1, 1, 1, 1, 3]   // "The light is on"
[9, 3, 4, 2]      // "The light is off"



//DONE -- OTHER PRACTICE: #1 -- Loop through the following array, and log to the console "hooray" for every party there is.

var eventsAtWork = ["work", "pretend to work", "party", "work", "meeting", "party", "daily grind", "work", "party"]

for (var i = 0; i < eventsAtWork.length; i++) {
    if (eventsAtWork[i] === "party") {
        console.log("Hooray!")
    }
}

//OTHER PRACTICE #2:  Loop through the following array, and count how many "trues" there are.
//NOTE:  not sure why this is not console logging anything??
/*
var booleans = [true, true, false, true, false, false, false]

for (var i = 0; i < booleans.length; i++) {
    if (booleans[i] === "true") {
        console.count("true");
    }
}
*/

//DONE -- OTHER PRACTICE #3: Add an isAdmin property to each of the users in this array.

var users = [
    {
        name: "Sophie",
        age: 12
    },
    {
        name: "Larry",
        age: 32
    },
    {
        name: "Cathy",
        age: 40
    }
]

for (var i = 0; i < users.length; i++) {
    users[i].isAdmin = "yes";
    console.log(users);
}

