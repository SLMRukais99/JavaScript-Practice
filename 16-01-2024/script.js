//Objects
/*

let obj = {
    firstName : "Mohamed",
    lastName : "Rukais",
    age : 25,
    "ka la":100
}

console.log(obj);
console.log(obj.firstName);

//to add a property
obj.gender = "Male";
console.log(obj);

//to delete a property
delete obj.age;
console.log(obj);

//to modify a property
obj.firstName = "Saja";
console.log(obj);

//To prints all objects
for(let key in obj){
   console.log(key, obj[key]);
}

//2 ways print the objects
console.log(obj.firstName);
console.log(obj['firstName']);
console.log(obj["ka la"]);

*/

//Getting Key,value from user
/*
let key = prompt("Enter your Details?");
let value = prompt("Enter your name");
let student = {
    [key] : value
}
console.log(student[key]);
console.log(student);
*/

/*
let key = prompt("Enter your Details?");
let value = prompt("Enter your name");
let student = {};
student[key] = value;
console.log(student);
console.log(student[key]);
*/

//create the function with a help of function
/*
function createStudent(){
    return "seelan";
}
*/

//Method - 01
/*
function createStudent(firstName,lastName,age){
    return {
        firstName : firstName,
        lastName : lastName,
        age : age
    }
}
let student1 = createStudent("Mohamed", "Rukais", 25);
console.log(student1);
let student2 = createStudent("Aslam", "saja", 27);
console.log(student2);
let student3 = createStudent("Mohamed", "Ahnaf",26);
console.log(student3);
*/

//Method - 02, ES6
function createStudent(firstName,lastName,age){
    return{
        firstName,
        lastName,
        age
    }
}
let student1 = createStudent("Mohamed", "Rukais", 25);
let student2 = createStudent("Aslam", "saja", 27);
let student3 = createStudent("Mohamed", "Ahnaf",26);
console.log(student1);
console.log(student2);
console.log(student3);

