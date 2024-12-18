function sayHello(){
    console.log("Hiii "+ this.name);
}

const person = {
    name : "Amit",
    greet : sayHello,
    description: function () { // here this will be person
      console.log(this.name + " is ....")
    },
    newDescription : () => {
        console.log("here in arrow func this will not point person " + this);
        // it will point where person obj scope is pointing here person obj is written in windows
        // scope so this also will point windows, if person is written inside another 
        // object or func(i.e.SuperPerson) than person scope will change to superperson than for
        // arrow function this will also change to superperson
        
        // b/c arrow function is anonymous function it is not bind with person object
    }
};

// person.greet -> sayHello and sayHello() -> method call
person.greet();

// window/global scope:  if u write function outside, it will become window scope example ->
function hello(){
    console.log(this);
}
hello(); // here this should be window b/c function is in window/global scope

// here this is person scope
person.description();

// using arrow function inside function
let User = {
    id : 1,
    intro : function() { // scope is object
    setTimeout(()=>{
     console.log("here scope of intro function is User for setTimeout also obj " + this.id)
    }, 5000);
}
}

User.intro();

// if we declare anything in window or global scope it becomes window or global properties
// var x = "hi";
// console.log(window.x);

// function y() {console.log("---")}
// console.log(window.y())