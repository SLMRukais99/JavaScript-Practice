//Array destructuring
/*
let arr = ["Maths","Tamil", "English"];

console.log(arr[0]);
console.log(arr[1]);

let subject1 = arr[0];
let subject2 = arr[1];

console.log(arr[0]);
console.log(arr[1]);

console.log(subject1);
console.log(subject2);
*/

//to take all value
/*
let arr = ["Maths","Tamil", "English"];

let [subject1,subject2,subject3] = arr;
console.log(subject1);
console.log(subject2);
console.log(subject3);
*/

//to take only one value
/*
let arr = ["Maths","Tamil", "English"];

let [subject1] = arr;
console.log(subject1);
*/

//to take the 3rd value
/*
let arr = ["Maths","Tamil", "English"];

let [,,subject1] = arr;
console.log(subject1);
*/

//We want 1st and 3rd
/*
let arr = ["Maths","Tamil", "English"];

let [subject1,,subject3] = arr;
console.log(subject1);
console.log(subject3);
*/

//Array uruvaki seirathu
/*
let arr = ["Maths","Tamil", "English", "IT", "PT","sinhala"];
let [subject1,,...subject3] = arr; //here rest parameter aha tholilpatuthu
console.log(subject1); //tamil enta itathuku comma kuduthethal ethuvum print ahathu
console.log(subject3);//Michamullathu ellam array aha eduthukum
*/

/*
let arr = [undefined,"Tamil", "English", "IT", "PT","sinhala"];
let [subject1,,...subject3] = arr;
console.log(subject1); 
console.log(subject3);
*/

/*
let arr = [undefined,"Tamil", "English", "IT", "PT","sinhala"];
let [subject1 = "default subject",,...subject3] = arr;//undefined aha irundhal ithula kudukura default value edukum
console.log(subject1); 
console.log(subject3);
*/

/*
let arr = ["Maths","Tamil", "English", "IT", "PT","sinhala"]; //undefine illamal irundhal athuta peyara eduthu kollum
let [subject1 = "default subject",,...subject3] = arr; 
console.log(subject1); 
console.log(subject3);
*/

//Ellam ontuthan variabla firstkku declare pannitu seirom avvalavuthan ok
/*
let arr = ["Maths","Tamil", "English", "IT", "PT","sinhala"];
let subject1,subject2,subject3;

[subject1,subject2,subject3] = arr;

console.log(subject1);
console.log(subject2);
console.log(subject3);
*/

//object destructuring
/*
let student= {
    name : "Rukais",
    age : 30,
    address : "Kalmunai"
};


console.log(student.name);
console.log(student.age);
console.log(student.address);
*/


/*
let student= {
    name : "Rukais",
    age : 30,
    address : "Kalmunai"
};
let {name,age,address} = student; //objects kulla key than inkayum kudukanum, illati undefined ena katum, but array appidi illathane
console.log(name); //Just key matuum kudutha sari
console.log(age);
console.log(address);
*/

/*
let student= {
    name : "Rukais",
    age : 30,
    address : "Kalmunai"
};
let {x= "default name",age,address} = student; 
console.log(x);//name enta itathuku default value set panna ippidi use panra vera key name kuduthu
console.log(age);
console.log(address);
*/

//objects kka nested innoru object varathu,nested objects
/*
let student= {
    name : {
        firstName : "Mohamed",
        lastName : "Rukais",
    },
    age: 30,
    address : "Jaffna"
}
console.log(student.name.firstName);
console.log(student.name.lastName);

let {name,age,address} = student; 
console.log(name);//name enbathu object aha print ahum
console.log(age);
console.log(address);
*/

/*
let student= {
    name : {
        firstName : "Mohamed",
        lastName : "Rukais",
    },
    age: 30,
    address : "Jaffna"
}


let {name:{firstName,lastName},age,address} = student; 
console.log(firstName); //name potal ontum print ahathu
console.log(lastName);
console.log(age);
console.log(address);
*/


//Now rename pannal
/*
let student= {
    name : {
        firstName : "Mohamed",
        lastName : "Rukais",
    },
    age: 30,
    address : "Jaffna"
}


let {name:{firstName :fna,lastName : lna},age :a,address : add} = student; //age anathu a ahavum, address anathu add ahavum peyar matram seiya patulathu
console.log(fna); 
console.log(lna);
console.log(a);//here we cant use age or address
console.log(add);
*/

//How to set the default value
/*
let student= {
    name : {
        firstName : "Mohamed",
        lastName : "Rukais",
    },
   
    address : "Jaffna"
}


let {name:{firstName :fna,lastName : lna},age :a,address : add} = student; 
console.log(fna); 
console.log(lna);
console.log(a);//here age ahiya a is undefined
console.log(add);
*/

//to set the default value
/*
let student= {
    name : {
        firstName : "Mohamed",
        lastName : "Rukais",
    },
    address : "Jaffna"
}
//illathe ontukuthan value set panra entu solraru

let {name:{firstName :fna,lastName : lna},age :a = 50,address : add} = student; //now we set the default value for age as 50.
console.log(fna); 
console.log(lna);
console.log(a);
console.log(add);
*/

/*
let student= {
    name : {
        firstName : "Mohamed",
        lastName : "Rukais",
    },
       age :30,
    address : "Jaffna"
}
let {name:{firstName :fna,lastName : lna},age :a = 50,address : add} = student; //here 50 will not be assigned for that age
console.log(fna); 
console.log(lna);
console.log(a);
console.log(add);
*/



//object kku rest operator kuduthal
/*
let student= {
    name : {
        firstName : "Mohamed",
        lastName : "Rukais",
    },
       age :30,
    address : "Jaffna"
}
let {name:{firstName :fna,lastName : lna},...rest} = student; 
console.log(fna); 
console.log(lna);
console.log(rest); //object print ahuthu, //Michcha mulla object print ahuthu
console.log(rest.age);
console.log(rest.address);
*/
//summary: databasela irunthu vara valuesa nanka enkata virupathuku yetha mari variable aha edukalam, sinna values aha edukalam
//thirupi values aha edukalam, thirupi arrays aha edukalam




//oru functionkkA OBJECT a pass panni athe output aha edukura pathi parthal
/*
let student = {
    fname : "Mohamed",
    age : 30
};
function display(stu){
console.log(`student name ${stu.fname}`);
console.log(`student Age ${stu.age}`);
}
display(student);
*/


//mleukuu ullatha destaructuring murayil seithal
/*
let student = {
    fname : "Mohamed",
    age : 30
};
function display({fname,age}){ //braces kantal u can identify, which is object destructuring
console.log(`student name ${fname}`);
console.log(`student name ${age}`);
}
display(student);
*/


//return function ila arrays, object a velil anupal
/*
function calc(a,b){
  let sum = a + b;
  let sub = a - b;
  let mul = a * b;
  let div = a / b;
  return[sum,sub,mul,div];//here calc entra function array return pannuthu
}

let [sum,sub,mul,dev] = calc(5,2); //name mathiyum kudukalam,here dev ena kuduthirukan, just u can see.
console.log(sum);
console.log(sub);
console.log(mul);
console.log(dev); // so inkayu, deve enathan kudukanum
*/

//object return pannal - vvip for react
/*
function calc(a,b){
    let sum = a + b;
    let sub = a - b;
    let mul = a * b;
    let div = a / b;
    return{sum,sub,mul,div};//here calc entra function object return pannuthu
  }  
  let {sum,sub,mul,div} = calc(5,2); //name mathiyum kuduka yelathu, because ithu object, appidi kuduthal undefined ena print ahum
  console.log(sum);
  console.log(sub);
  console.log(mul);
  console.log(div);   //so calculator home work il ithu pola oru fucntion potun ellam simple aha mudikalam, no need each function for each part

  */

/*
  function calc(a,b){
    let sum = a + b;
    let sub = a - b;
    let mul = a * b;
    let div = a / b;
    return{sum,sub,mul,div};//here calc entra function object return pannuthu
  }
  let {add,sub,mul,div} = calc(5,2);  // add ena name mathinal undefined
  console.log(add);//undefined
  console.log(sub);
  console.log(mul);
  console.log(div); 
  */

  //Solve panra murai
  /*
  function calc(a,b){
    let sum = a + b;
    let sub = a - b;
    let mul = a * b;
    let div = a / b;
    return{add:sum,sub:sub,mul:mul,div};//actul scene, ippidithan potura mura, sub:sub, sum:sum. mul:mul like that, key valuesthane object kka poturan and same name il key values poturarhu eaual ethuku single aha values poturathuku, like sum,sub..
  }
  let {add,sub,mul,div} = calc(5,2);  //name mathinal undefined
  console.log(add);
  console.log(sub);
  console.log(mul);
  console.log(div); 
  */

/*
  let student = {
    fname : "Mohamed",
    age : 30
  };

  let {fname,age} = student;
  console.log(fname);
  console.log(age);
  */

//Error scene
/*
  let student = {
    fname : "Mohamed",
    age : 30
  };

  let {fname,age};
  {fname,age} = student; //this will be the Error, array ky ippidi seitha nafaham
  console.log(fname);
  console.log(age);
  */

  //solve
  /*
  let student = {
    fname : "Mohamed",
    age : 30
  };

  let fname,age; //solve panra murai
  ({fname,age} = student); //this not be an Error
  console.log(fname);
  console.log(age);
  */

  /*
  let student = {
    fname : "Mohamed",
    age : 30,
    getFullName : () =>{
        console.log(`This is my full name`);
    }
  };
  let {fname,age,getFullName} = student;
  console.log(getFullName); //fnction print ahum
  getFullName();//call panra mukkiyam, otherwise print ahathu
*/

