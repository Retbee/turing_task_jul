
// 1
let hello = "Hello world"
alert(hello)


// 2
let name = prompt("Enter your name");
alert(name)


//3
let someString = '3';
let someNum = 3;
console.log("3: ",!!someString, ", " ,"3: ",!!someNum);


// 4
let num1Sum = prompt("Enter first number");
let num2Sum = prompt("Enter second number");
let Sum = Number(num1Sum) + Number(num2Sum);
alert ("4: ", Sum);


// // 5
let num1Division = 10;
let num2Division = 6;
let residual = num1Division % num2Division;
console.log("5: ",residual);


// // 6
let n = 1;
let m = 1;
let prefix = ++n;
let postfix = m++;
console.log("6: ", prefix, postfix)
//Префиксная форма инкремента увеличивает значение переменной до вывода на экран, в то время как постфиксная форма - сначала выводит старое значение переменной, а только затем увеличивает значение


// 7
let numTest = 5;
if (numTest % 2 == 0) {
    console.log("7: ",'Even')
}   else {console.log("7: ",'Odd')}


//8
if (1 == '1') {
    console.log("8: ",true)
}   else(console.log("8: ",false))

if (0 === false) {
    console.log("8: ", true)
}   else {console.log("8: ",false)}
//При не строгом сравнении js приводит значение строки "1" к числу и затем сравнивает его с другим числом.
// При строгом сравнении сравниваются не только значения переменных, но и тип данных, к которому они принадлежат.


//9
let a = 11;
let b = "Hello";
let c = {a:1};
let d = null;
let e = false;

if (typeof a == "number") {
    console.log("9a: ", typeof a)
}   else {console.log("Not a number")}

if (typeof b == "string") {
    console.log("9b: ", typeof b)
}   else {console.log('Not a string')}

if (typeof c == "object") {
    console.log("9c: ", typeof c)
}   else {console.log('Not a object')}

if (d === null) {
    console.log("9d: ", typeof d)
}   else {console.log('9d: null2')}

if (typeof e == "boolean") {
    console.log("9e: ", typeof e)
}   else {console.log('Not a Boolean')}


//10
const A = 201;
let result;
result = (A % 2) ? "А нечётное" : "А чётное";
console.log("10: ", result);


//11
let pass = 'SomePassword';
let pass_user = prompt("Enter your password");
if (pass_user === pass) {
    alert("You successfully entered in the system")
}   else {alert("Wrong password!")}


//12
let h = '30';
let B = !h
console.log("12: ", typeof B)