"use strict";
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
// Exercise 28
let users = ["ahsen", "fatima", "sikander"];
// Check if the list of users is not empty
if (users.length > 0) {
    console.log("Here are the usernames:");
    for (let user of users) {
        console.log(user);
    }
}
else {
    console.log("We need to find some users!");
}
//Remove all usernames from the array
users = [];
// Check if the list of users is not empty
if (users.length > 0) {
    console.log("Here are the usernames:");
    for (let user of users) {
        console.log(user);
    }
}
else {
    console.log("We need to find some users!");
}
