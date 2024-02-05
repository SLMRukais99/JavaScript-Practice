//Function
//Error
/*
function setName(){
    let firstName = "yoha";
    let lastName = "seelan";
}

function getFullName(){
    console.log(`Your full Name is ${firstName}`);
}

setName();
getFullName();
*/

/*
function getFullName(fname, lname){
    console.log(`Your full Name is ${fname} ${lname}`);
}

getFullName("Mohamed", "Rukais");
getFullName("Aslam", "Saja");
getFullName("Mohamed", "AhnaaF");
*/

/*
function getFullName(fname, lname){
    console.log(`Your full Name is ${fname} ${lname}`);
}
function setName(){
        let firstName = "Mohamed";
        let lastName = "Rukais";
        getFullName(firstName,lastName);
       
}
setName();
*/
/*
function getFullName(fname, lname){
   return `Your full Name is ${fname} ${lname}`;
}

let fullName = getFullName("Mohamed","Rukais");
console.log(fullName);
*/

/*
document.getElementById("btn").addEventListener("click",getFullName);
function getFullName(){
   let a =  document.getElementById("firstName").value;
   let b =  document.getElementById("lastName").value;
   document.getElementById("PFF").innerText = a+" "+b;
}
*/
document.getElementById("btn").addEventListener("click",setName);

function setName(){
    let first =  document.getElementById("firstName").value;
    let last =  document.getElementById("lastName").value;
    getFullName(first,last);

}


function getFullName(a,b){
   
   
   document.getElementById("PFF").innerText = a+" "+b;
}
