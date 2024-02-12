/*
let student1 = {
    fname : "Yohan",
    lname : "seelan",
    age : 30
}
console.log(student1);

function fullName(){
    console.log(`This is my full Name`);
}
student1.fullName = fullName;
console.log(student1);
*/

/*
let student2 = {
    fname : "Mohamed",
    lname : "Rukais",
    age : 40
}
student2.fullName = function(){
    console.log(`This is my Full Name`);
};
*/

/*
let student3 = {
    fname : "Aslam",
    lname : "Saja",
    age : 50,
    fullName(){
          console.log("This is the function");
    }
}
console.log(student3);
student3.fullName();
*/

/*
let student1 = {
    fname : "Yoha",
    lname : "seelan",
    age : 30,
    fullName :function(){
        console.log(`My full Name is ${this.fname} ${this.lname}`);
    }
};
student1.fullName();
*/

//Window is an predefined objects
/*
var fname = "muralee";
var lname = "sangee";
console.log(this);

let student1 = {
    fname : "Yoha",
    lname : "seelan",
    age : 30,
    fullName : () =>{
        console.log(`My Full Name is ${this.fname} ${this.lname}`);
    }
};
*/
var fname = "Muralee";
var lanme = "Sangee";

let student1 = {
    fname : "Yoha",
    lanme : "seelan",
    age : 30,
    fullName(){
       console.log(`My full Name is ${this.fname} ${this.lanme}`);
    },
    fullName1 : function(){
        console.log(`My full name1 is ${this.fname} ${this.lanme}`);
    },
    fullName2: () => {
         console.log(`This will print the window`);
    },
}
student1.fullName();
student1.fullName1();
student1.fullName2();
