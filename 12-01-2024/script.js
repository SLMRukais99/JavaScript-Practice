let a = [5,4,"Rukais"];
console.log(a);

//Arrays
/*
let arr = new Array();
console.log(arr);
*/

/*
let arr = [];
console.log(arr);
arr[0]= 12;
arr[1] = 52;
arr[2] = 85.5;
arr[3] = "Maths";
arr[4] = true;
console.log(arr);

console.log("Method - 01");
for(let i=0; i<arr.length;i++){
    console.log(arr[i]);
}

console.log("Method - 02");
for(let i in arr){
    console.log(arr[i]);
}

console.log("Method - 03");
for(i of arr){
    console.log(i);
}
*/

//call back Function
/*
arr.forEach(
    function(item,index,array){
       console.log(`item ${item} : index ${index} : array ${array}`);
    }
);
*/

/*
let myFunction = function(item, index, array){
  console.log(item,index,array);
}
arr.forEach(myFunction);
*/

/*
let xyz = [2,3,4,5,6];
let sum = 0;

xyz.forEach(element => {
    sum += element;
});
console.log(sum);
*/
/*
let xyz = [2,3,4,5,6];
let sum = 0;

xyz.forEach(element => {
    sum += element;
});
console.log(sum);
*/

/*
let xyz = [2,3,4,5,6];
let sum = 0;

xyz.forEach(myFunction);
function myFunction(item){
      sum = sum + item;
}
console.log(sum);
*/

//Summary
//In Array we use for loop
//1. for loop
//2. for in loop
//3. for of loop
//4. for each loop

let arr = [12,52,85.5,'Maths',true];
arr.push('seelan');
console.log(arr);
arr.unshift("Rukais");
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
console.log(arr.indexOf(85.5));

//to delete
/*
1. pop - back
2. shift - front
*/
//to add
/*
1. push - back
2. unshift - front
*/
//to find index
//arr.indexof(25);
//arr.lastIndexof('maths');
//arr.length
//arr.foreach(myFunction) - function with in a function called call back function. oin here, for each is a Higher order function