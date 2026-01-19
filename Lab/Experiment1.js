//activity 1 - const can be change in block of scope
const a = 10;
{
    const a = 20;
    console.log(a);
}
console.log(a);


//activity 2 - let var
var x = 10;
console.log(x);

let z = 30;
console.log(z);

var x = 10;
let b = 20;

{
    var x = 15;
    let b = 30;
    console.log(x); // 15
    console.log(b); // 30
}
console.log(x); // 15
console.log(b); // 20


//activity 3 - Display student info
const firstName = "Haris"
const lastName = "Desai"
const age = 20;
console.log("Student Information...")
console.log("Name : "+firstName +" "+ lastName)
console.log("Age : ",age)


//activity 4 - even or odd
const n = 10
if(n%2==0){
    console.log("Number is Even")
}
else{
    console.log("Number is Odd")
}


//activity 5 - check student pass or fail
const marks = 70
if(marks>35){
    console.log("Student Passed")
}
else{
    console.log("Student Failed")
}


//activity 6 - print number using loop
for(i=1;i<=10;i++){
    console.log(i)
}