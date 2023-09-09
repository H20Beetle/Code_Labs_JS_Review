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

const myName = 'Kyle'

mainFunction(myName);

function mainFunction(myName) {
	console.log(`${myName} is learning to code!`);
}

// Exercise #3

function outer(){
    let myPhoneNumber = 4178652689
    function inner(){
        console.log('I would like to call', myPhoneNumber);
    }
    return inner;
}

const callPhone = outer();

callPhone();

// Exercise #4

let catsName = 'Freya';

function modifyGlobal() {
    console.log(catsName);
}

function localScopeTest() {
    catsName = 'Etna';
   console.log(catsName);
}

modifyGlobal();
localScopeTest();

// Exericise #5 





















