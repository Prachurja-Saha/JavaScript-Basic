// DOM -> Data Object Model (Tree like structure where Document is the top hirearchy)
// DOM -> structure of web page (HTML)
// converts Html to a tree like structure called DOM
// when an web pages is loaded (it converts webpages to html)
// each HTML element becomes the node in the DOM tree
//IMP// DOM is provided by the browsers that JS can use to interact with HTML and XML document 
// DOM is the connection between HTML and JS, allow JS to dynamically interact
// JS can manipiulate the DOM to dynamically update content, structure, style of a webpage
// VANILA JS is PLAIN JS (WITHOUT ANY EXTERNAL LIBRARY)
// --------------------------------------------------------------

// using DOM we can write HTML code (but here its not working dont know why)
const body = document.body;
const div = document.createElement("div");
div.innerText = "This is div tag"
body.append(div); // this will add div tag in HTML

//---------------------------------------------------------------
// using dom u can communicate/ perform operations with web pages 
// const body = document.body;
// body.append("Antu") it should print in browser but here it's not working
let nam = prompt("Enter your Name")
console.log("Your Name : " + nam);
// document.write("Welcome " + nam); //print in web page (like global/ window), not working here
if(confirm("Are u sure u are Prachurja")){
    console.log("Ok I understand u r prachurja ")
}


///// getElementsmethods... //////
// selecting element by HTML tag,id,class
document.getElementsByTagName("h1")[0].textContent = "a";
let finalName = document.getElementById("final-name");
let findClass = document.getElementsByClassName("find");

// selecting element by CSS selector
document.querySelector(".head").textContent = "new head" // select 1st id
document.querySelectorAll(".head") // select all ids inside head class
// we can provide class and id 

// 2 ways of handling Event
/////1. EventListener   -> dont have to modify HTML

// there are so many event i.e. -> click, mousehover, mouseout, input
let searchButton = document.getElementById("search-button");
searchButton.textContent = "find";
const inputValue = document.getElementById("search");
let headd = document.getElementsByClassName("head");
let testRemoveEL = document.getElementById("test");
const testDom = document.getElementById("root");

// addEventListener
// click
searchButton.addEventListener("click", ()=> {
    const val = inputValue.value; // value will provide input value
    console.log(val);
    finalName.textContent= "you selected : " + val;
})
// input
inputValue.addEventListener("input", (e)=> {
    // e is the event listener u can print e and use all its info, target is used most
    console.log(e.target.value);
    headd[0].textContent = "Hello " + e.target.value + ", how are you";
})
// DOMContentLoaded
// whenever dom tree created/ loaded ( alternativly HTML loaded )
// if i do inputValue.addEventListener("DOMContentLoaded", fun..) -> this means when inputValue
// HTML/DOM loaded than we can write or implement our operation based on this condition
window.addEventListener("DOMContentLoaded", ()=> { // window -> global obj
    finalName.textContent = "Welcome -- DOM loaded for whole window or whole HTML page"
    console.log("Html loaded")
})
// load  -> when html + css (everything in web page loaded )
window.addEventListener("load",()=> {
    finalName.textContent = "page fully loaded"
    console.log("page fully loaded")
    alert("loaded"); // cannot be ignored 
} )

// removeEventListener
testRemoveEL.addEventListener("click", ()=> {
    console.log("1st Listener");
})
function secondClick() {
    console.log("2nd Listener");
}

// ths will not execute b/c next line we removed
testRemoveEL.addEventListener("click", secondClick);
testRemoveEL.removeEventListener("click", secondClick); // does not work with arrow and 
// annonymous function only work with external function




/////2.  Event Handler -> we have to modify(provide function name) HTML 
let eventHandlerTest = () => {console.log("U clicked")}

