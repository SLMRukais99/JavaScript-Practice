//Inheritance
/*class Student{
    id = 1000;
    name = "Seelan";
    setMarks(marks1,marks2,marks3){
        this.marks1 = marks1;
        this.marks2 = marks2;
        this.marks3 = marks3;
    }
    display(){
        console.log(`student name ${this.name}`);
    }
}

class Employee{
    id = 250;
    name = "Muralee";
    setBasicSalary(basicSalary){
        this.BasicSalary = basicSalary;
    }
    display(){
        console.log(`Employee name ${this.name}`);
    }
}

let emp1 = new Employee();
emp1.display();
let student1 = new Student();
student1.display();
*/

/*
class Person{
    id = 1000;
}
class Student extends Person{
    
    name = "Seelan";
    setMarks(marks1,marks2,marks3){
        this.marks1 = marks1;
        this.marks2 = marks2;
        this.marks3 = marks3;
    }
    display(){
        console.log(`student name ${this.name}`);
    }
}

class Employee extends Person{
    
    name = "Muralee";
    setBasicSalary(basicSalary){
        this.BasicSalary = basicSalary;
    }
    display(){
        console.log(`Employee name ${this.name}`);
    }
}

let emp1 = new Employee();
emp1.display();
let student1 = new Student();
student1.display();
*/

/*
class Person{
    id = 1000;
}
class Student extends Person{
    
    name = "Seelan";
    setMarks(marks1,marks2,marks3){
        this.marks1 = marks1;
        this.marks2 = marks2;
        this.marks3 = marks3;
    }
    display(){
        console.log(`student name ${this.name}`);
    }
}

class Employee extends Person{
    
    name = "Muralee";
    setBasicSalary(basicSalary){
        this.BasicSalary = basicSalary;
    }
    display(){
        console.log(`Employee name ${this.name}`);
    }
}

let emp1 = new Employee();
console.log(emp1.id); // 1000
emp1.id = 2000;
console.log(emp1.id); //2000

let student1 = new Student();
console.log(student1.id); //1000
*/

/*
class Person{
    id = 1000;
    name = "Seelan";
}
class Student extends Person{
    
    
    setMarks(marks1,marks2,marks3){
        this.marks1 = marks1;
        this.marks2 = marks2;
        this.marks3 = marks3;
    }
    display(){
        console.log(`student name ${this.name}`);
    }
}

class Employee extends Person{

    setBasicSalary(basicSalary){
        this.BasicSalary = basicSalary;
    }
    display(){
        console.log(`Employee name ${this.name}`);
    }
}

let emp1 = new Employee();
emp1.display(); //Employee name is seelan

let student1 = new Student();
student1.display(); //Student name is seelan
*/

//this is the common problem . athavathu name,id common ana padiyala the personka potan
//but enaku diiferent name, id iruku student and employeeku,
//athuku than constructor function use panra.


//constructor kulla this potu parent ota properties access panni parthal
//that also will show the error
//this use panna kootathu
/*
class Person{
    id = 1000;
    name = "Seelan";
}
class Student extends Person{
    
    constructor(id,name){
       this.id = id;
       this.name = name;
    }
    
    setMarks(marks1,marks2,marks3){
        this.marks1 = marks1;
        this.marks2 = marks2;
        this.marks3 = marks3;
    }
    display(){
        console.log(`student name ${this.name}`);
    }
}

class Employee extends Person{

    constructor(id,name){
      this.id = id;
      this.name = name;
    }
    setBasicSalary(basicSalary){
        this.BasicSalary = basicSalary;
    }
    display(){
        console.log(`Employee name ${this.name}`);
    }
}

let emp1 = new Employee(3000,"Muralee");
emp1.display(); 
console.log(emp1.id);
emp1.id = 2000;
console.log(emp1.id);

let student1 = new Student(4000,"Thuvi");
student1.display();
*/


//The correct wat to use the parent class using constructor
/*
class Person{

    constructor(id,name){
            this.id = id;
            this.name = name;
    }
}
class Student extends Person{
    
    constructor(id,name){
       super(id,name); //intha super keyword than parant ota constructor a call panra
    }
    
    setMarks(marks1,marks2,marks3){
        this.marks1 = marks1;
        this.marks2 = marks2;
        this.marks3 = marks3;
    }
    display(){
        console.log(`student name ${this.name}`);
    }
}

class Employee extends Person{

    constructor(id,name){
      super(id,name);
    }
    setBasicSalary(basicSalary){
        this.BasicSalary = basicSalary;
    }
    display(){
        console.log(`Employee name ${this.name}`);
    }
}

let emp1 = new Employee(3000,"Muralee");
emp1.display();  //
console.log(emp1.id);//3000
emp1.id = 2000;
console.log(emp1.id);//2000

let student1 = new Student(4000,"Thuvi");
student1.display();
console.log(student1.id);
*/

//anotherway
//child ota constructor kka this key word use pannitu with super() use panra.
/*
class Person{

    constructor(id,name){
            this.id = id;
            this.name = name;
    }
}
class Student extends Person{
    
    constructor(id,name){
        super();
       this.id = id;
       this.name = name;
    }
    
    setMarks(marks1,marks2,marks3){
        this.marks1 = marks1;
        this.marks2 = marks2;
        this.marks3 = marks3;
    }
    display(){
        console.log(`student name ${this.name}`);
        console.log(`Employee name ${this.id}`);
    }
}

class Employee extends Person{

    constructor(id,name){
        super();
      this.id = id;
      this.name = name;
    }
    setBasicSalary(basicSalary){
        this.BasicSalary = basicSalary;
    }
    display(){
        console.log(`Employee name ${this.name}`);
        console.log(`Employee name ${this.id}`);
    }
}

let emp1 = new Employee(3000,"Muralee");
emp1.display();  //

//you can remove following 3 lines
console.log(emp1.id);//3000
emp1.id = 2000;
console.log(emp1.id);//2000

let student1 = new Student(4000,"Thuvi");
student1.display();

//you can remove this line
console.log(student1.id);
*/

//there reason for above things.
//actually we put super(); like that . but they didn't use id = 1000; name = "Kumar Sankagara"; these things. 
//here parent class ota property payanpatutha patavillai
 
/*
class Person{

   id = 1000;
   name = "Kumar Sankagara";
  
//    constructor(id,name){
//             this.id = id;
//             this.name = name;
//     }
    
}
class Student extends Person{
    
    constructor(id,name){
        super();
       this.id = id;
       this.name = name;
    }
    
    setMarks(marks1,marks2,marks3){
        this.marks1 = marks1;
        this.marks2 = marks2;
        this.marks3 = marks3;
    }
    display(){
        console.log(`student name ${this.name}`);
        console.log(`Employee name ${this.id}`);
    }
}

class Employee extends Person{

    constructor(id,name){
        super();
      this.id = id;
      this.name = name;
    }
    setBasicSalary(basicSalary){
        this.BasicSalary = basicSalary;
    }
    display(){
        console.log(`Employee name ${this.name}`);
        console.log(`Employee name ${this.id}`);
    }
}

let emp1 = new Employee(3000,"Muralee");
emp1.display();  //

let student1 = new Student(4000,"Thuvi");
student1.display();
*/

//child cobtructor kka irukura this a command panni parkan
//now parent ota properties a prin pannuthu
/*
class Person{

    id = 1000;
    name = "Kumar Sankagara";
   
 //    constructor(id,name){
 //             this.id = id;
 //             this.name = name;
 //     }
     
 }
 class Student extends Person{
     
     constructor(id,name){
         super();
       // this.id = id;
       // this.name = name;
     }
     
     setMarks(marks1,marks2,marks3){
         this.marks1 = marks1;
         this.marks2 = marks2;
         this.marks3 = marks3;
     }
     display(){
         console.log(`student name ${this.name}`);
         console.log(`Employee name ${this.id}`);
     }
 }
 
 class Employee extends Person{
 
     constructor(id,name){
         super();
    //    this.id = id;
    //    this.name = name;
     }
     setBasicSalary(basicSalary){
         this.BasicSalary = basicSalary;
     }
     display(){
         console.log(`Employee name ${this.name}`);
         console.log(`Employee name ${this.id}`);
     }
 }
 
 let emp1 = new Employee(3000,"Muralee");
 emp1.display();  //
 
 let student1 = new Student(4000,"Thuvi");
 student1.display();
*/


//This is proper way
/*
class Person{
     constructor(id,name){
              this.id = id;
              this.name = name;
      }
     
 }
 class Student extends Person{
     
     constructor(id,name){
         super(id,name);
       
     }
     
     setMarks(marks1,marks2,marks3){
         this.marks1 = marks1;
         this.marks2 = marks2;
         this.marks3 = marks3;
     }
     display(){
         console.log(`student name ${this.name}`);
         console.log(`Employee name ${this.id}`);
     }
 }
 
 class Employee extends Person{
 
     constructor(id,name){
         super(id,name);
    //    this.id = id;
    //    this.name = name;
     }
     setBasicSalary(basicSalary){
         this.BasicSalary = basicSalary;
     }
     display(){
         console.log(`Employee name ${this.name}`);
         console.log(`Employee name ${this.id}`);
     }
 }
 
 let emp1 = new Employee(3000,"Muralee");
 emp1.display();  //
 
 let student1 = new Student(4000,"Thuvi");
 student1.display();
 */

 //Display enta method 2 kkum pothuvaha irupathal now i move the display method into person
 //here setmarks(), setBasicSalary athu 2 child kkum comman anathu
class Person{
     constructor(id,name){
              this.id = id;
              this.name = name;
      }
      display(msg){
        console.log(`${msg} name ${this.name}`);
        console.log(`${msg} name ${this.id}`);
    }
     
 }
 class Student extends Person{
     
     constructor(id,name){
         super(id,name);
       
     }
     
     setMarks(marks1,marks2,marks3){
         this.marks1 = marks1;
         this.marks2 = marks2;
         this.marks3 = marks3;
     }
     
 }
 
 class Employee extends Person{
 
     constructor(id,name){
         super(id,name);

     }
     setBasicSalary(basicSalary){
         this.BasicSalary = basicSalary;
     }
    
 }
 
 let emp1 = new Employee(3000,"Muralee");
 emp1.display("Employee");  //
 
 let student1 = new Student(4000,"Thuvi");
 student1.display("Student");
 


