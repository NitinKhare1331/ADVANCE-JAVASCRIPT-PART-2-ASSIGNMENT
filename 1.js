class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayHello(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        
    }
}

const Person1 = new Person("Nitin", 23);
Person1.sayHello();