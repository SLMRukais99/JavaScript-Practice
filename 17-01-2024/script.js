
 

document.getElementById("btn").addEventListener("click",myFunction);
function myFunction(){
let key1 = prompt("Enter the firstName:");
let value1 = prompt("Enter the value for the first Name");

let key2 = prompt("Enter the LastName:");
let value2 = prompt("Enter the value for the Last Name");

let key3 = prompt("Enter the age");
let value3 = prompt("Enter the value for the age");

    //console.log( createNewStudent(key1,value1,key2,value2,key3,value3));
    document.getElementById("msg").innerText = createNewStudent(key1,value1,key2,value2,key3,value3);
 }

 function createNewStudent(key1,value1,key2,value2,key3,value3){

      let stuObj = {};
      stuObj[key1] = value1;
      stuObj[key2] = value2;
      stuObj[key3] = value3;
       
    return stuObj;
 }