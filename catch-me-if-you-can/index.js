//1a) Write a function that returns the sum of two numbers.
//Throw an error if either argument is not of the data type number:
//check data types first and throw error

/*
function sum(x, y) {
    if (typeof (x) !== "number" || typeof (y) !== "number") {
        throw ("Not all of your inputs are numbers")
    }
    console.log(x + y)
    return x + y;
}


sum(2, "3")
*/

//1b) Call the sum function inside a try block using "1" and "2" as arguments.
//Use console.log within a catch block to inform the user of the error.
/*
function sumAgain(x, y) {
    console.log(x + y)
    return x + y;
}

try {
    sumAgain("1", "2")
    if (typeof (x) !== "number" || typeof (y) !== "number") {
        throw new Error("Your problem is that not all of these are numbers")
    }
}
catch (err) {
    console.log(err)
}
*/


//2a) Given a user object, write a function called login that takes a username and password as parameters.
//Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"
/*
var user = { username: "sam", password: "123abc" };

function login(username, password) {
    if (username === user.username && password === user.password) {         //check credentials
        console.log("login successful")
    } else {
        throw ("Something went wrong.  Login unsuccessful.  Please try again.")

    }
}

//TEST
login("sam", "123abc")
login("daisy", "65498Z")
*/

//2b) Call the login function within a try block.In one instance use the correct credentials, 
//and in another use incorrect ones.   Make sure you see the appropriate message!

var user = { username: "sam", password: "123abc" };

function login(username, password) {
    if (username === user.username && password === user.password) {         //check credentials
        console.log("yes, it worked. you are logged in")
    } else {
        throw new Error("there's a problem.  please try logging in again")
    }
}

try {
    login("sam", "456abc");
}

catch (err) {
    console.log(err)
}




