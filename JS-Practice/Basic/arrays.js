// -- control -- for loop, switch, while, do while (same as java)
// in switch case we can provide condition in case i.e case age>10: 

// Arrays 
var days = ["mon", "tues", "wed", "thus", "fri", "sat", "sun"];
console.log(days);
console.log(days[1]);
days[1] = "new Day";
console.log(days.toString())

let names = ["antu", "prottay", "prapti", "purna"];
console.log("Names : " + names);
console.log("Names Length: " + names.length) 
names.push("New Name");// add from the end of list
names.unshift("old Name"); // add begining
console.log("After inserting " + names);
console.log("Removing last element :" + names.pop());// remove last element 
console.log("Removing first element :" + names.shift()); // remove begining element
console.log("After removing :" + names);

// Splice
days.splice(2,3); // 2 -> starting index 3 -> no. of elements to be deleted after startng index
// days.slice

console.log(days);



