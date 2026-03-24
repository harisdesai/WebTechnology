//array

let myArr = [0,1,2,3,4]
console.log(`My array values ${myArr}`)
console.log(typeof(myArr))

const arr = new Array(0,1,2,3,4)
console.log(`My array values ${arr[1]}`)
console.log(typeof(arr))


//array methods -

// 1) push - add value to array
arr.push(10)
console.log(`My array values ${arr}`)

// 2) pop - remove last value form array
arr.pop(1)
console.log(`My array values ${arr}`)

// 3) unshift - it shift all elements and add at 1st position
arr.unshift(9)
console.log(`My array values ${arr}`)

// 4) shift - remove 1st element
arr.shift(1)
console.log(`My array values ${arr}`)

// 5) includes - to check if value present or not
console.log(arr.includes(2))

// 6) indexOf - returns index of element
console.log(arr.indexOf(2))

// activity - slice and split