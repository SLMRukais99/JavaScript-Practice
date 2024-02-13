//Constructor  - This is the method of creating object
//Which is also help is to create the object

/*
function Student(fname, lname){
    this;
    this.fname = fname;
    this.lname = lname;
    return this;
}
let student1 =new Student("seelan","Yoha");
console.log(student1);
*/

/*
function Student(fname,lname){
    this.fname = fname;
    this.lname = lname;
}
let student1 = new Student("Seelan","Yoha");
let student2 = new Student("Muralee", "Tharan");

console.log(student1);
console.log(student2);
*/

/*
function Student(fname,lname){
    this.fname = fname;
    this.lname = lname;
    
    this.getFullName = function(){
        console.log(`full Name is : ${this.fname} ${this.lname}`);
    }
}
let student1 = new Student("Yoha", "Seelan");
let student2 = new Student("Muralee", "Tharan");


student1.getFullName();
student2.getFullName();
*/

/*
function Student(fname, lname){
    this.fname = fname;
    this.lname = lname;

    this.getFullName =() =>{
        console.log(`My Name is ${fname} ${lname}`);
    }
}

let student1 = new Student("Seelan", "Yoha");
student1.getFullName();
*/

//when i create the object, we didn't put the new keyword

function Student(fname,lname){
    if(!new.target){
        return new Student(fname,lname);
    }
    this.fname = fname;
    this.lname = lname;
    this.getFullName = () =>{
        console.log(`My Full Name is ${this.fname} ${this.lname}`);
    }
}

let student1 = Student("Mohamed", "Rukais");
let student2 = Student("Aslam", "Saja"); 
 

/*
function Student(fname,lname){
    this.fname = fname;
    this.lname = lname;
    
}
let student1 = new Student("Mohamed", "Rukais");

student1.display = function(){
    console.log(`My name is ${this.fname} ${this.lname}`);
}
student1.display();
*/

/*
function Student(fname,lname){
    this.fname = fname;
    this.lname = lname;
    
}
let student1 = new Student("Mohamed", "Rukais");

student1.display = () => {
    console.log(`My name is ${this.fname} ${this.lname}`);
}
student1.display();
*/
