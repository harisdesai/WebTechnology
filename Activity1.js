//All data type conversions

//String to Number
let str = "45.67";
let numFromStr = Number(str);
console.log(numFromStr);
console.log(typeof(numFromStr));

//Number to String
let number = 89;
let strFromNum = String(number);
console.log(strFromNum);
console.log(typeof(strFromNum));

//Boolean to Number
let boolTrue = true;
let numFromBoolTrue = Number(boolTrue);
console.log(numFromBoolTrue);
console.log(typeof(numFromBoolTrue));

let boolFalse = false;
let numFromBoolFalse = Number(boolFalse);
console.log(numFromBoolFalse);
console.log(typeof(numFromBoolFalse));

//Number to Boolean
let numZero = 0;
let boolFromNumZero = Boolean(numZero);
console.log(boolFromNumZero);
console.log(typeof(boolFromNumZero));

let numNonZero = 25;
let boolFromNumNonZero = Boolean(numNonZero);
console.log(boolFromNumNonZero);
console.log(typeof(boolFromNumNonZero));

//String to Boolean
let emptyStr = "";
let boolFromEmptyStr = Boolean(emptyStr);
console.log(boolFromEmptyStr);
console.log(typeof(boolFromEmptyStr));

let nonEmptyStr = "Hello";
let boolFromNonEmptyStr = Boolean(nonEmptyStr);
console.log(boolFromNonEmptyStr);
console.log(typeof(boolFromNonEmptyStr));

//Boolean to String
let boolVal = true;
let strFromBool = String(boolVal);
console.log(strFromBool);
console.log(typeof(strFromBool));
