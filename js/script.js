"use strict";

// const vehicleBodyWidth = 5000;
// const vehicleBodylegth = 4000;

// console.log("Ширина кузова автомобиля: " + vehicleBodyWidth + ', длина: ' + vehicleBodylegth);

// ['Lera', 'Denis', 'Anton'].map(item =>)

//Request
// data
// response


// snake_case
// UPPER_SNAKE_CASE
// Kebab-case
// PascalCase 



// let number = 4.6;
// console.log(-4/0);
// console.log('string' * 9);

// const person = "Alex";

// const bool = true;

// console.log(sometime);

// let und;
// console.log(und);


// const obj = {
//     name: 'Jon',
//     age: 25,
//     isMarried: false
// };

//console.log(obj.[name]);
// console.log(obj['name']);

// let arr = ['plum.png', 'orange.jpg', 'apple.jpg', 6, {}, ];
// console.log(arr[1]);


// const arr = [1, 2, 3];

// const arrObj = {
//     0: 1,
//     1: 2,
//     2: 3,
//     abc: {
//         def: {

//         }
//     }
// }

// arrObj.b = '1234';

// console.log(arrObj['b']);
// console.log(arrObj.b);

//const obj = {a: 1, b: 2};

// const obj = {
//     'Anna': 500,
//     'Alice': 800
// };

// const storeName = 'My awesome store';

// const storeDescription = {
//     budget: 10000,
//     employees: ['Alex', 'John', 'Sam'],
//     products: {
//         'soap': 20,
//         'water': 5
//     },
//     open: true
// };

// alert('Hello');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt('18?', '');
// console.log(answer +5);

// const answers = [];

// answers[0] = prompt('Как Ваше имя?', '');
// answers[1] = prompt('Как Ваша фамилия?', '');
// answers[2] = prompt('Сколько Вам лет?', '');

// document.write(typeof(answers));


// const category = 'toys';
// console.log(`https://som.com/${category}/5`);

// const user = 'toys';
// alert(`YYIII?, ${user}`);

// console.log('arr' + "-object");


// sncrement
let incr = 10,
    decr = 10;

// ++incr;
// --decr;

console.log(++incr);
console.log(--decr);

console.log(5%2);

console.log(2 + 2 * 4 == 8);

const isChecked = true,
      isClose = true;

console.log(isChecked && isClose);

let num1 = +prompt( "Сколько тебе лет?", );
let num2 = +prompt( "Сколько?", );

alert( num1 + num2);

let math = 6.35 ;
console.log( math.toFixed(2));

function readNumber() {
    let num;

    do {
        num = prompt("nnnini", 0);
    } while ( !isFinite(num) );

    if (num ==== null || num === '') return null;

    return +num;
}

alert( `Chislo ${readNumber()}`);

// случайное число с плавающей запятой
function random( min, max) {
    return min + Math.random() * (max - min);
}

console.log( random(1, 5) );
console.log( random(1, 5) );
console.log( random(1, 5) );

function randomInteger( min, max) {
    return ( Math.random(min));
    return ( Math.random(max));
}

console.log( randomInteger(100));

let str = 'Hello';
