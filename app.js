// const {x,calculateSum} = require("./calculate/sum.js");

const data = require("./data.json")
const {calculateSum, calculateMultiply} = require("./calculate")

var name = "Adil"

var a = 10;

var b = 10;

// console.log(x);
calculateSum(a,b)
calculateMultiply(a,b) 
console.log(data)

// console.log(name)
// console.log(a+b);

// console.log(globalThis)
// console.log(global)
console.log(globalThis === global) 