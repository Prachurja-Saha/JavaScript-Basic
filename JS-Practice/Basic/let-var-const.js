// var(function scope) is the oldest, let(block scope) is the latest way of declaring variables

// Problem in var

// 1. if a variable is declare outside any function using var than it becomes global
var a = 10; // var variable can be redeclared and can be reassigned
check = () => {console.log(a)};
check();

// 2. var variable can be redeclared(which is not good practiced)
var a = 12;
var a = 11; 

// 3. if var is declared inside function than it cannot be used outside the function
check2 = () => {
    var b = 100;
}; 
// console.log(b); // Error b cannot be used outside the function

// Let is introduced in - ES6 (it solves all the problem which var has)
// 1. it will become global if declare outside(same like var but it is blocked scope), 
// 2. cannot be redeclared with the same scope,
// it is blocked scope
letCheck = () => {
    if(true){
        let x = 5; // can only be access inside if block {} cannot be access outside if block
        console.log(x);
    }
   // console.log(x); // error
}
letCheck();

// let variable cannot be redeclared with the same scope
// One Important thing
let p = 50; // ouside scope p
if(true){
  let p = 40; // this is different p now (b/c different scope)
  console.log(p); 
}
function test (){
    console.log("Checking scope of let");
    console.log(p)
}
test();
console.log(p); // ouside scope p
if(true){
    console.log(p); // ouside scope p
}

// const -> introduced in ES6 [ blocked scope, cannot reassigned, cannot redeclared, must 
// assigned value in the time declaration]
const user = {
    name : "Amit"
}
// I can change the value
user.name = "Rahul"
// but person cannot reassigned
// user = {
              // Error
// }