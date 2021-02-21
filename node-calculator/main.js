const readlineSync = require('readline-sync');

var num1 = readlineSync.question("Please enter your first number ");

var num2 = readlineSync.question("Please enter your second number ");

var doThis = readlineSync.question("Please enter the operation to perform: add, sub, mul, div ");

function doCalc() {
    if (doThis === "add") {
        addTwo();

    } else if (doThis === "sub") {
        subTwo();

    } else if (doThis === "mul") {
        mulTwo();

    } else if (doThis === "div") {
        divTwo();
    }
};

function addTwo() {
    var addAnswer = Number(num1) + Number(num2);
    console.log("The result is: " + addAnswer);
};

function subTwo() {
    var subAnswer = Number(num1) - Number(num2);
    console.log("The result is: " + subAnswer);
};

function mulTwo() {
    var mulAnswer = Number(num1) * Number(num2);
    console.log("The result is: " + mulAnswer);
};

function divTwo() {
    var divAnswer = Number(num1) / Number(num2);
    console.log("The result is: " + divAnswer);
};

doCalc(doThis, num1, num2);


