// 1
// let obj1 = {
//     a: 1,
//     b: 2,
//     c: 3,
// }
// let entriesValue = (obj)  => {
//     for (const [key, value] of Object.entries(obj)) {
//     console.log(`${key} - ${value}`)
//     }
// }
// keyValue(obj1)


// 2
// let obj2 = {
//     a: 1,
//     b: 2,
//     c: 3,
// }
// let objKeysValue = (obj) => {
//     return Object.keys(obj)
// }
//
// console.log(objKeysValue(obj2))


// 3
// const map1 = new Map()
//
// let mass1 = [1,2,3]
// let mass2 = [2,3,4]
// let mass3 = [34,45,56]
//
// map1.set(mass1, "string1")
// map1.set(mass2, "string2")
// map1.set(mass3, "string3")
//
// console.log(map1)


// 4



// 5
// let setCollection = new Set()
// setCollection.add(1)
// setCollection.add(2)
// setCollection.add(3)
//
// console.log(setCollection)


// 6
// let testForHasValue = (collection, value) => {
//     console.log(collection.has(value))
// }
// testForHasValue(setCollection, 4)


// 7
// let arrDuplicate = [4,7,12,4,546,8,7,49,34,4,7]
// let fncNoDuplicate = (arr) => {
//     return new Set(arr)
// }
// let arrNoDuplicate = fncNoDuplicate(arrDuplicate)
// console.log(arrNoDuplicate)


// 8
// let weekMap = new Map()
// let daysOfMapWeek = (arr) => {
//     arr.forEach(elem => weekMap.set(elem.key, elem.value))
// }
//
// daysOfMapWeek([
//     {key: "Понедельник", value: "Monday"},
//     {key: "Вторник", value: "Tuesday"},
//     {key: "Среда", value: "Wednesday"},
//     {key: "Четверг", value: "Thursday"},
//     {key: "Пятница", value: "Friday"},
//     {key: "Суббота", value: "Saturday"},
//     {key: "Воскресенье", value: "Sunday"},
// ])
//
// console.log(weekMap)