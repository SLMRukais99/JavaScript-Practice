//Array of objects, arraykka object vaarathu
/*
let student = [
{fname :"seelan", lname:"Yoha", age : 26 },
{fname :"Muralee", lname:"Tharan", age : 35 },
{fname :"Kokilan", lname:"balan", age : 26 },
{fname :"nathan", lname:"Siva", age : 26 },
];
console.log(student);
*/

//destructure the array
//1.
/*
let student = [
    {fname :"seelan", lname:"Yoha", age : 26 },
    {fname :"Muralee", lname:"Tharan", age : 35 },
    {fname :"Kokilan", lname:"balan", age : 26 },
    {fname :"nathan", lname:"Siva", age : 26 },
    ];
     
    let [{fname}] = student;
    console.log(fname);
    */
    
    //2.
    /*
    let student = [
        {fname :"seelan", lname:"Yoha", age : 26 },
        {fname :"Muralee", lname:"Tharan", age : 35 },
        {fname :"Kokilan", lname:"balan", age : 26 },
        {fname :"nathan", lname:"Siva", age : 26 },
        ];
       
        let [{fname,lname,age}] = student;
        console.log(fname);
        console.log(lname);
        console.log(age);
        console.log(fname,lname,age);
        */

        //To get the all the value, there is the problem with the same variable name
        /*
        let student = [
            {fname :"seelan", lname:"Yoha", age : 26 },
            {fname :"Muralee", lname:"Tharan", age : 35 },
            {fname :"Kokilan", lname:"balan", age : 26 },
            {fname :"nathan", lname:"Siva", age : 26 },
            ];
           
            let [{fname,lname,age}, {fname,lname,age}] = student; //this is the error
            console.log(fname);
            console.log(lname);
            console.log(age);
            console.log(fname,lname,age);
            */

            //We have to solve
          /*
            let student = [
                {fname :"seelan", lname:"Yoha", age : 26 },
                {fname :"Muralee", lname:"Tharan", age : 35 },
                {fname :"Kokilan", lname:"balan", age : 26 },
                {fname :"nathan", lname:"Siva", age : 26 },
                ];
               
                let [{fname: fname1,lname:lname1,age:age1}, {fname,lname,age}] = student; 
                console.log(fname1);
                console.log(lname1);
                console.log(age1);


                console.log(fname);
                console.log(lname);
                console.log(age);
                console.log(fname,lname,age);
             */

                /*
                let student = [
                    {fname :"seelan", lname:"Yoha", age : 26 },
                    {fname :"Muralee", lname:"Tharan", age : 35 },
                    {fname :"Kokilan", lname:"balan", age : 26 },
                    {fname :"nathan", lname:"Siva", age : 26 },
                    ];
                   
                    let [{fname: fname1,lname:lname1,age:age1}, {fname :fname2,lname:lname2,age:age2}] = student; //this is the error
                    console.log(fname1);
                    console.log(lname1);
                    console.log(age1);
    
    
                    console.log(fname2);
                    console.log(lname2);
                    console.log(age2);
                    console.log(fname1,lname1,age1);
                */

//objects kka array potuthal
/*
let student = {
    student1 : ["Mohamed", "Rukais",25],
    student2 : ["Yoha", "Seelan", 24]
};
console.log(student);
*/

//destructuring
/*
let student = {
    student1 : ["Mohamed", "Rukais",25],
    student2 : ["Yoha", "Seelan", 24]

};
let {student1,student2 }= student;
console.log(student1);
console.log(student2);
*/

/*
let student = {
    student1 : ["Mohamed", "Rukais",25],
    student2 : ["Yoha", "Seelan", 24]

};
//same name vaikaka pirachina entu  velankuthu thane
//let {student1:[fname,lname,age],student2:[fname,lname,age]}= student;
let {student1:[fname1,lname1,age1],student2:[fname2,lname2,age2]}= student;

console.log(fname1);
console.log(lname1);
console.log(age1);

console.log(fname2);
console.log(lname2);
console.log(age2);
*/