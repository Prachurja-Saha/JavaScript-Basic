let processData = ()=> console.log("Processing .... data");
let deleteData = ()=> console.log("Deleting ... data");

let validateData = (met) => met();

validateData(processData);
validateData(deleteData);

// function which is passing as argument to other function is called callback 
// processData function is argument to validateData function so processData is callback function

// CallBack -> ASYC Call