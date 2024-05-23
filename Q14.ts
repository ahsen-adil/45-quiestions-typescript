// 14. guest list: if you could invite AnalyserNode, living or deceased, to 
// dinner, who would you invite? make a list that includes at least three 
// people you'd like to invite to dinner. then use your list to print a 
// massege to each persona , inviting them to dinner .


let guestlistt: Array<string> = [
    "zubair",
    "sufiyan",
    "shayan",
    "zain",
    "ahmed",
    "naeem"
];

guestlistt.forEach((guestname) =>
{
    console.log(`dear ${guestname}, you are invited to dinner please join us.`)
}
)