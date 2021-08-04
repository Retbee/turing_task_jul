// 1
let Scrin = (city, adress) => console.log(city + ", " + adress);
console.log(Scrin("Vladivostok", "Allilueva"))

// 2
let comparison = function (num1, num2) {
    if (num1 > num2) {
        console.log(1);
    } else if (num1 < num2) {
        console.log(-1);
    } else {
        console.log(0)
    }
}

comparison(5, 4);


// 3
let sumNum = (numSum1, numSum2) => {
    if (typeof numSum1 !== 'number' || typeof numSum2 !== "number") {
        return "Not a number!"
    }
    result = numSum1 + numSum2;
    return result;
}

console.log(sumNum(3, 5));


let divisionNum = (divisionNum1, divisionNum2) => {
    if (typeof divisionNum1 !== 'number' || typeof divisionNum2 !== "number") {
        return "Not a number!"
    }
    result = divisionNum1 / divisionNum2;
    return result;
}
console.log(divisionNum(7,5))


let subtractionNum = (subtractionNum1, subtractionNum2) => {
    if (typeof subtractionNum1 !== 'number' || typeof subtractionNum2 !== "number") {
        return "Not a number!"
    }
    result = subtractionNum1 - subtractionNum2;
    return result;
}
console.log(subtractionNum(7,5))


let multiplicationNum = (multiplicationNum1, multiplicationNum2) => {
    if (typeof multiplicationNum1 !== 'number' || typeof multiplicationNum2 !== "number") {
        return "Not a number!"
    }
    result = multiplicationNum1 * multiplicationNum2;
    return result;
}
console.log(multiplicationNum(7,5))


// 4
let Hello = (name = "гость") => "Здравствуйте, " + name;
console.log(Hello());


//5
let Fibo = (n) => {
    if (n <= 1) {
        return n;
    } else {
        const result = Fibo(n - 1 ) + Fibo( n - 2);
        return result;
    }

}
console.log(Fibo(5))


// 6
let FiboCycle = (nCycle) => {
        let a = 1;
        let b = 1;
    for (let n = 3; n <= nCycle; n++) {
        let c = a + b;
        a = b;
        b = c;

    }
    return b
}

console.log(FiboCycle(10))

