"use strict";
// 13. your own array:think of your favorite mode of transportation,such 
// as a motorcycle or a car, and make a list that stores several examples.
// use your list to print a series of statements about these items ,
// such as "i would like to own a honda motorsycle."
let favoritetransportation = [];
favoritetransportation.push(["motercycle", "yamaha"]);
favoritetransportation.push(["car", "supra"]);
favoritetransportation.push(["bicycle", "bmx"]);
favoritetransportation.forEach(([transport, brand]) => { console.log(`i would like to own a ${brand} ${transport}.`); });
