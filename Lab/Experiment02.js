//Activity 1 - array obj string function
//ARRAY
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars)
for(let i = 0; i < cars.length; i++){
    console.log(cars[i])
}

//OBJECT
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
console.log("Name: "+person.firstName)

//STRING
const name = "Dikshant is a good boy"
console.log(name)
console.log(name.length)

//FUNCTION
function myName(name){
    console.log("My name is "+name)
}
myName("Haris")


//Activity 2 - count vowels in string
function countVowels(sentence){
    let count = 0;
    const vowels = "aeiouAEIOU";
    for(let i=0;i<=sentence.length;i++){
        if(vowels.includes(sentence[i])){
            count++;
        }
    }
    return count;
}
console.log("Number of vowels: "+countVowels("Hello World"))


//Activity 3 - Reverse a string
function reverseString(sentence){
    let newSentence = ""
    for(let i = sentence.length-1; i >= 0; i-- ){
        newSentence += sentence[i]
    }
    return newSentence;
}
console.log("Reversed String: "+reverseString("Hello World"))


//Activity 4 - find largest element in array
function largestElement(...values){
    let largest = 0;
    for(let i = 0; i <= values.length; i++){
        if(values[i]>largest){
            largest = values[i]
        }
    }
    return largest
}
console.log("Largest Element is: "+largestElement(10,5,25,8,15))


//Activity 5 - find missing element in array(unsorted array)
function findMissingElement(nums) {
  const n = nums.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < nums.length; i++) {
    actualSum = actualSum + nums[i]
  }
  return expectedSum-actualSum
}
const arr = [1,2,4,5,6];
console.log("Missing Element is: "+findMissingElement(arr));


//Activity 6 - check palindrome in string
function isPalindrome(sentence){
    const reversed = sentence.split('').reverse().join('');
    return sentence === reversed;
}
console.log("Is Palindrome: "+isPalindrome("cabbac"));


//Activity 7 - write a code for Fibonacci series
