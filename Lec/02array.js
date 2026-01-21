const superHeros = ["Ironman","Thor","Hulk","Captain"]
const superVillains = ["DocDoom","Dr.Octo","GreenGoblin"]

superHeros.push(superVillains)
console.log(superHeros)
console.log(superHeros[3])
console.log(superHeros[4][2])


// concat - 

const a = superHeros.concat(superVillains)
console.log(a)


//flat - specify how deep a nested array should be flattened default value is 1
    //infinity - flatten all levels
    //flat does not change original array, it returns new array usefull when working with nested array

const anotherArray = [1,2,3,[4,5,6],7,8,[6,7,[4,5]]]
const anotherArray1 = anotherArray.flat(Infinity)
const anotherArray2 = anotherArray.flat(1)
console.log(anotherArray)
console.log(anotherArray1)
console.log(anotherArray2)


// data scripting using THIS method - 

console.log(Array.isArray("Haris")) // check given value array or not
console.log(Array.isArray(anotherArray))

console.log(Array.from("Haris")) // converts an iterable object into array eg. string ,array

console.log(Array.from({name:"Haris"})) // object is not iterable so it returns empty array


console.log(Object.keys({name:"Haris",age:22})) // returns array of object keys

console.log(Object.values({name:"Haris",age:22})) // returns array of object values


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) // creates array from given values

//array.from - converts iterable to array
//array.of - converts values to array