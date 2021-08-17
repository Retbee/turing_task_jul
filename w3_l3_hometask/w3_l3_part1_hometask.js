// 1
// let a = 0
// while (a < 11) {
//     console.log(a)
//     a++;
// }
// do {
//     console.log(a)
//     a++
// } while (a <= 10)
// for (let i = 0; i <=10; i++) {
//     console.log(a)
//     a++
// }


// 2
// let a = 0;
// let end = 'Завершить'
// do  {
//     console.log(a)
//     a++
// } while (prompt('') !== end)

// 3
// let odd = 0;
// for (let i = 0; i < 20; i++) {
//     odd++
//     if (odd % 2) {
//         console.log(odd)
//     }
// }


// 4
// 5
// let reverse = (first, second) => {
//     let num1 = first;
//     let num2 = second;
//     let c;
//     c = num1;
//     num1 = num2;
//     console.log(num1, c)
// }
// reverse(2, 25)

// 6
// let toString = (n) => console.log(n.toFixed(2))
// toString(143.2343)


// 7
// let toFirst = (n) => console.log(Math.floor(n * 10) / 10);
// toFirst(42.2654)


// 8
// let FirstEncounter = (phrase, word) => console.log(phrase.indexOf(word));
// FirstEncounter('I learn Javascript', 'Javascript');


// 9
// let makeCounterArrow = () => {
//     let currentCounterArrow = 0;
//     return function () {
//         currentCounterArrow++; return currentCounterArrow;
//     }
// }
// const counterArrow = makeCounterArrow();
// console.log(counterArrow())
// console.log(counterArrow())
// console.log(counterArrow())


// 10
// function context() {
//     console.log(this)
// }
//
// const person = {
//     id: 1,
//     name: "Vasya",
//     age: 23,
//     contextShow: context
// }
// console.log(person.contextShow())


//11
// let squarePow = (num, callback) => {
//    return callback(callback(num))
// }
// console.log(squarePow(2, (num) => num * num))
// 12
