/*Write a short program that prints each number from 1 to 100 on a new line.

For each multiple of 3, print "Fizz" instead of the number.

For each multiple of 5, print "Buzz" instead of the number.

For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
*/



function printFizzBuzz() {
    const fizzBuzz = [];
    const fizz = [];
    const buzz = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
            fizzBuzz.push("FizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
            fizz.push("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
            buzz.push("Buzz")
        } else {
            console.log(i)
        }
    }
    console.log(fizzBuzz);
    console.log(fizzBuzz.length)
    console.log(fizz);
    console.log(fizz.length);
    console.log(buzz);
    console.log(buzz.length);

    function Tally(fizzBuzz, fizz, buzz) {
        this.fizzBuzz = fizzBuzz
        this.fizz = fizz
        this.buzz = buzz
    }

    const tallies = new Tally(fizzBuzz.length, fizz.length, buzz.length)

    console.log(tallies)
}

printFizzBuzz()







/* DONE -- OPTIONAL:
Write a function that keeps a tally of how often the phrases "fizz", "buzz", and "fizzbuzz" occur in the array returned from the previous function.
It should return an object that looks like this:
{
    fizzbuzz: 6,
    fizz: 27,
    buzz: 14
}
*/
/*
function FizzBuzz(fizzbuzz, fizz, buzz) {    //create new object to hold tallies w/ keys(?) fizzbuzz, fizz, buzz (= keys??)-- constructor function??
    this.fizzbuzz = fizzbuzz,
    this.fizz = fizz,
    this.buzz = buzz
}


//create new variables to hold tallies of each word
//increment/update tally of each key(?) in object as it gets printed to console
//keep only ending total of the three words inside object:  fizzbuzz, fizz, buzz (= keys??)

*/


