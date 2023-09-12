// Exercise #1

// function outerFunction(){
//     let outerVar = "I'm outside!";  

//      function innerFunction() {
//         let innerVar = "I'm inside!";  // inside function can access the outer function 
//         console.log(outerVar);
//         console.log(innerVar);
//     }

//     innerFunction();
// }

// outerFunction();





//Exercise #2

// const myName = 'Kyle'

// mainFunction(myName);

// function mainFunction(myName) {
// 	console.log(`${myName} is learning to code!`);
// }

// // Exercise #3

// function outer(){
//     let myPhoneNumber = 4178652689
//     function inner(){
//         console.log('I would like to call', myPhoneNumber);
//     }
//     return inner;
// }

// const callPhone = outer();

// callPhone();

// // Exercise #4

// let catsName = 'Freya';

// function modifyGlobal() {
//     console.log(catsName);
// }

// function localScopeTest() {
//     catsName = 'Etna';
//    console.log(catsName);
// }

// modifyGlobal();
// localScopeTest();

// Exericise #5 

// 9/11/23 Class Exericises
// Exericise #1

// Create three functions: one global, one as an object method, and an arrow function inside an object.
console.log('This global', this);

// Exericise #2
// Exericise #3
// Exericise #4

// Define a Person class with properties name and age.
class Person{
    constructor(name, age,){
        this.name = name;
        this.age = age;
    }
    // Add a static method called info() to the Person class. This method should return a statement like, "This is a Person class".
    static info() {
        return console.log('This is a Person Class');
    }
    // Add a method greet() to this class which outputs a greeting.
    speak() {
        console.log(`${this.name}, says hi there`);
    }
};
// Create two different Person instances with unique names and ages
const me = new Person('Kyle', 32);
// Modify your Person class. The constructor should now accept and initialize name and age properties.
const them = new Person('Kurt', 37);
console.log(me);
console.log(them);
// Instantiate two different Person objects and invoke their greet methods.
me.speak();
them.speak();
console.log(me.info);
console.log(Person.info());




























