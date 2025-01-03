// --- Template literal ---
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;

// using concating it will be complicating 
console.log("The sum of " + num1 + " and " + num2 + " is = " + sum);

// using template literal
console.log(`The sum of ${num1} and ${num2} is ${sum}`); // just like apache camel


// --- destructuring ---
// with array (we will use -> [])
let a1 = ['A','B','C','D','E'];
let a2 = ['a','b','c','d','e'];

const [p,q,,...rest] = a1;
console.log(`1st element of array  ${p}
    2nd element of array ${q}, skipping 3 rd element
    rest of the element ${rest}`);
console.log(" new array after adding 2 array " + [...a1, ...a2]);  

let getArray = (n1,n2) => [n1+n2, n1*n2];
const [summation, multiplication, division= "default"] = getArray(10,20);
console.log(`summation : ${summation}
    multiplication: ${multiplication}
    division : ${division}`);

// with object (very useful when u r using nested object) for obj we use -> {}
const person = {
    nam : "Amit",
    age : 23,
    id : 100,
    mobile : 12345,
    address : {
        city: "Kolkata",
        state: "WB"
    }
}    
// chaning key name from nam to firstName, 18 : default age, ...restAll are rest all 
const {nam: firstName, age=18, address:{city, state}, ...restAll} = person;
console.log(`name is ${firstName}, age is ${age}, rest all : ${restAll}
    id is ${restAll.id}, city is ${city}`)
// adding 2 object
const person2 = {
    nam:"Akash", // here it will ovwrride
    roll: 1100 // uniqe here
}
const person3 = {...person, ...person2};
console.log("adding 2  person" + person3);
