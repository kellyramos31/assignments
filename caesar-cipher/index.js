var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));


//alphabet array indices go from 0-25
const alphabetArr = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z]




//need to look at each individual letter/part of phrase input =>  .split()??(turns string into an array)
//then find alphabet index of letter in the original phrase => .findIndex()  
//then jump the number of indices indicated (betw. 0 & 25 to get to the coded letter) => .foreach()
//(may have to jump forward and back??)
//if anything other than a letter (space, symbol, number) -- it stays the same
