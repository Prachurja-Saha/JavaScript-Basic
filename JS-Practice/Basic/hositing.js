// Hositing in JS moves variable and function declarations to the top of their scopes,
// allowing them to used before they are actually declared in the code.

// variable declaration using the var keyword are hosited
// only the declaration is hoised not the initalization

// 1. Example for variable
console.log(x); // should throw C.T error but it will not throw C.T error it will give undefined
var x = 10; // reason of undefined is at the time of compilation var x is hoisted or initalized
// example what happens at the compile time to the above piece of code -->
// var x;
// console.log(x)
// var x = 10;

// 2.a Example for function (same concept as above function will be declared by hoisting)
sayHello(); // calling fun before declaring, but due to JS hoisting it will work
function sayHello(){
    console.log("Hello"); // Hello will print b/c of hoisting
}
// at the time of compilation code will be
// function sayHello(){ console.log("Hello"); } // declaration b/c of hoisting
// sayHello();

// 2.b with function expression(another way of creating function) hoisting will not work
sayHi();  // throw error sayHi is not function at the time of hoisting
var sayHi = function(){ // using function expression
   console.log("hi")
}; // why error in this case what will happen after compilation ->
// var sayHi; // declaration due to JS hoisting
// sayHi();
// sayHi = function(){}


// In let, const hoisting will not work so it will not give undefine rather it will give error
// That is why recommended to use let and const