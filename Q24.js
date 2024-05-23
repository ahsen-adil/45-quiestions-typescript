"use strict";
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
//Tests for equality and inequality with strings:
const string1 = "hello";
const string2 = "world";
// True result
console.log(string1 === string1);
// False result
console.log(string1 !== string2);
//Tests using the lower case function:
const originalString = "Hello World";
// True result
console.log(originalString.toLowerCase() === "hello world");
// False result
console.log(originalString.toLowerCase() !== "hello world");
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:
const number1 = 5;
const number2 = 10;
// True results
console.log(number1 === number1);
console.log(number1 < number2);
console.log(number2 >= number1);
// False results
console.log(number1 !== number2);
console.log(number2 <= number1);
//Tests using "and" and "or" operators:
const age1 = 25;
const income = 50000;
// True results
console.log(age1 > 18 && income > 30000);
console.log(age1 < 18 || income > 70000);
// False results
console.log(age1 < 18 && income > 70000);
console.log(age1 > 30 || income < 40000);
//Test whether an item is in an array:
const myArray = [1, 2, 3, 4, 5];
const itemToCheck = 3;
// True result
console.log(myArray.includes(itemToCheck));
// False result
console.log(myArray.includes(6));
//Test whether an item is not in an array:
const myArray1 = [1, 2, 3, 4, 5];
const itemToCheck2 = 6;
// True result
console.log(!myArray.includes(itemToCheck));
// False result
console.log(!myArray.includes(3));
