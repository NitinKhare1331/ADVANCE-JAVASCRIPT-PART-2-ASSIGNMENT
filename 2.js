class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayHello(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        
    }
}

class Employee extends Person{
    constructor(name, age, designation) {
        super(name, age);
        this.designation = designation;
    }

    getDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Designation: ${this.designation}`);
    }
}

const employee = new Employee("Nitin", 23, "Software Engineer");
employee.sayHello();
employee.getDetails();