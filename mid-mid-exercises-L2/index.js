// You will be using this array of user objects for the exercises. Use console.log to see your answers in the terminal. View the exercises below:
const userData = [
    {
        username: "bilboBurglar",
        friends: 25,
        _id: 5730945
    },
    {
        username: "thorGuy",
        friends: 500,
        _id: 230983
    },
    {
        username: "pokemonCatcher",
        friends: 331,
        _id: 357984
    },
    {
        username: "hogwartsWitch",
        friends: 700,
        _id: 478625
    },
    {
        username: "celebrityCrush",
        friends: 5999,
        _id: 356789
    }
]
// arr.map - Map through the array of objects and for each user, return a greeting that says, "Hello, username. Welcome to TRON."
//code for this exercise:

//re-written in shortened ES6 syntax:  

// arr.filter - Filter through the array and return the objects who have 500 or fewer friends.
//code for this exercise:

//re-written in shortened ES6 syntax:  

// arr.find - Using arr.find, find the user object whose _id matches the number 478625
//code for this exercise:

//re-written in shortened ES6 syntax:  

// arr.sort - Sort the array in descending order by the users' number of friends (users with more friends should be first)
//code for this exercise:

//re-written in shortened ES6 syntax:  


// arr.reduce - Use arr.reduce to return the total number of users who have 500 or more friends
//code for this exercise:

const moreOrEqual = userData.reduce(function (final, friendCount) {
    if (friendCount.friends >= 500) {
        final.friendsFiveHundredAndMore++
    }
    return final

}, ({ friendsFiveHundredAndMore: 0 }))

console.log(moreOrEqual)

//re-written in shortened ES6 syntax:
/* FROM ISA:
const moreOrEqual = userData.reduce((final, friendCount) =>
   if (friendCount.friends >= 500) {
    final.friendsFiveHunderAndMore++
}
    return final
), ({ friendsFiveHundredAndMore: 0 })
*/

// setInterval & setTimeout - Using a combination of arr.find or arr.filter & setInterval and setTimeout, find the user whose username is celebrityCrush, and console log that username every second for 5 seconds, then stop.

