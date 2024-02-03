          //string
/*
let s = "seelan";
console.log(s, typeof s);

s = s.length;
console.log(s);
 
let a  = "Yoha seelan";

console.log(a.charAt(5)); //s
console.log(a.indexOf('y')); //0
console.log(a.lastIndexOf('e'));
console.log(a.substring(0,4));
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.includes('seelan'));
console.log(a.endsWith('n'));
console.log(a.replace('y','x'));
console.log(a.split(" "));
console.log(a.trim());
console.log(a.trimEnd());
*/


//Summary
//1.  a.toString();
//2.  a.charAt(4);
//3.  a.indexOf('y');
//4.  a.lastIndexOf('e')
//5.  a.subString(0,4);
//6.  a.toUpperCase();
//7.  a.toLowerCase();
//8.  a.includes("seelan");
//9.  a.endsWith('n');
//10. a.replace('y','x');
//11. a.split(" ");
//12. a.trim();
//13. a.trimEnd();

/*
let fname = "Yarl";
let lname = "IT";

let fullName = "Full Name is "+ fname+" "+ lname;
console.log(fullName);

let anotherFullName = `Full Name is ${fname} ${lname}`;
console.log(anotherFullName);

let objFname = new String('yoha');
let objLname = objFname;
console.log(objFname);
*/

                     //HomeWork

                     //way -01
//First letter capital and remaining small
/*let myName = "assalamu alaikum";
let a = myName.charAt(0).toLocaleUpperCase();
let b = myName.substring(1,myName.length).toLowerCase();
console.log(a+b);
*/

                    //way -02
/*                    
let urName = " assalamualaikum varahamathullahi vabarakathuhu";
let arr = urName.trim().split(" ");
let res1= "";
let res,b,c;

for(i=0;i<arr.length;i++){
     b = arr[i].charAt(0).toUpperCase();
     c = arr[i].substring(1,arr[i].length).toLowerCase();
     res = b+c;
     res1 = res1 + res +" ";
}
console.log(res1.trim());
*/

// NaN - Not an Number
/*
console.log(isNaN("Hello"));
console.log(Number.isNaN('hello'));
console.log(isNaN(123));
*/

// check whether it is an NIC no or not

let nic = "   990071896V  ";
let nicTrim = nic.trim();

if(nicTrim.length == 10){
    let x =nicTrim.substring(0,nicTrim.length-1);
    if(isNaN(x)){
          console.log("!Invalid NIC");
    }
    else{
         if(nicTrim.charAt(9)=='v' || nicTrim.charAt(9)=='V' ||nicTrim.charAt(9)=='X' || nicTrim.charAt(9)=='x'){
                console.log("Valid NIC");
         }
         else{
          console.log("!Invalid NIC");
         }
    }
   
}
else{
     console.log("!Invalid NIC first");
}