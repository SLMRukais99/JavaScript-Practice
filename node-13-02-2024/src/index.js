/*console.log("Welcome to Node JS");
console.log("1");
console.log("2");
console.log("3");
console.log("Rukais");
*/

//Que - 01 //npm run dev enta command than use panra
/*
let {x} = require('./student.js');
console.log("Welcome node Js");
console.log(x);
*/

//Que -02
//ippidi seiya pakage.json ill type = module Sekanum, athavathu importin pothu
/*
import {x} from './student.js';
console.log("Welcome Node Js and Rukais");
console.log(x);
*/
 

//Que - 03
//Text file la irunthu read panni eduthal valuesa
/*
import {x} from './student.js';
import {readFile} from 'fs';
readFile('./src/my-file/student.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log(data.toString());
});//call back function (err,data)=>{} ithu function kka function aha vanthu iruku
  
console.log("welcome JS");
console.log(x);
*/


//documnetationil requied method la senjathal module enta itam anka potiruka maatanka, here also import use pannithan senchi iruku
//Que - 04
//Another way
/*
import {x} from './student.js';
import {readFile} from 'fs';
readFile('./src/my-file/student.txt','utf8',(err,data)=>{ //unicode systemathiri enkata datava binary formatla irundthu string format kku mathi tharum. ithanal .toSring pota thevalla
    if(err){
        throw err;
    }
    console.log(data);//utf8 eluthinal .toString() pota thevlla
});
console.log("welcome JS");
console.log(x);
*/

//Que  - 05
//Another way
//required use panra murai, this time package .json la ulla moule la delete pannu, melukullathuku theva that module
const fs =  require('node:fs');
const path = require('node:path');//here path use pannirukan ithanal keeluku join moolam appidi kudukalam ok, melukkulla mathiri virivahavum path kuduthu require method kku seiyalam

fs.readFile(path.join(__dirname,"my-file","student.txt"),'utf8',(err,data)=>{ //entha direct kka irukam, enna folder kka irukam and text file, ithu 3ayum kuduthal athuta partha tharum
    
    if(err){
        throw err;
    }
    console.log(data)
})
console.log("welcome JS");
console.log(path.join(__dirname,"my-file","student.txt")); //Ithu antha patha output aha tharum, just see what kind of out put is
console.log(path.join(__dirname)); //ituhal ovvontaha etuthu than path.join anathu join pannuthu
