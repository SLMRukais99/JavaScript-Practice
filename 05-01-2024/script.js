// Input from user

//Method - 01
/*
let myName;
myName = prompt("Enter Your Name!");
console.log("My Name is", myName);
*/

/* Method - 02
function myFunction(){
   let myName1 = document.getElementById("myName").value;
   let myAge2 = document.getElementById("myAge").value;
   console.log(`My Name is ${myName1}`);
   console.log(`My Age is ${myAge2}`);
}
*/

//Method - 03
/*
document.getElementById('mySubmit').onclick = function(){
    let myName1 = document.getElementById("myName").value;
   let myAge2 = document.getElementById("myAge").value;
   console.log(`My Name is nnksa ${myName1}`);
   console.log(`My Age is mpmos  ${myAge2}`);
   document.getElementById('msg').innerText = `Your name and age is ${myName1} ${myAge2}`;
}
*/

//Method - 04
/*
document.getElementById("mySubmit").addEventListener("click", myFunction);

function myFunction(){
    let myName1 = document.getElementById("myName").value;
    let myAge2 = document.getElementById("myAge").value;
    console.log(`My Name is  ${myName1}`);
    console.log(`My Age is   ${myAge2}`);
    document.getElementById('msg').innerText = `Your name and age is ${myName1} ${myAge2}`;
}
*/

//method - 05
document.getElementById("mySubmit").addEventListener("click", myFunction);
function myFunction(){
    let myName1 = document.getElementById("myName").value;

    if(myName1.length == 0){
        document.getElementById('msg').innerText = "";
    }
    else{
     console.log(`My Name is  ${myName1}`);
    document.getElementById('msg').innerText = `Your name  is ${myName1} `;
  }
}