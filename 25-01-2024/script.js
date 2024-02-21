//Getter Setter Method
/*
class Student{
   // here setName(), FName() function aha tholil patuthu
    setFName(fname){
       this.fName = fname;
    }
    getFName(){
      console.log(this.fName); // Kavanam capital FName
    }
}

let student1 = new Student();
student1.setFName("Seelan");
student1.getFName();
*/


/*
//here functiona aha tholil patura visayatha variable aha maathal
class Student{

    set FName(fname){  // here we use set key word , here FName, _fName same aha iruka kootathu
       this._fName = fname;
    }
    get FName(){  // here we use set key word
      return this._fName; 
    }
}

let student1 = new Student();
student1.FName = "Seelan";  //set access panra mura
console.log(student1.FName);//get inathu FName a caall panni parkan = athu return type enpathal return pannum
*/

//uses of getter setter method
//input ota oru visayam serkanumain set method kka ptu than serpom, ippidian logic elutha than getter setter method use panra
//for example salary vankum pothu input aha dollar sign add ahanum ental
/*
class Student{

    set FName(fname){  
       this._fName = "Hi " + fname;
    }
    get FName(){  
      return this._fName; 
    }
}

let student1 = new Student();
student1.FName = "Seelan";  //here set kku value assign ahuthu
console.log(student1.FName); //ithu get vanthu function call
*/

/*
class Student{

    set FName(fname){  
       this._fName = "Hi " + fname;
    }
    get FName(){  
      return "My name is "+this._fName; 
    }
}

let student1 = new Student();
student1.FName = "Seelan";  
console.log(student1.FName); //ithu vanthu function call
*/

/*
class Student{

   set FName(fname){  
      this._fName = "Hi " + fname;
   }
   get FName(){  
     return "My name is "+this._fName; 
   }
}

let student1 = new Student();
student1.FName = "Seelan";  
student1._fName = "Yoha";//ithanal hi enkura vitayam print ahala this is another issue. ithu bad habbit, oral variable ai velil irundhu access panna kootanta theva iruku
//Meluku ulla line la velil irundhu access panranka, athu bad habbit, velil access panratha thatukka private use panra
console.log(student1.FName);
*/

//so they introduce # - private access modifier
/*
class Student{
     #_fName = "";  //private must be declared
   set FName(fname){  
      this.#_fName = "Hi " + fname;
   }
   get FName(){  
     return "My name is "+this.#_fName; 
   }
}

let student1 = new Student();
student1.FName = "Seelan";  
student1._fName = "Yoha";//here ithu access ahathu, because athu private variable. here class kku velila access panram
console.log(student1.FName);
*/

/*
class Student{
   #_fName;  //private must be declared without initialization
 set FName(fname){  
    this.#_fName = "Hi " + fname;
 }
 get FName(){  
   return "My name is "+this.#_fName; 
 }
}

let student1 = new Student();
student1.FName = "Seelan";  

console.log(student1.FName);
*/

/*
//private variable declared with initialization
class Student{
   #_fName = "muralee"; 
 set FName(fname){  
    this.#_fName = "Hi " + fname;
 }
 get FName(){  
   return "My name is "+this.#_fName; 
 }
}

let student1 = new Student();

console.log(student1.FName); //My name is muralee
*/

//This is is one way
/*
class Student{
   #_fName = "Muralee";   //Initial pannamal utalam
   #_lName = "tharan";   //ithu global variable mari irundhalum ithe method kka access pannakka this potuthan access pannnanum pola
 set FName(fname){  
    this.#_fName = fname;
 }
 get FName(){  
   return "My First name is "+this.#_fName; 
 }
 set FName(fname){
       this.#_fName = fname;
 }

 get lName(){
   return "My name last is "+this.#_lName;
 }
 set lName(lname){
           this.#_lName =  lname;
 } 
 #getFullName(){
          return this.#_fName;
 }

 display(){
   console.log("First Name :" + this.#_fName);
   console.log("Last Name :" + this.#_lName);
   console.log("Full Name :" + this.#getFullName());
 }
}

let student1 = new Student();
student1.FName = "Mohamed"; //set methid
student1.lName = "Rukais"; //set method
student1.display();

// In here get fullName access panna yelathu because private access modifier
*/

/*
//here above programme a static aha maathuran, so this kku pathilaha class kku maathanum
class Student{
 static #_fName = "Muralee";  
 static #_lName = "tharan";   
set FName(fname){  
   Student.#_fName = fname;
}
get FName(){  
  return "My First name is "+ Student.#_fName; 
}
set FName(fname){
      Student.#_fName = fname;
}

get lName(){
  return "My name last is "+ Student.#_lName;
}
set lName(lname){
          Student.#_lName =  lname;
} 
#getFullName(){
         return Student.#_fName;
}

display(){
  console.log("First Name :" + Student.#_fName);
  console.log("Last Name :" +  Student.#_lName);
  console.log("Full Name :" +  this.#getFullName()); // Ivetatha student pota theva;; because getFUllName static method
}
}

let student1 = new Student();
student1.FName = "Mohamed"; //set methid
student1.lName = "Rukais"; //set method
student1.display();
*/

//here i am going to change the display method into static, when we change the static method as a static,
//you shuld change the --this.#getFullName() -- this key word into Student and also #getfullName ku munnukum static than use panra
//Now i change the other method as a static
/*
class Student{
  static #_fName = "Muralee";  
  static #_lName = "tharan";   
 static set FName(fname){  
    Student.#_fName = fname;
 }
 static get FName(){  
   return "My First name is "+ Student.#_fName; 
 }

 
static get lName(){
   return "My name last is "+ Student.#_lName;
 }
 static set lName(lname){
           Student.#_lName =  lname;
 } 
 static #getFullName(){
          return Student.#_fName;
 }
 
static display(){
   console.log("First Name :" + Student.#_fName);
   console.log("Last Name :" +  Student.#_lName);
   console.log("Full Name :" +  Student.#getFullName()); // Ivetatha student pota theva;; because getFUllName static method
 }
 }
 
Student.FName = 'Mohamed';// Ithu set FName
Student.lName = 'Rukais';// Ithu set lName
Student.display();
*/

//static methodkka use panra variable eppothum static ahathan irukanum
//static method kka Instance variable use oanna mudiyathu, instance variable enta summa variable, this potu varathuhal
//Anal Instance methodkka static variable use pannalam
//here #_fName static illame aki irukam
class Student{
 static #_fName = "Muralee";  
  static #_lName = "tharan";   
 
 static get FName(){  
   return "My First name is "+ Student.#_fName; 
 }
 static set FName(fname){  
  Student.#_fName = fname;
}

 
static get lName(){
   return "My name last is "+ Student.#_lName;
 }
 static set lName(lname){
           Student.#_lName =  lname;
 } 
 static #getFullName(){
          return Student.#_fName;
 }
 
static display(){
   console.log("First Name :" + Student.#_fName);
   console.log("Last Name :" +  Student.#_lName);
   console.log("Full Name :" +  Student.#getFullName()); 
 }
 }
 
Student.FName = 'Mohamed';
Student.lName = 'Rukais';
Student.display();

//summary
/*
staic method ka only we can use static variable=class variable
but instance methid kka or normal method kka naanka both static and instance variable ayum use pannalam
*/