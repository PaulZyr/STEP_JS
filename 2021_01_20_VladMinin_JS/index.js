//"use strict";
// const person = {
//     name:'Paul',
//     age:49,
//     hello: function(){
//         console.log(`Hello, ${this.name}! You are ${this.age} year old.`);
//     }
// }

// let person = new Object({
//     name:'Paul',
//     age:49,
//     hello: function(){
//         console.log(`Hello, ${this.name}! You are ${this.age} year old.`);
//     }
// })

// Object.prototype.sayHi = function() {
//     console.log('hi here');
// }

function createCalcFunction(n) {
    return function() {
        console.log(1000 * n);
    }
}

let calc = createCalcFunction(42);
// теперь calc это функция, кот мы получаем из другой функции
calc() // она уже создана с параметром 42

function foo() {
    let cort = 3;
    console.log('foo cort = ', cort);
    return function foo2() {
        console.log('foo2 cort = ', ++cort);
    }
}
f = foo();
f2 = foo();
//console.log('cort', f.cort);