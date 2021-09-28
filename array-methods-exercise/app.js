/*After every command, use console.log() to inspect your arrays. A good way to do that is to do something like:
        console.log("fruit: ", fruit);
        console.log("vegetables: ", vegetables);

1. Remove the last item from the vegetable array.
2. Remove the first item from the fruit array.
3. Find the index of "orange."
4. Add that number to the end of the fruit array.
5. Use the length property to find the length of the vegetable array.
6. Add that number to the end of the vegetable array.
7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
8. Remove 2 elements from your new array starting at index 4 with one method.
9.  Reverse your array.
10.  Turn the array into a string and return it.


If you've done everything correctly, the last step should print the following string to the console:

        3,pepper,1,watermelon,orange,apple
*/





var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();                           //#1
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
fruit.shift()                               //#2
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
var orangeIndex = fruit.indexOf("orange");   //#3
console.log(orangeIndex);
fruit.push(orangeIndex);                  //#4
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
var lengthVeggiesArr = vegetables.length    //#5
console.log(lengthVeggiesArr)
vegetables.push(lengthVeggiesArr);          //#6
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
var food = fruit.concat(vegetables);    //#7
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
console.log("food: ", food);
food.splice(4, 2);                          //#8
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
console.log("food: ", food);
var reverseFoodArr = food.reverse();       //#9
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
console.log("food: ", food);
var joinUpReversedArr = food.join(",");    //#10
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
console.log("food: ", food);
console.log(joinUpReversedArr);           //    3,pepper,1,watermelon,orange,apple  -- should show in console






