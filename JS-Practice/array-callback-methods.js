// map, filter

let list = [1,2,3,4];

// using arrow
let sqaureList = list.map(i => i**2);
console.log(sqaureList);

// using annonymous
let cubeList = list.map(function(i){
   return i**3;
});
console.log(cubeList);

// using even no
// whenever u r passing function u just need to pass the name of function
let evenNo = list.map(getEven); 
function getEven(i){
    if(i%2==0){
        return i;
    }
    return "ODD";
}
console.log(evenNo); 

// filter
let evenList = list.filter(i => i%2==0)
console.log(evenList);

// reduce
let sum = list.reduce((acumalator,current)=> acumalator+current
, 0); // here 0 is the inital value of acumalator current is the 0th index value 
      // after 1st iteration acumalator becomes (0th index value + inital value) like this way 
      // sum will be added
// By default acumalator value is 1 if u don't mention it will take 1
console.log("using reduce method sum = " + sum);

// find (return the first element based on the condition)
let newList = [100,10,111,2,9,18,20,234];

let x = newList.find(i => i>100);
console.log("find method returns the first element based on the condition " + x);

// every() return true if all the condition is matched in list
console.log("if all the condition matched : " + newList.every(i => i>0)); // here all elements
// are greater than 0 so true


// some() return true if any condition matched
console.log("if one or more condition matched than return : " + newList.some(i=>i==100));

// sort() 
console.log(newList.sort()); // by default sort method performs string comparision result
// unexpected sorting outcomes
// if i want to compare numerically than we have to provide custom comparision function
console.log("ascending : " + newList.sort((a,b)=> a-b));
console.log("desending : " + newList.sort((a,b)=> b-a));
