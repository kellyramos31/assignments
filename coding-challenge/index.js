/*
CODING CHALLENGE EDABIT -- 3/19/21
Create a function that takes an array of 10 numbers(between 0 and 9) and returns a string of those numbers formatted as a phone number(e.g. (555) 555 - 5555).

    Examples
formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]) ➞ "(519) 555-4468"

formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]) ➞ "(345) 501-2527"
Notes
Don't forget the space after the closing parenthesis.
*/

//numArr = [9, 0, 8, 9, 2, 3, 0, 7, 6, 2]

numArr = [8, 8, 8, 5, 5, 5, 2, 2, 2, 2]

function formatPhoneNumber(arr) {
    const oneString = arr.join("");                      //makes it into one string
    //console.log(oneString)
    const areaCode = oneString.slice(0, 3);            //first three digits
    const prefix = oneString.slice(3, 6);               //second three digits
    const lineNumber = oneString.slice(6)               //rest of phone number
    const putItBackTogether = `(${areaCode}) ${prefix}-${lineNumber}`
    console.log(putItBackTogether)
    console.log(typeof putItBackTogether)
    return putItBackTogether
}

formatPhoneNumber(numArr)


numArr = [8, 8, 8, 5, 5, 5, 2, 2, 2, 2]

function formatPhoneNumber(arr) {
    const oneString = arr.join("");
    const areaCode = oneString.slice(0, 3);
    const prefix = oneString.slice(3, 6);
    const lineNumber = oneString.slice(6)
    const putItBackTogether = `(${areaCode}) ${prefix}-${lineNumber}`
    console.log(putItBackTogether)
    return putItBackTogether
}

formatPhoneNumber(numArr)


/* ALTERNATE APPROACH

function formatPhoneNumber(A){
    A.toString()
    A.splice(0,0,"(")
    A.splice(4,0,") ")
    A.splice(8,0,"-")
    return A.join(' ')
}
*/