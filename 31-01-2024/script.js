/*
console(x); // It will show the error like Uncaught ReferenceError: x is not defined
console.log('Test');// so error kku keela irundha test run ahala
*/

//so we have to use try catch
/*
try{
    console(x);
}catch(error){
    console.log("Error");
}
console.log('Test 02') //Here test 2 also work well
*/

//error.message use pannal enna error entu sollum
/*
try{
    console(x);
}catch(error){
    console.log(error.message); //Here x is not defined ena print ahum, Here errror enbathu object
}
console.log('Test 02') //Here test 2 also work well
*/

//error enta object kka 3 property iruku
// 1. Message enta property
// 2. Name enta property
// 3. stack enta property

//when we use name property
/*
try{
    console(x);
}catch(error){
    console.log(error.name);   //It will show the Reference Error 
}
console.log('Test 02');
*/

//when we use stack property
/*
try{
    console(x);
}catch(error){
    console.log(error.stack);  // melukulla 2 ium searthu(Name,message potaka vaara outputa) viriva sellim, ethunavathu line la error enaum kaatum
    //ReferenceError: x is not defined
}
console.log('Test 02');
*/

//Note - Error shoert ahh e entum eluthalam in the catch 
/*
try{
    console(x);
}catch(e){
    console.log(e.message);  
    console.log(e.name);  
    console.log(e.stack);  
}
console.log('Test 02');
*/


//use finally keyword
/*
try{
    console(x);
}catch(e){
    console.log(e.message);  
    console.log(e.name);  
    console.log(e.stack);  
}finally{
    console.log('This is finally')
}
console.log('Test 02');
*/

/*
//use finally keyword, the situation is error yetpatathu, catch kka irukurathu prin avathu
try{
    let x=5;
    console.log(x);
}catch(e){
    console.log(e.message);  
    console.log(e.name);  
    console.log(e.stack);  
}finally{
    console.log('This is finally')
}
console.log('Test 02');
//so assumption, error vanthalum varanatalum finally block execute ahum
*/


//user defined errors
/*
try{
      let x = 4/0;
      console.log(x);
}catch(e){
    console.log(e.message); //infinity
}
*/
/*
try{
    let x = 4/0;
    console.log(x);
    if(x==Infinity){
        throw new Error("Divided by Zero Error"); //Divided by zero error
    }
}catch(e){
  console.log(e.message); //1.Infinity
}
*/

//in here Divided by zero error enkura mattum than print ahum
/*
try{
    let x = 4/0;
   
    if(x==Infinity){
        throw new Error("Divided by Zero Error"); //Divided by zero error
    }
    console.log(x);
    
}catch(e){
  console.log(e.message); 
}
*/

//both are same, above and this
/*
try{
    let x = 4/0;
   
    if(x==Infinity){
        let err= new Error("Divided by Zero Error");
        throw err; //Divided by zero error
    }
    console.log(x);
    
}catch(e){
  console.log(e.message); 
}
*/

//with function
/*
function sum(num1,num2){

    if(isNaN(num1)|| isNaN(num2)){
        throw new Error("Not a valid Number");
    }
    return num1+num2;
}
let x = sum(10,20);
console.log(x); //30
*/

/*
function sum(num1,num2){

    if(isNaN(num1)|| isNaN(num2)){
        throw new Error("Not a valid Number");
    }
    return num1+num2;
}
let x = sum("10","20"); // inku string english value kuduthalum error katathu because here cancatination than natakum
console.log(x);//1020  ......
*/

/*
function sum(num1,num2){

    if(isNaN(num1)|| isNaN(num2)){
        throw new Error("Not a valid Number");
    }
    return num1-num2;
}
let x = sum("10","20");
console.log(x); //-10 , inku string number auto aha num tyope kku maruthu, thats why no error shown
*/
/*
function sum(num1,num2){

    if(isNaN(num1)|| isNaN(num2)){
        throw new Error("Not a valid Numbermmm");
    }
    return num1-num2;
}
let x = sum("uk","vk");
console.log(x); //not a valid numbermmm
console.log("End");
*/

/*

function sum(num1,num2){

    if(isNaN(num1)|| isNaN(num2)){
        throw new Error("Not a valid Numbermmm");
    }
    return num1-num2;
}
let x = sum("uk","vk");

try{
   
    console.log(x);
}catch(e){
    console.log(e.message);
}
 
console.log("End");
*/

// let x = sum("uk","vk"); intha line ayum try kulla potanum
//summary fuctiona call panra etathulathan try catch potura, functionkka potura illa
/*
function sum(num1,num2){

    if(isNaN(num1)|| isNaN(num2)){
        throw new Error("Not a valid Numbermmm");
    }
    return num1-num2;
}


try{
    let x = sum("uk","vk");
    console.log(x);
}catch(e){
    console.log(e.message);
}
 
console.log("End");
*/

// so multiple throw pannalam
/*
function sum(num1,num2){

    if(isNaN(num1)|| isNaN(num2)){
        throw new Error("Not a valid Numbermmm");
    }
    
    if(num1 == 0){
        throw new Error("Not a valid Number by zero");
    }
    return num1-num2;
}


try{
    let x = sum(0,"3");
    console.log(x);
}catch(e){
    console.log(e.message);
}
 
console.log("End");
*/
//summary : which is used to do the validation

//name property um use pannalam
/*
function sum(num1,num2){

    if(isNaN(num1)|| isNaN(num2)){
        let e = new Error("Not a valid NUmber"); //bracket kka pass panna athuku name message,athavathu mesage property, e.message
        e.name = "NumberError";// ithu name property, here e enbathu object
        throw e;
    }
    
    if(num1 == 0){
        let e =  new Error("Not a valid Number by zero");
        e.name = "ZeroError";
        throw e;
    }
    return num1-num2;
}


try{
    let x = sum(0,"3");
    console.log(x);
}catch(e){
    console.log(e.message); //Not a valid number by zero
    console.log(e.name); //ZeroError
}
 
console.log("End");
*/

//Ipp meluku in builf ana error varthane, antha errora naame virumpina ithuku mathi show pannalam user kku
function sum(num1,num2){

    if(isNaN(num1)|| isNaN(num2)){
        let e = new Error("Not a valid NUmber"); 
        e.name = "NumberError";
        throw e;
    }
    
    if(num1 == 0){
        let e =  new Error("Not a valid Number by zero");
        e.name = "ZeroError";
        throw e;
    }
    return num1-num2;
}

try{
    let x = sum(0,"3");
    console.log(x);
}catch(e){
    console.log(e.message); 
    console.log(e.name); 
    if(e.name = "ZeroError"){
        console.log("User define Error1 message1"); //tamilla display pannaum appidi entalum ithuhala potu seiyalam ok.
    }
    else if(e.name = "NumberError"){
        console.log("User define Error2 message2"); 
    }
}
 
console.log("End");


