/*
function myName(){
    console.log("My Name is Seelan");
}
myName();
*/

/*
let myName = function(){
    console.log(`My Name is Saja`);
};
myName();
*/

//Arrow Function
/*
let myName = () => console.log(`My Name is Raja`);
myName();
console.log(typeof myName);
*/

/*
function sum(a,b){
    return a+b;
}
let output = sum(10,5);
console.log(output);
*/

/*
let sum = function(a,b){
    return a+b;
}
let output = sum(20,30);
console.log(output);
*/

/*
let sum = (a,b) => {return a+b};
console.log(sum(7,1));
*/

/*
function getFullName(fname, lname){
      let fullName = `${fname} ${lname}`;

      return fullName;
}
console.log(getFullName("Mohamed", "Rukais"));
*/

/*
let getFullName = function(fname,lname){
    let fullName = `${fname} ${lname}`;

    return fullName;
}
console.log(getFullName("Mohamed", "Rukais"));
*/

/*
let getFullName = (fname,lname)=>{
    let fullName = `${fname} ${lname}`;

    return fullName;
}
console.log(getFullName("Mohamed", "Ahnaff"));
*/

//To pass only one parameter
/*
let getFullName = fname => console.log(`My name is ${fname}`);

getFullName("Rukais");
*/

//Immediatly Invoke Function Execution
(function(){
    console.log('IITE');
}
)();

(function(name){
       console.log("Rukais");
})("Rukais");

(
    () => console.log("My name is saja")
)();

(
    (name)=> console.log(`Your name is ${name}`)
)("Mahels");

(
    name=> console.log(`Your name is ${name}`)
)("Sanla");


//EcmaScript 6
function sayHi(name = "Mohamed"){
    console.log(name);
}
sayHi();
sayHi("Rukais");