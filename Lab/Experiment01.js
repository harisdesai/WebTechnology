//activity 1 - const can be change in block of scope
const a = 10;
{
    const a = 20;
    document.write(a+"<br>")
    console.log(a);
}
document.write(a+"<br>")
console.log(a);


//activity 2 - let var
var x = 10;
document.write(x+"<br>")
console.log(x);

let z = 30;
document.write(z+"<br>")
console.log(z);

var x = 10;
let b = 20;

{
    var x = 15;
    let b = 30;
    document.write(x+"<br>")
    console.log(x); // 15
    document.write(b+"<br>")
    console.log(b); // 30
}
console.log(x); // 15
document.write(x+"<br>")
console.log(b); // 20
document.write(b+"<br>")


//activity 3 - Display student info
const firstName = "Haris"
const lastName = "Desai"
const age = 20;
document.write("Student Information...<br>")
console.log("Student Information...")
document.write("Name : "+firstName +" "+ lastName+"<br>")
console.log("Name : "+firstName +" "+ lastName)
document.write("Age : ",age)
console.log("Age : ",age)


//activity 4 - even or odd
const n = 10
if(n%2==0){
    document.write("Number is Even<br>")
    console.log("Number is Even")
}
else{
    document.write("Number is Odd<br>")
    console.log("Number is Odd")
}


//activity 5 - check student pass or fail
const marks = 70
if(marks>35){
    document.write("Student Passed<br>")
    console.log("Student Passed")
}
else{
    document.write("Student Failed<br>")
    console.log("Student Failed")
}


//activity 6 - print number using loop
for(i=1;i<=10;i++){
    document.write(i+"<br>")
    console.log(i)
}