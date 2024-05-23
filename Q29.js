"use strict";
// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// Make an array of your three favorite fruits
let favoriteFruits = ["banana", "apple", "mango"];
if (favoriteFruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favoriteFruits.includes("apple")) {
    console.log("Apples are one of your favorite fruits!");
}
if (favoriteFruits.includes("mango")) {
    console.log("mango is on your list of favorite fruits!");
}
if (favoriteFruits.includes("orange")) {
    console.log("Oranges are among your favorite fruits!");
}
else {
    console.log("Oranges didn't make it to your top three.");
}
if (favoriteFruits.includes("grape")) {
    console.log("Grapes are part of your favorite fruits!");
}
else {
    console.log("Grapes didn't make it to your top three either.");
}
