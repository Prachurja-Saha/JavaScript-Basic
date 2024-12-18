// DOM -> Data Object Model (Tree like structure where Document is the top hirearchy)
// DOM -> structure of web page (HTML)
// converts Html to a tree like structure called DOM
// when an web pages is loaded (it converts webpages to html)

// using dom u can communicate/ perform operations with web pages 
console.log("Hi... ")

///// getElementsmethods... //////
// selecting element by HTML tag,id,class
document.getElementsByTagName("h1")[0].textContent = "a";
let finalName = document.getElementById("final-name");
let findClass = document.getElementsByClassName("find");

// selecting element by CSS selector
document.querySelector(".head").textContent = "new head" // select 1st id
document.querySelectorAll(".head") // select all ids inside head class
// we can provide class and id 


///// EventListener   .... ///////

// there are so many event i.e. -> click, mousehover, mouseout, input
let searchButton = document.getElementById("search-button");
searchButton.textContent = "find";
const inputValue = document.getElementById("search");
let headd = document.getElementsByClassName("head");

// addEventListener
// click
searchButton.addEventListener("click", ()=> {
    
    const val = inputValue.value; // value will provide input value
    console.log(val);
    finalName.textContent= "you selected : " + val;
})

// input
inputValue.addEventListener("input", (e)=> {
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
    alert("loaded");
} )

// removeEventListener




///// Event Handler

