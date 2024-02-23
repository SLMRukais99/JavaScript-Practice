//Que - 07
export default class Customer{
    constructor(name,id){
        this.name = name;
        this.id = id;
           }
           display(){
               console.log(`School Customer Name: ${this.name}`);
               console.log(`School Customer ID: ${this.id}`);
           }
}

export class Teacher{
    constructor(name,id){
        this.name = name;
        this.id = id;
           }
           displayTeacher(){
               console.log(`Teacher Name: ${this.name}`);
               console.log(`Teacher ID: ${this.id}`);
           }
}