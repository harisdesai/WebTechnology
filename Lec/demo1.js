// var a = 10;
// console.log(a);

// const b = 20;
// console.log(b);

// let c = 30;
// console.log(c);

var a = 10;
let b = 20;

{
    var a = 15;
    let b = 30;
    console.log(a); // 15
    console.log(b); // 30
}
console.log(a); // 15
console.log(b); // 20
