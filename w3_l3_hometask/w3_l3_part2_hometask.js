// 1
// let obj1 = {a: 'a', b: 'b', c: 'c'}
// console.log(obj1['a'])
// console.log(obj1.a)


// 2
// let obj2 = {a: 2, b: 'Coding',}
// let copyAssign = Object.assign({}, obj2);
// console.log(copyAssign);
//
// let copySpread = {...obj2};
// console.log(copySpread)


// 3
// let objWithChanges = {a: 4};
// objWithChanges.b = 5;
// console.log(objWithChanges)
// delete objWithChanges['a']
// console.log(objWithChanges)


// 4
// let FIO = {
//     name: 'Ivan',
//     lastName: 'Ivanov',
//     salary: 35,
// }
//
// for (value in FIO) {
//     console.log(value)
// }


// 5
// let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < array.length; i++) {
//     console.log(i)
// }
// for (a in array) {
//     console.log(a)
// }
// for (b of array) {
//     console.log(b)
// }


// 6
// function Animal(name, kind) {
//     this.name = name;
//     this.kind = kind;
// }
// console.log(new Animal('Tifus', 'cat'))


// 7
// let sorting = (str) => {
//     console.log(str.split('').sort().join(''))
// }
// sorting('macintosh')


// 8
// let sortingArr = (arr) => {
//     function callBack (a, b) {
//         return (a > b) ? 1 : - 1;
//         // if (a > b) return 1;
//         // if (a < b) return -1;
//     }
//     return arr.sort(callBack)
// }
// console.log(sortingArr([456,67867835,124346546,568464,9,11,14,16,19]))
// let indexItem = (arr, name) => arr.indexOf(name)
// console.log(indexItem([4,7,15,37,25,'Nazgul',19,48,], "Nazgul"))


// 9
// let indexItem = (arr, name) => arr.indexOf(name)
// console.log(indexItem([4,7,15,37,25,'Nazgul',19,48,], "Nazgul"))


// 10
// let newArr = [
//     [0,1,2,3,4,],
//     [5,6,7,8,9,10],
// ]
// console.table(newArr)


// 11
// let arrMonthEn_Ru = [
//     ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', "September", "October", "November", "December"],
//     ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
//     ]
//
// let keyValue = () => {
//
// }


// 12
// let originalArr = [7,5,4,3,5,7,24,2,234,45,]
// let copyArray = (array) => {
//     return array.slice()
// }
// let result = copyArray(originalArr)
// console.log(result)


// 13
// let arrForSum = [4,5,6,7,4,4,]
// let arrSum = (arr) => (arr.reduce(function (current, sum) {return current + sum}))
// console.log(arrSum(arrForSum))


// 14


// 15
// let arr1 = [3,5,6,6,7,]
// let arr2 = [7,19,28,46,53,]
//
// let allTogether = (someArr1, someArr2) => {
//     let newArr = someArr1.concat(someArr2)
//     return(newArr)
// }
// let result = allTogether(arr1, arr2)
// result.push("television")
// console.log(result)


// 16



// 17
// let person = {
//     firstName: "Ivan",
//     lastName: "Ivanov",
//     years: 25,
// }
// let {firstName: name, years} = person;
// console.log(name)
// console.log(years)


// 18
// let days = ['Monday', 'Tuesday', 'Wednesday']
// let [firstDay = 'Monday', secondDay = 'Tuesday', thirdDay = 'Wednesday'] = days
// console.log(firstDay)


// 19
// let someMan = ["Ivan", 'Smirnov']
// let [surname, name] = someMan
// console.log(surname)
// console.log(name)


// 20
// let sortingArr = (arr) => {
//     function callBack (a, b) {
//         return (a > b) ? 1 : - 1;
//         if (a > b) return 1;
//         if (a < b) return -1;
//     }
//     return arr.sort(callBack)
// }
// console.log(sortingArr([456,67867835,124346546,568464,9,11,14,16,19]))


// 21
// let arrIndex = [7, 5, 9,]
// let change = (arr, startCurrentValue, endCurrentValue, arg) => {
//     let newArr
//     newArr = arr.splice(startCurrentValue, endCurrentValue, arg)
//     return newArr
// }
// let newSpliceArr = change(arrIndex, 0, 1, 5)
// console.log(arrIndex)


// 22
// let objPerson = {
//     id: 1,
//     age: 25,
//     hours: 2,
// }
// let objClone = (obj) => Object.assign({}, obj)
// let objPerson2 = objClone(objPerson)
// console.log(objPerson2)

// let massivePerson = ["Vasya", "Vasin", "student",]
// let massiveClone = (massive) => {
//     let newArray
//     newArray = [...massive]
//     return newArray;
// }
// let clone = massiveClone(massivePerson)
// console.log(clone)


// 23
// let arrLetter = ['a', 'b', 'c']
// let arrNumber = [1, 2, 3]
// let numberAndLetter = allTogether(arrLetter,arrNumber)
// console.log(numberAndLetter)
