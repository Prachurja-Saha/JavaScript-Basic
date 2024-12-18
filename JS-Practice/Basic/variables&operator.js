
// ------- Variables Types --------

var a = 1; // Number -> 1.2, 0.123 etc. 
//Limit 
console.log("Max value :"+Number.MAX_VALUE) 
var b = "Antu" // String -> `ABC`, 'ABC'
var c = true; // boolean
var d = {"name":"Antu", "roll":"6183"}; // object
var e = ["a", "b", "c"]; // list
var f = null;  // null
f = "AAA";
var g; // undefine type
var h = BigInt(Number.MAX_VALUE+100); //BigInt large integer

console.log(a);
console.log(b);
console.log(d);
console.log(e);
console.log(typeof c);
console.log(f)
console.log(h)

// ----- Important Arithmetic operation --------
console.log(5**2);// 5 to the power 2

// ----- Important methods and functions -------

//parseInt (this are function we can directly call no need to mention dot .)
console.log(typeof parseInt("1")); //converting anytype to number
console.log(parseInt("123uia"));// ans -> 123

//toString() (method need to use dot .)
console.log(a.toString())

//tofixed() method -> after decimal how many digit
console.log(1.2344.toFixed(2));// ans will be 1.23   2 digit after decimal 


// ---- String  Opertion ---- [String is immutable in JS]
var name = "Raghu";
console.log(`Name is ${name}`) // String interpolation using template(${}) literal
var x = "a a       a";
x = x.trim();
console.log(x) // remove white space //TODO: Not working need to check

// --- comparison operator (===) -> strict equality operator, (!==) -> strict inequality operator

if(2==`2`){ // here condition is true not chceking type but (===) check type 
    console.log("true")
}

if(2===`2`){ // chceking type
    console.log("true")
} else{
    console.log("false")
}