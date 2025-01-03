// object/value -> collection of key value pairs

var person = {
 name:"John",
 age : 30,
 city: "New Work",
 
//  intro : function() {
//    return "Hi I am John";
//  }

intro : () => "Hi I am " + this.name,
get getUpperCaseName(){
    return this.name.toUpperCase();
}  ,

// set setPersonName(name){
//    this.name = an.toUpperCase();
// }
}
// person.setPersonName("rohit"); error is coming will check later
console.log(person.getUpperCaseName)
console.log(person);
console.log(person.name);
console.log(person.intro);
console.log(person.intro());
// if want only keys
console.log("Keys :" + Object.keys(person));
console.log("values :" + Object.values(person))

var {name,city} = person;
console.log("name : "+ name + " city : " + city);

// == (if data type is primitive than it will compare value otherwise reference/ address value)
var obj = {id : "1"}; var obj2 = {id : "2"};

// VIMP 
var obj3 = obj2;// obj3 also ponting same memory location where obj2 is pointing
// If u are changing obj2 obj3 will also change b/c same obj sol of this problem is we can 
// make copy using
var obj4 = {...obj3}; // this will create fresh copies (new Obj)
console.log(obj4 == obj3)// shold be false

console.log("checking refernce b/c object type " + (obj==obj2));
console.log("It should be true b/c refernce pointing same address " + (obj3==obj2));

var s1 = "XYZ"; var s2 = "XYZ";
console.log("checking value b/c primitive type " + (s1==s2))


// Alternative way of creating object using new keyword
let user = new Object();
user.name = "Akash";
user.age = 12;

console.log(user);

// Using constructor

function Employee(id, roll){
   this.roll = roll;
   this.id = id;
 }

 let emp1 = new Employee(1,10);
 let emp2 = new Employee(2,11);
 console.log(emp1.id +"----" + emp1.roll)
 emp1.bonus = 100;
 console.log("emp1 bonus:  "+emp1.bonus + " ---- emp2 id:"+ emp2.id)
