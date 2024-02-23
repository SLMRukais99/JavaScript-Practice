/*
let subject1 = ['Maths', 'Tamil'];
let subject2 = ['English','IT'];
console.log(subject1);
console.log(subject2);

let subjects = subject1  + subject2; //Intha mura sari varla
console.log(subjects);
*/

//Old method to cancatinate one array
/*
let subject1 = ['Maths', 'Tamil'];
let subject2 = ['English','IT'];
console.log(subject1);
console.log(subject2);

let subjects = subject1.concat(subject2);
console.log(subjects);
*/

//New mwthid = use split operator
let subject1 = ['Maths', 'Tamil'];
let subject2 = ['English','IT'];
console.log(...subject1);
console.log(...subject2);

let subjects = [...subject1,...subject2]; //... ithuku tried operotor entu solra, here spread opeator
console.log(subjects);

//Ithepola oru string ayum utaikka yelum
/*
let name  = "Yohaseelan";
console.log(...name); //Ithu just space viitu print akum
*/


//correct way
/*
let name  = "Yohaseelan";
console.log([...name]); 

let student = {
 fname : 'seelan',
 lname : 'yoha',
 age : 30
}
*/

//Combining 2 objects
/*
let marks = {
    maths : 90,
    tamil : 40,
    english : 75,

}

let studentMarks = {
    ...student,
    ...marks
}
console.log(studentMarks);
*/
// sum = ippidi ... varatha solrathu spread operator


//
/*
function sum(numbers){
    let total = 0;
    for(i=0;i<numbers.length;i++){
          total += numbers[i];
    }
    console.log(total);
}
let marks = [10,45,85,65,96,100];
sum(marks);
*/

//rest parameter
//ithu summa arry element add panra ,urai
/*
function sum(...numbers){
    let total = 0;
    for(i=0;i<numbers.length;i++){
          total += numbers[i];
    }
    console.log(total); //010,45,85,65,96,100 , here kooti thara illa
}
let marks = [10,45,85,65,96,100];
sum(marks); 
*/


//here, rest parameter use pannirukam
/*
function sum(...numbers){  //rest paramete
    let total = 0;
    for(i=0;i<numbers.length;i++){
          total += numbers[i];
    }
    console.log(total);
}

sum(1,2,3,4,5,6,56,54); //spread operator ena ninaikan aha irundhal kudukka paura value unlimited aha irkum
*/

//... spread parameter aha tholil patuthal
function sum(...numbers){ 
    let total = 0;
    for(i=0;i<numbers.length;i++){
          total += numbers[i];
    }
    console.log(total);
}
let marks = [10,45,85,65,96,100];
sum(...marks); 


//Note
//print panra both are same
let data = ["Mohamed", 25 , "Rukais"];
console.log(...data);
console.log("Mohamed", 25 , "Rukais");



