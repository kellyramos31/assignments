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
// arr.filter - Filter through the array and return the objects who have 500 or fewer friends.
// arr.find - Using arr.find, find the user object whose _id matches the number 478625
// arr.sort - Sort the array in descending order by the users' number of friends (users with more friends should be first)
// arr.reduce - Use arr.reduce to return the total number of users who have 500 or more friends
// setInterval & setTimeout - Using a combination of arr.find or arr.filter & setInterval and setTimeout, find the user whose username is celebrityCrush, and console log that username every second for 5 seconds, then stop.