// ----Muulti dimenational Array----
let a = [["1","2"],["3","4"]];   console.log(a);

let list1 = [1,2,3]; let list2 = [4,5,6];
let newList = [...list1, ...list2]; // ... -> spread [1,2,3,4,5,6]
console.log(newList);

let fruits = ["apple", "banana", "orange"]

// ----- loop ------------
// simple loop
for(let i =0; i<3; i++){
    console.log(fruits[i]);
}
// for in
console.log("for in & of")
for(let i in fruits){
    console.log(fruits[i]);
}
for(let i of fruits) { 
    console.log(i);
}
// fruits.forEach
console.log("using for each/ annonymous function")
fruits.forEach(function(i){ // Annonymous function just like java
    console.log(i)
})
//alternative
fruits.forEach(i=> console.log(i));
fruits.forEach((e,i) => console.log("element " + e  +" -- index"+ i));


// ----- function -----------
function greet(h){
    console.log("Hello" + h);
    return h;
}

// Arrow function 
// we can write function in this way
let sum = function(a,b){
    return a+b;
}
console.log("sum : " + sum(1,2));

// we can optimize this by => annotaion
let multiplication = (a=1,b=1)=> a*b; // default a is 1 if nothing provided
console.log("multiplication : "+multiplication(10,20));
console.log(multiplication()); // default 1*1 =1

function emp(){
console.log("----------")
}

// We can pass function as param
let calculate = (funcName)=>funcName();
calculate(emp); // it will call multiplication function

// ...list -> like var argument in java
let spreading = (...list) => console.log(list);