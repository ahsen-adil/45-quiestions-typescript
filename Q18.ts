//18. Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.

//• Print your array in its original order.

//• Print your array in alphabetical order without modifying the actual list.

//• Show that your array is still in its original order by printing it.

//• Print your array in reverse alphabetical order without changing the order of the original list.

//• Show that your array is still in its original order by printing it again.

//• Reverse the order of your list. Print the array to show that its order has changed.

//• Reverse the order of your list again. Print the list to show it’s back to its original order.

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

// step 1
let treveldestinations: string[] = ["dubai", "america", "tokyo", "paris", "japan"]
// step 2
console.log("original order:")
console.log(treveldestinations)
// step 3
console.log("\n alphabetical order without modifying the actuel list")
console.log([...treveldestinations].sort())
// step 4
console.log("\n showing array is still in its original order")
console.log(treveldestinations)
// step 5
console.log("\n revers alphabetical order without modifying the actuel list")
console.log([...treveldestinations].sort().reverse())
// step 6
console.log("\n showing array is still in its original order")
console.log(treveldestinations)
// step 7
console.log("\n reverse order")
treveldestinations.reverse()
console.log(treveldestinations)
// step 8
console.log("\n back to original")
treveldestinations.reverse()
console.log(treveldestinations)
// step 9
console.log("\n change to alphabatical order")
treveldestinations.sort()
console.log(treveldestinations)
// step 10
console.log("\n change to reverse alphabatical order")
treveldestinations.sort().reverse()
console.log(treveldestinations)
