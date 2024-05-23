"use strict";
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeShirt(size, message) {
    console.log(`This shirt is size ${size} and says "${message}"`);
}
// Call the function with different sizes and messages
makeShirt("Medium", "I love typescript");
makeShirt("Large", "typscript is my friend");
