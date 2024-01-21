// console.log("Anjana")

//var, let and const 

const id = 1111
var Name = "Anjana"
let email = "anjana@gmail.com"
city = "Hajipur"

// console.table([id, Name, email, city])

//Data Types
// console.log(typeof id)
// console.log(typeof Name)
// console.log(typeof null)
// console.log(typeof undefined)

// Premitive dataType

let name1 = "anjana"
let name2 = name1
name2="anjanasingh"
// console.log(name1)
// console.log(name2)

//reference dataType

let userOne = {
    name:"Anjana",
    email: "anjana@gmail.com"
}

let userTwo = userOne

userTwo.email = "anjanasingh@gmail.com"

//console.log(userOne)

//String manupulation

const name = "Anjana"
const roll = 21

//console.log(name + roll)
//console.log(`My name is ${name} and roll no is ${roll}`)

const var1 = new String("Anjana")
// console.log(var1)
// console.log(var1[0])
// console.log(var1.charAt(2))
// console.log(var1.indexOf('j'))
// console.log(var1.length)
// console.log(var1.substring(0,4))
// console.log(var1.slice(-2, 5))
const newString = "       Anjana        "
// console.log(newString.trim())
 const url = "https://Anjana.com"
// console.log(url.replace('Anjana', 'singh'))
 const var2 = "anjana Kumari singh"
// console.log(var2.split(" "))

//Numbers and maths

const number = 1234
// console.log(typeof (number.toString()))
// console.log(number.toFixed(2))
const newNumber = 1234.567
// console.log(newNumber.toPrecision(5))
// console.log(newNumber.toLocaleString('en-IN'))

// console.log(Math.abs(-8))
// console.log(Math.round(8.7))
// console.log(Math.round(8.4))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))

// console.log(Math.random())
// console.log((Math.random()*10) + 1)
// console.log(Math.floor((Math.random()*10) + 1))

const min = 10
const max = 20

// console.log(Math.floor((Math.random()*(max - min + 1 ))+min))

//Dates in JS

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
let myCreatedDate = new Date(2023, 0, 7, 5,30)
//console.log(myCreatedDate.toLocaleString())

let newDate = new Date("2023-01-12")
//console.log(newDate.toString())

//console.log(Date.now())
let myNewDate = Date.now()
//console.log(myNewDate.getTim)

//Arrays in js 

const myArray = [9,8,2,4,5]

const newArray = new Array(2,6,8,0,5)

//myArray.push(10)

//console.log(myArray)

//myArray.pop()
//console.log(myArray)
//console.log(newArray)

//myArray.unshift(16)
//myArray.shift()
console.log(myArray)
console.log(myArray.slice(1, 3))
console.log(myArray)

myArray.splice(1, 3)
console.log(myArray)

