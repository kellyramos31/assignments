//DONE -- 1) Turn an array of numbers into a total of all the numbers
const numArr = [1, 2, 3, 4, 5, 6]

//code for this exercise:

/*
const result1 = numArr.reduce(function total(final, num) {
    return final += num
})
console.log(result1)
*/
//re-written in shorter ES6 syntax:

const result1 = numArr.reduce((final, num) => final += num)
console.log(result1)

//console.log(total([1, 2, 3])); // 6


//DONE --2) Turn an array of numbers into a long string of all those numbers.
const numsArr = [1, 2, 3]

const stringItNow = numsArr.reduce((final, num) => {
    final += num.toString();
    return final
})
console.log(stringItNow)


//console.log(stringConcat([1, 2, 3])); // "123"


//DONE(except for ES6 syntax) -- 3) Turn an array of voter objects into a count of how many people voted
//Note: You don't necessarily have to use reduce for this, so try to think of multiple ways you could solve this.

var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];


const voted = voters.reduce((final, voter) => {
    if (voter.voted) {
        final.voted++
    }
    return final

}, { voted: 0 })

console.log(voted)


//code for this exercise with reduce:
/*
const result3 = voters.reduce(function totalVotes(final, voter) {
    if (voter.voted) {
        final.voted++
    }
    return final
}, { voted: 0 })

console.log(result3)
*/

//rewritten with shortened ES6 syntax (NOTE:  but does not put it into an object):
const result3 = voters.reduce((final, voter) => voter.voted += final, 0)
console.log(result3)

//console.log(totalVotes(voters)); // 7


//DONE --4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];


const addItUp = wishlist.reduce((final, cost) => {
    final.total += cost.price
    return final
}, { total: 0 })

console.log(addItUp)

//code for this exercise:
/*

const result4 = wishlist.reduce(function shoppingSpree(final, cost) {
    return final += cost.price
}, 0)

console.log(result4); // 227005
*/
//re-written in shorter ES6 syntax:
const result4 = wishlist.reduce((final, cost) => final += cost.price, 0)
console.log(result4)

//DONE -- 5) Given an array of arrays, flatten them into a single array

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]

//code for this exercise:
/*  
const result5 = arrays.reduce(function flatten(final, array) {
    return final.concat(array);
})
console.log(result5)
*/
//re-written in shorter ES6 syntax:

const result5 = arrays.reduce((final, array) => final.concat(array));
console.log(result5)

//console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
//Note: Take a look at Array.concat() to help with this one


//DONE -- 6) Given an array of potential voters, return an object representing the results of the vote
//Include how many of the potential voters were in the ages 18 - 25, how many from 26 - 35, how many from 36 - 55, 
//and how many of each of those age ranges actually voted.The resulting object containing this data should have 6 properties.
//See the example output at the bottom.

//
var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];


const result6 = voters.reduce(function voterResults(final, vote) {
    if (vote.age >= 18 && vote.age <= 25) {
        if (vote.voted === true) {
            final.numYoungVotes++
        } final.numYoungPeople++
    } else if (vote.age >= 26 && vote.age <= 35) {
        if (vote.voted === true) {
            final.numMidVotes++
        } final.numMidPeople++
    } else if (vote.age >= 26 && vote.age <= 55) {
        if (vote.voted === true) {
            final.numOlderVotes++
        } final.numOlderPeople++
    }
    return final
}, ({ numYoungVotes: 0, numYoungPeople: 0, numMidVotes: 0, numMidPeople: 0, numOlderVotes: 0, numOlderPeople: 0 }))

console.log(result6)


//console.log(voterResults(voters)); 
// Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/


//DONE -- EXTRA CREDIT - PART 1
//DONE runs in browser -- Using AJAX, do a GET request to your own Github repositories endpoint.
//The URL will be https://api.github.com/users/<YOUR GITHUB USERNAME HERE>/repos.

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.github.com/users/kellyramos31/repos", true);
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const JSONdata = xhr.responseText;
        const data = JSON.parse(JSONdata)
        console.log(data)
        const allWatchersResult = data.reduce((final, count) => final += count.watchers_count, 0)
        console.log(allWatchersResult)
    }
}


//DONE -- EXTRA CREDIT - PART 2
//Once you get the data, use.reduce() to figure out how many watchers you have across all
//of your repositories.Don't be too disappointed if the number is 0. You're still new at this :)

//Note: If you've learned how to use the axios library, you can do this in node. Otherwise,
//you'll want to run this code in the browser's JavaScript context and either use XMLHttpRequest
//or jQuery's AJAX methods, meaning you'll need an HTML page and an associated script tag for your JavaScript.

