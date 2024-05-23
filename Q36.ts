//36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function MakeShirt(size: string, message: string): void {
    console.log(`im making a ${size} T-shirt with the message "${message}".`);
  }
  
  // Call the function with different sizes and messages`
  MakeShirt("Medium", "I love coding!");
