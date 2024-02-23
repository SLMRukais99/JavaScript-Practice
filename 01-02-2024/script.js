//Error: script.js:1 Uncaught SyntaxError: Cannot use import statement outside a module
//<script src="script.js" type="module"></script>
//ore folder kka iruka padiya; ./ itha use pannu
/*
import x from './app.js';
console.log(x); //Ithuvum error than
*/

//so we have to add the export to that variable in the app.js
//app.js la, export add panna ventum
//script.js la {x} add panna ventum ,braces add panna ventum

/*
import {x} from './app.js';
console.log(x); //Ithuvum error than - No error shown
*/

//niraya itha export panra comma potu
/*
import {x,PrintName, Student} from './app.js';
console.log(x);
PrintName();
let stu1 = new Student("Mohamed Rukais", 100);
stu1.display();
*/

//Que - 01
//ithu error
/*
import {x,PrintName, Student, Employee} from './app.js';
console.log(x);
PrintName();
let stu1 = new Student("Mohamed Rukais", 100);
stu1.display();
let emp1 = new Employee("Yohas", 400);
emp1.display();
*/
//solve pannal que 1 kku than
//default potal printNaME KKU MUNNUKU, brace potu import panna yelathu
//default enta vitayam bracekka import panna yelathu - Summary
/*
import {x,Student, Employee} from './app.js';
import PrintName from './app.js';//solved
console.log(x);
PrintName();
let stu1 = new Student("Mohamed Rukais", 100);
stu1.display();
let emp1 = new Employee("Yohas", 400);
emp1.display();*/

//que 1 kku than
//ontuka eluthura
/*
import PrintName,{x,Student, Employee} from './app.js';// kavanm Printname first kku potanumam Pinuku potal error katuthu, i think anka printName first kku iruku thane athenalo therila
console.log(x);
PrintName();
let stu1 = new Student("Mohamed Rukais", 100);
stu1.display();
let emp1 = new Employee("Yohas", 400);
emp1.display();
*/

//Que -02
/*
import PrintName,{x,Student, Employee} from './app.js';

console.log(x);
PrintName();
let stu1 = new Student("Mohamed Rukais", 100);
stu1.display();
let emp1 = new Employee("Yohas", 400);
emp1.display();
*/

//Que - 03.
//another way to import
/*
import * as data from "./app.js"; // mostly data kku pathilaha antha module ta name inka vaipanka, here antha module ta name app
//import PrintName,{x,Student, Employee} from './app.js';

console.log(data.x);
data.default;//  PrintName(); printName default aha iruoathal data.PrintName() enakudukka mudiyathu.
let stu1 = new data.Student("Mohamed Rukais", 100);
stu1.display();
let emp1 = new data.Employee("Yohas", 400);
emp1.display();
*/

/*
//Que  - 04
//another way to import - anka ullathuhalta name hala maaathuran
import PrintName,{x as y,Student as stu, Employee as emp} from './app.js';

console.log(y);
PrintName(); //default enna ithula iruko athulaya use panra valamai maathiri
let stu1 = new stu("Mohamed Rukais", 100);
stu1.display();
let emp1 = new emp("Yohas", 400);
emp1.display();
*/


//Que  - 05
//tree Export
/*
import PrintName,{x,Student , Employee, Customer} from './app.js';

console.log(x);
PrintName(); //default enna ithula iruko athulaya use panra valamai maathiri
let stu1 = new Student("Mohamed Rukais", 100);
stu1.display();
let emp1 = new Employee("Yohas", 400);
emp1.display();
let cus1 = new Customer("Aslam", 600);
cus1.display();
*/


//Que  - 06
//default muraya paaru
/*
import {defalut as PrintName,x,Student , Employee, Customer} from './app.js';//default a braces kka thaniya printName ena pota yelathu, ippiti default as enathan potanum

console.log(x);
PrintName(); 
let stu1 = new Student("Mohamed Rukais", 100);
stu1.display();
let emp1 = new Employee("Yohas", 400);
emp1.display();
let cus1 = new Customer("Aslam", 600);
cus1.display();
*/



//Que  - 07
/*
import {defalut as PrintName,x,Student , Employee, Customer} from './app.js';
import Customer from './school.js'; //Customer has been already declared ena error varum
import Customer from './customer.js';
console.log(x);
PrintName(); 
let stu1 = new Student("Mohamed Rukais", 100);
stu1.display();
let emp1 = new Employee("Yohas", 400);
emp1.display();
let cus1 = new Customer("Aslam", 600);
cus1.display();
*/

//Que  - 07 - above errora solve pannal
//school,customer 2m vevvara file,but class name same aha irupathu than enkata pirachina
/*
import {defalut as PrintName,x,Student , Employee, Customer} from './app.js';
import SchoolCustomer from './school.js'; //default potathuhalta name mathi call pannalum ok than, mela ulla example, PrintName(), ithenai Print1 ena import pannal we can call it Print1() aha intha script.js kka, ithu vanthu app.js printName() enatu irukum case illa, because ore oru default thane irukura, thatswhy
//import Customer from './customer.js'
console.log(x);
PrintName(); 
let stu1 = new Student("Mohamed Rukais", 100);
stu1.display();
let emp1 = new Employee("Yohas", 400);
emp1.display();
let cus1 = new Customer("Aslam", 600);
cus1.display();
let cus2 = new SchoolCustomer("ahnaf", 200);
cus2.display();
*/

