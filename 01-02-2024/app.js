/*
export let x = 5;
export function PrintName(){
    console.log("My Name is Rukais");
}

export class Student{
    constructor(name,id){
 this.name = name;
 this.id = id;
    }
    display(){
        console.log(`Student Name: ${this.name}`);
        console.log(`Student ID: ${this.id}`);
    }
}
*/

//Alternative
//Ippidi ella itamum export keyword pota thevalla
/*
 let x = 5;

 function PrintName(){
    console.log("My Name is Rukais");
}

 class Student{
    constructor(name,id){
 this.name = name;
 this.id = id;
    }
    display(){
        console.log(`Student Name: ${this.name}`);
        console.log(`Student ID: ${this.id}`);
    }
}

export{x,PrintName,Student};
//ethu velila pohanum entu ithula sonna athu mattum than vlila pohum
*/


//Que - 01
/*
export let x = 5;

export default function PrintName(){
    console.log("My Name is Rukais");
}

export class Student{
    constructor(name,id){
 this.name = name;
 this.id = id;
    }
    display(){
        console.log(`Student Name: ${this.name}`);
        console.log(`Student ID: ${this.id}`);
    }
}

export class Employee{
    constructor(name,id){
        this.name = name;
        this.id = id;
           }
           display(){
               console.log(`Employee Name: ${this.name}`);
               console.log(`Employee ID: ${this.id}`);
           }
}
*/

//Que 02
/*
 let x = 5;

export default function PrintName(){
    console.log("My Name is Rukais");
}

 class Student{
    constructor(name,id){
 this.name = name;
 this.id = id;
    }
    display(){
        console.log(`Student Name: ${this.name}`);
        console.log(`Student ID: ${this.id}`);
    }
}
 class Employee{
    constructor(name,id){
        this.name = name;
        this.id = id;
           }
           display(){
               console.log(`Employee Name: ${this.name}`);
               console.log(`Employee ID: ${this.id}`);
           }
}

export{ x, Student, Employee};
*/

//Que - 03
/*
let x = 5;
export default function PrintName(){
    console.log("My Name is Rukais");
}

 class Student{
    constructor(name,id){
 this.name = name;
 this.id = id;
    }
    display(){
        console.log(`Student Name: ${this.name}`);
        console.log(`Student ID: ${this.id}`);
    }
}

 class Employee{
    constructor(name,id){
        this.name = name;
        this.id = id;
           }
           display(){
               console.log(`Employee Name: ${this.name}`);
               console.log(`Employee ID: ${this.id}`);
           }
}

export{ x, Student, Employee};
*/

/*
//Que - 04
//another way to import 
let x = 5;
export default function PrintName(){
    console.log("My Name is Rukais");
}

 class Student{
    constructor(name,id){
 this.name = name;
 this.id = id;
    }
    display(){
        console.log(`Student Name: ${this.name}`);
        console.log(`Student ID: ${this.id}`);
    }
}

 class Employee{
    constructor(name,id){
        this.name = name;
        this.id = id;
           }
           display(){
               console.log(`Employee Name: ${this.name}`);
               console.log(`Employee ID: ${this.id}`);
           }
}

export{ x, Student, Employee};
*/

//Que - 05
/*
import {Customer} from "./customer.js";

let x = 5;
export default function PrintName(){
    console.log("My Name is Rukais");
}

 class Student{
    constructor(name,id){
 this.name = name;
 this.id = id;
    }
    display(){
        console.log(`Student Name: ${this.name}`);
        console.log(`Student ID: ${this.id}`);
    }
}

 class Employee{
    constructor(name,id){
        this.name = name;
        this.id = id;
           }
           display(){
               console.log(`Employee Name: ${this.name}`);
               console.log(`Employee ID: ${this.id}`);
           }
}

export{ x, Student, Employee,Customer};
*/

//Que - 06,
//defalut kudutha printName keelukku export pani parthal
/*
import {Customer} from "./customer.js";

let x = 5;
 function PrintName(){
    console.log("My Name is Rukais");
}

 class Student{
    constructor(name,id){
 this.name = name;
 this.id = id;
    }
    display(){
        console.log(`Student Name: ${this.name}`);
        console.log(`Student ID: ${this.id}`);
    }
}

 class Employee{
    constructor(name,id){
        this.name = name;
        this.id = id;
           }
           display(){
               console.log(`Employee Name: ${this.name}`);
               console.log(`Employee ID: ${this.id}`);
           }
}

export{ PrintName as defalut,x, Student, Employee,Customer};
*/

//Que - 07
/*
import Customer from "./customer.js";

let x = 5;
 function PrintName(){
    console.log("My Name is Rukais");
}

 class Student{
    constructor(name,id){
 this.name = name;
 this.id = id;
    }
    display(){
        console.log(`Student Name: ${this.name}`);
        console.log(`Student ID: ${this.id}`);
    }
}

 class Employee{
    constructor(name,id){
        this.name = name;
        this.id = id;
           }
           display(){
               console.log(`Employee Name: ${this.name}`);
               console.log(`Employee ID: ${this.id}`);
           }
}

export{ PrintName as defalut,x, Student, Employee,Customer};
*/