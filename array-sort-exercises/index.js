//Use the built -in .sort() method on arrays to solve all of these problems

//Feel free to copy and paste the function and tests in this assignment.

//DONE -- 1) Sort an array from smallest number to largest

//code for this exercise:

numArr = [1, 90, 5, 2, 3, 20]

//practice again
const smallToLarge = numArr.sort((a, b) => a - b)
console.log(smallToLarge)

/*
numArr.sort(function leastToGreatest(a, b) {
    return a - b;
})
console.log(numArr)
*/
//re-written to shorter ES6 version:
/*
numArr.sort((a, b) => a - b)
console.log(numArr)
*/


//console.log(leastToGreatest()); // [1, 2, 3, 5, 20, 90] 

//DONE --2) Sort an array from largest number to smallest
//code for this exercise:

//practice again
const largestToSmallest = numArr.sort((a, b) => b - a)
console.log(largestToSmallest)


/*
numArr.sort(function greatestToLeast(a, b) {
    return b - a;
})
console.log(numArr)
*/
//rewritten in shorter ES6:
/*
numArr.sort((a, b) => b - a)
console.log(numArr)
*/
//console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1]


//DONE -- 3) Sort an array from shortest string to longest
wordArr = ["dog", "wolf", "by", "family", "eaten"]

//practice again
const shortStringToLongString = wordArr.sort((a, b) => a.length - b.length)
console.log(shortStringToLongString)


//code for this exercise:
/*
wordArr.sort(function lengthSort(a, b) {
    return a.length - b.length
})
console.log(wordArr); // ["by", "dog", "wolf", "eaten", "family"]
*/
//re-written in shorter ES6:
/*
wordArr.sort((a, b) => a.length - b.length)
console.log(wordArr)
*/

//DONE -- 4) Sort an array alphabetically
//note:  when Googled it, said to just use .sort() without passing in any arguments to alphabetize.
sameWordArr = ["dog", "wolf", "by", "family", "eaten"]

//practice again 
const alphabetize = sameWordArr.sort()
console.log(alphabetize)


//code for this exercise:
/*
sameWordArr.sort()
console.log(sameWordArr)
*/
//console.log(alphabetical()); // ["by", "dog", "eaten", "family", "wolf"]


//5) Sort the objects in the array by age
characterArr = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

//practice again
const sortByAge = characterArr.sort((a, b) => a.age - b.age)
console.log(sortByAge)

//code for this exercise:
/*
characterArr.sort(function byAge(a, b) {
    return a.age - b.age;
})
console.log(characterArr)
*/
//rewritten in shorter ES6:
/*
characterArr.sort((a, b) => a.age - b.age);
console.log(characterArr)
*/


// => [ { name: 'Misunderstood Observer', age: 2 },
//  { name: 'Quiet Samurai', age: 22 },
//  { name: 'Unlucky Swami', age: 77 },
//  { name: 'Arrogant Ambassador', age: 100 } ]


//L5 PROJECT CODE -- GET ALL & POST ONE
// //GET Request - ALL
// inventoryRouter.get("/", (req, res, next) => {
//     Inventory.find((err, inventories) => {
//         if (err) {
//             response.status(500)
//             return next(err)
//         }
//         return res.status(200).send(inventories)
//     })
// })


// //GET Request - ONE


// //POST Request - ADD ONE
// inventoryRouter.post("/", (req, res, next) => {
//     console.log(req.params)
//     req.body.inventory = req.params.inventoryID
//     const newInventory = new Inventory(req.body)
//     newInventory.save((err, savedInventory) => {
//         if (err) {
//             res.status(500)
//             return next(err)
//         }
//         return res.status(201).send(savedInventory)
//     })
// })


//inventoryRouter

// const express = require("express")
// const inventoryRouter = express.Router()
// const Inventory = require("../models/inventory.js")



//GET Request - ALL


//GET Request - ONE


//POST Request - ADD ONE


//PUT Request - EDIT/UPDATE ONE
// inventoryRouter.put("/:inventoryID", (req, res, next) => {
//     Inventory.findOneAndUpdate(
//         { _id: req.params.inventoryID },
//         req.body,
//         { new: true },
//         (err, updatedInventory) => {
//             if (err) {
//                 res.status(500)
//                 return next(err)
//             }
//             return res.status(201).send(updatedInventory)
//         }
//     )
// })

//DELETE Request - ONE
// inventoryRouter.delete("/:inventoryID", (req, res, next) => {
//     Inventory.findOneAndDelete(
//         { _id: req.params.inventoryID },
//         (err, deletedInventory) => {
//             if (err) {
//                 res.status(500)
//                 return next(err)
//             }
//             return res.status(200).send(`Successfully deleted inventory item ${deletedInventory.title} with SKU ${deletedInventory.SKU}`)
//         })
// })

//GET INVENTORY BY SEARCH TITLE TERM (use mongoDB method $regex)
// "i" means case insensitive


//FILTER BY CATEGORY
//$filter
//$and
//$or
//NOTE:  When have both above & below code:  it's returning ALL items, instead of filtered
//NOTE:  HOWEVER, if I comment out the code above, then the below code works; does it need to be combined with above???  HOW COMBINE??

// inventoryRouter.get("/search", (req, res, next) => {
//     const { category } = req.query
//     const pattern = new RegExp(category)
//     Inventory.find({ category: { $regex: pattern, $options: "i" } },
//         (err, categories) => {
//             if (err) {
//                 res.status(500)
//                 return next(err)
//             }
//             return res.status(200).send(categories)
//         })
// })


//SORT BY CATEGORY
//.find().sort()
//$match(), $group(), $sort()
//QUESTION:  where is best place for SORTING?  --Here in router/mongoDB, or better in React??




// module.exports = inventoryRouter

//GET Request - Total value of the inventory
// inventoryRouter.get("/total/value", (req, res, next) => {
//     Inventory.aggregate([
//         { $match: {} },
//         { $group: { _id: null, totalprice: { $sum: "$price" } } }
//     ],
//         (err, priceTotal) => {
//             if (err) {
//                 res.status(500)
//                 return next(err)
//             }
//             return res.status(200).send(priceTotal)
//         }
//     )
// })



var alphabet=["a","b","c","d","e"];
function randomArrayShuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  console.log(array)
  return array;
}

randomArrayShuffle(alphabet);
 