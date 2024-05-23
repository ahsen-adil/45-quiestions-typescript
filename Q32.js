"use strict";
//32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
const currentUsers = ["john", "zia", "daniyal", "ahsen", "nida"];
const newUsers = ["JOHN", "ahsen", "zubair", "nida", "bilal"];
for (const newUser of newUsers) {
    const lowercaseNewUser = newUser.toLowerCase();
    if (currentUsers.some(currentUser => currentUser.toLowerCase() === lowercaseNewUser)) {
        console.log(`Username "${newUser}" is already taken. Please choose a different one.`);
    }
    else {
        console.log(`Username "${newUser}" is available!`);
    }
}
