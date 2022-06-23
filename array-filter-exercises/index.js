
// //DONE -- 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.


// const numArray = [3, 6, 8, 2]

// //practice again
// const fiveOrMore = numArray.filter(num => num >= 5)
// console.log(fiveOrMore)


// /*
// //code for exercise:
// const result = numArray.filter(function fiveAndGreaterOnly(num) {
//     if (num > 5) {
//         return num
//     }
// })

// console.log(result)
// */
// /*
// //re-written with shortened syntax:
// const result = numArray.filter(num => num > 5)
// console.log(result)
// */
// // test
// //console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]


// //DONE -- 2) Given an array of numbers, return a new array that only includes the even numbers.

// //practice again
// const evensOnly = numArray.filter(num => num % 2 === 0)
// console.log(evensOnly)


// //code for exercise:
// /*
// const resultEvens = numArray.filter(function evensOnly(num) {
//     if (num % 2 === 0) {
//         return num
//     }
// })
// console.log(resultEvens)
// */
// //re-written with shortened syntax:
// /*
// const resultEvens = numArray.filter(num => num % 2 === 0)
// console.log(resultEvens)
// */
// // test
// //console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]



// //DONE -- 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
// const stringsArr = ["dog", "wolf", "by", "family", "eaten", "camping"]

// //practice again
// const fiveCharsOrLess = stringsArr.filter(string => string.length <= 5)
// console.log(fiveCharsOrLess)


// //code for exercise:
// /*
// const fiveOrLess = stringsArr.filter(function fiveCharactersOrFewerOnly(string) {
//     if (string.length <= 5) {
//         return string
//     }
// })
// console.log(fiveOrLess)
// */

// //re-written with shortened syntax:
// /*
// const fiveOrLess = stringsArr.filter(string => string.length <= 5)
// console.log(fiveOrLess)
// */

// // test
// //console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]



// //DONE -- 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

// const people = [
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]

// //practice again

// const clubMembers = people.filter(person => person.member)
// console.log(clubMembers)


// //code for exercise:
// /*
// const yesIlluminati = people.filter(function peopleWhoBelongToTheIlluminati(person) {
//     if (person.member == true) {
//         return person
//     }
// })
// console.log(yesIlluminati)
// */

// //re-written with shortened syntax:
// /*
// const yesIlluminati = people.filter(person => person.member === true)
// console.log(yesIlluminati)
// */

// // test
// // =>
// //[ { name: 'Angelina Jolie', member: true },
// //  { name: 'Paris Hilton', member: true },
// //  { name: 'Bob Ziroll', member: true } ]



// //DONE--5) Make a filtered list of all the people who are old enough to see The Matrix(older than 18)
// const nameAge = [
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 }
// ]

// //practice again

// const oldEnough = nameAge.filter(person => person.age > 18)
// console.log(oldEnough)

// //code for exercise:
// /*
// const oldEnough = nameAge.filter(function ofAge(num) {
//     if (num.age > 17) {
//         return nameAge.name + " " + nameAge.age
//     }
// })
// console.log(oldEnough)
// */
// //re-written with shortened syntax:
// /*
// const oldEnough = nameAge.filter(num => num.age > 17)
// console.log(oldEnough)
// */
// // test
// // =>
// //[ { name: 'Angelina Jolie', age: 80 },
// //  { name: 'Bob Ziroll', age: 100 } ]


// // FIBONACCI SEQUENCE:

// // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

// //Shane using:
// //1, 1, 2, 3, 5, 8, 13, 21, 34


// // CHALLENGE:
// // Fibonacci numbers are a series of numbers, beginning with 1, 1 and continuing such that each number is the result of adding the two previous numbers together.For example, the first 6 Fibonacci numbers are calculated as follows:
// // 1(default start number)
// // 1, 1(default start numbers)
// // sum(1, 1), 2
// // 1, sum(1, 2), 3
// // 1, 1, sum(2, 3), 5
// // 1, 1, 2, sum(3, 5), 8
// // 1, 1, 2, 3, sum(5, 8), 13
// // Challenges
// // LEVEL 1
// // Write a function that takes an integer length as an argument and returns an array of length Fibonacci numbers in the appropriate order.
// //     Example:
// // fibArray(6) // [1,1,2,3,5,8,13]
// // LEVEL 2
// // Write a function that takes an integer i as an argument and returns an integer representing the i - th value of the Fibonacci.
// //As a bonus, this function should be called recursively.
// //     Example:
// // // passing in 4 should return the 4th Fibonacci number, which is 3
// // fibNum(4) // 3 
// // fibNum(6) //8




// // function fight() {
// //     const { opponent } = enemies.splice(Math.floor(Math.random() * enemies.length), 1)
// //     let target = new Enemy(opponent.name, opponent.health);
// //     console.log(target) // => Enemy { name: { name: 'Karen', health: 30 }, health: undefined }
// // }




// // class Player {
// //     constructor(name, totalCoins, status, hasStar, gameActive) {
// //         this.name = name;
// //         this.totalCoins = totalCoins;
// //         this.status = status;
// //         this.hasStar = hasStar;
// //         this.gameActive = gameActive;
// //     }

// //     setName() {
// //         this.name
// //         this.randomStatus()
// //     }

// //     gotHit() {
// //         if (this.status === "Powered Up") {
// //             this.status = "Big";
// //             this.gameActive = true;
// //             return this.status
// //         } else if (this.status === "Big") {
// //             this.status = "Small";
// //             this.gameActive = true;
// //             return this.status
// //         } else if (this.status === "Small") {
// //             this.status = "Dead"
// //             this.gameActive = false;
// //             clearInterval(intervalId);
// //             gameOver = true;
// //             return this.status;
// //         }
// //     }

// //     gotPowerUp() {
// //         if (this.status === "Powered Up") {
// //             this.hasStar = true;
// //             return this.hasStar;
// //         } else if (this.status === "Small") {
// //             this.status = "Big";
// //             return this.status;
// //         } else if (this.status === "Big") {
// //             this.status = "Powered Up";
// //             return this.status;
// //         }

// //     }

// //     addCoin() {
// //         this.totalCoins += 1;
// //         return this.totalCoins
// //     }

// //     randomStatus() {
// //         const statusNumber = Math.floor(Math.random() * 3)
// //         console.log(statusNumber)
// //         if (statusNumber === 0) {
// //             this.gotHit()
// //             this.print()
// //         } else if (statusNumber === 1) {
// //             this.gotPowerUp()
// //             this.print()
// //         } else if (statusNumber === 2) {
// //             this.addCoin()
// //             this.print()
// //         }
// //     }

// //     print() {
// //         console.log(`Name:  ${this.name}`)
// //         console.log(`Status: ${this.status}`)
// //         console.log(`Total Coins:  ${this.totalCoins}`)
// //         console.log(`Has Star:  ${this.hasStar}`)
// //     }

// // }


// // let gameOver = false;

// // const namePicked = whichName();

// // function whichName() {
// //     const nameNumber = (Math.floor(Math.random() * 2));
// //     //console.log(nameNumber)
// //     if (nameNumber === 0) {
// //         const name = new Player("Mario", 0, "Powered Up", false, true);
// //         name.setName()
// //         //console.log(name)
// //         return name

// //     } else if (nameNumber === 1) {
// //         const name = new Player("Luigi", 0, "Powered Up", false, true)
// //         name.setName()
// //         //console.log(name)
// //         return name
// //     }
// // }

// // //console.log(namePicked)

// // const intervalId = setInterval(() => namePicked.randomStatus(), 1000);


// const enemies = [
//     {
//         name: "Prison Mike",
//         health: 25
//     },
//     {
//         name: "Kyle",
//         health: 10
//     },
//     {
//         name: "Karen",
//         health: 30
//     }];


// class Enemy {
//     constructor(name, health) {
//         this.name = name,
//             this.health = health
//     }
// }
// function fight() {
//     const opponent = enemies.splice(Math.floor(Math.random() * enemies.length), 1)
//     console.log("opponent", opponent)
//     let target = new Enemy(opponent[0].name, opponent[0].health);
//     console.log("target", target) // => Enemy { name: { name: 'Karen', health: 30 }, health: undefined }
// }

// fight()



// function squareOrSquareRoot(array) {
//       const newArr = []
//   for(let i=0; i< array.length; i++){

//   if((((Math.sqrt(array[i]))%1))===0){
//     console.log(newArr.push((Math.sqrt(array[i]))))
//     console.log(newArr)
//   } else {
//     console.log(newArr.push(( array[i]*array[i])))
//     console.log(newArr)
// }

// }
// return newArr
// }
// squareOrSquareRoot([1,2,3])




// function betterThanAverage(classPoints, yourPoints) {
//   // Your code here
//   let classavg = 0
//         for(let i=0; i<=classPoints.length-1; i++){
//           classavg += classPoints[i]
//           console.log(classavg)
//         }
//   if ((classavg/classPoints.length) <= yourPoints){
//     console.log(classPoints.length)
//     console.log(classavg/classPoints.length)
//     console.log("true")
//   } else {
//     console.log(classPoints.length)
//     console.log(classavg/classPoints.length)
//     console.log("false")
//   }
// }

// betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)


// // A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.
// // Some boomerang examples:
// // [3, 7, 3], [1, -1, 1], [5, 6, 5]
// // Create a function called countBoomerangs that accepts an array of integers and returns the total number of boomerangs in an array.
// // To illustrate:
// // [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// // // 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]
// // Be aware that boomerangs can overlap, like so:
// // [1, 7, 1, 7, 1, 7, 1]
// // // 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]
// // Test your solution with the following:
// // console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1])) // 2

// // console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9])) // 1

// // console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9])) // 0

// // console.log(countBoomerangs([1,4,1,4])) // 2

// // console.log(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2])) // 3

// // console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1])) // 5
// // Notes:
// // The boomerangs are in a sequence, so this array [1,1,4] will return 0. Similarly, [1,1,4,4] will also return 0. [1,4,1, 4] will return 2, because the sub-arrays [1,4,1] and [4,1,4] can be formed
// // Return only the number of boomerangs, not the list of boomerangs
// // [5, 5, 5] (triple identical digits) is NOT considered a boomerang because the middle digit is identical to the first and last.


// //note:  should add something to stop loop before end -- so i < array.length-2 (instead of i< array.length)
// function boomerang(array){
//     let boomCount = 0
//     for(let i=0; i < array.length; i++){
//         if( (array[i] === array[i+2]) && (array[i+1] !== array[i]) ){
//             boomCount++
//     }
// }
//     return boomCount
// }

// boomerang([1, 7, 1, 7, 1, 7, 1])

// //so could change it to the following:
// function boomerang(array){
//     let boomCount = 0
//     for(let i=0; i < array.length-2; i++){
//         if( (array[i] === array[i+2]) && (array[i+1] !== array[i]) ){
//             boomCount++
//     }
// }
//     return boomCount
// }






// // const double = [2, 5, 100]
//   function doubleNumbers(numArr){
//       return numArr.map(num=>num*2)
//   }
// console.log(doubleNumbers([2,5,10]))



// //   console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
// //   //2
// //   function stringItUp(arr){
// //     const arr = [2, 5, 100]
// //     const result = arr.map(num=> "num")
// //   }
// //   console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]


// //CODE CHALLENGE
// // Create a function that determines whether a number is Oddish or Evenish.
// // A number is Oddish if the sum of all of its digits is odd, and a number is
// // Evenish if the sum of all of its digits is even. If a number is Oddish,
// // return "Oddish". Otherwise, return "Evenish". You can assume that all input
// // values will be positive whole numbers.


// // Sample data for testing: 
// // console.log(oddishOrEvenish(43)) 
// // // 4 + 3 = 7
// // // "Oddish"

// // console.log(oddishOrEvenish(373)) 
// // // 3 + 7 + 3 = 13
// // // "Oddish"

// // console.log(oddishOrEvenish(4433)) 
// // // 4 + 4 + 3 + 3 = 14
// // // "Evenish"

// // console.log(oddishOrEvenish(1020403)) 
// // 1 + 0 + 2 + 0 + 4 + 0 + 3 = 10
// // "Evenish"

// // function oddishOrEvenish(num) {
// // 	const numStringArr = num.toString().split("")
// //     console.log(numStringArr)
// //     let sum = numStringArr.reduce((final, curr => final += Number(curr)
// //     // let sum = numStringArr.map(a=>Number(a)).reduce((final, num) => final += num)
// //     if (sum%2 === 0){
// //         return "Evenish"
// //     }
// //         return "Oddish"
// // }

// // function oddishOrEvenish(num) {
// // 	const numStringArr = num.toString().split("")
// //     let sum = numStringArr.reduce((final, curr) => {
// // 			return final += parseInt(curr)
// // 		}, 0)
    
// //     sum%2 === 0 ? "Evenish" : "Oddish"

// // }

// function oddishOrEvenish(num) {
// 	const numStringArr = num.toString().split("")
//     let sum = numStringArr.reduce((final, curr) => {
// 			return final += Number(curr)
// 		}, 0)
//     if (sum%2 === 0){
//         return "Evenish"
//     } else {
//         return "Oddish"
// }}
    
// console.log(oddishOrEvenish(373)) 





function isPalendrome(str){
  // break up string
    const checkPalin = str.split("")
    console.log(checkPalin)
  // reverse
    checkPalin.reverse()
    
  // return put back together === str
    const joinBack = checkPalin.join("")
    console.log(joinBack)

    str === joinBack ? console.log("It's a palindrome") : console.log("It's not a palindrome")
}

isPalendrome("kayak")
