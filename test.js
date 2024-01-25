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
// console.log(myArray)
// console.log(myArray.slice(1, 3))
// console.log(myArray)

myArray.splice(1, 3)
// console.log(myArray)

const girls = ["anjana", "siya", "Riya"]
const boys = ["Ram", "Shyam", "Raju"]

//girls.push(boys)
//console.log(girls)

// const newMember = girls.concat(boys)
// console.log(newMember)
//spread operator
const new_Member = [...girls, ...boys]
//console.log(new_Member)

const myNewArray = [1,3, [8,9],6,7,[4,5,[2,8],1],7]

const flatArray = myNewArray.flat(Infinity)
//console.log(flatArray)

// console.log(Array.isArray("Anjana"))
// console.log(Array.from("Anjana"))
const var3 = 100
const var4 = 200
const var5 = "Anjana"
const var6 = 300

// console.log(Array.of(var3,var4 , var5, var6))

//objects in js
/*Declaration of objects 
Declaration of object have two ways 
1. Object literal(Not singleton)
2. Using Constructor(Singleton)
*/
const mySym = Symbol("key1")
const myObject = {
    name: "anjana",
    "Full name" : "Anjana Singh",
    age: 22,
    email: "anjana@gmail.com",
    city: "hajipur",
    isLoggedIn: true,
    weeks: ["Monday", "tuesday", "Wednesday"],
    [mySym] : "key"
}

/*Accessing the object
There are two ways of accessing object member in JS
1. By dot operator
2. By [] : This is used in the case when key is declared as string and contain whitespaces. 
This is also used when we want to use symbol datatype in our object.
*/
// console.log(myObject.email)
// console.log(myObject["email"]) //internally key is stored in string format only
// console.log(myObject["Full name"])
// console.log(myObject[mySym])
myObject.email = "anjanasingh@gmail.com"
//console.log(myObject)
//Object.freeze(myObject) // After using freeze we cat make any change to our object
myObject.email = "anjana@hotmail.com"
//console.log(myObject)

myObject.newFunc = function(){
    console.log("Hello World")
}
//myObject.newFunc()

myObject.myFunc = function(){
    console.log(`hello my name is ${this["Full name"]}`)
}
//myObject.myFunc()

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 ={
    3: "c",
    4: "d"
}
//const obj = Object.assign({}, obj1, obj2)
//we can combine two objects with spread operator as well


// console.log(Object.keys(myObject))
// console.log(Object.values(myObject))
// console.log(Object.entries(myObject))

// console.log(myObject.hasOwnProperty('isLoggedIn'))

//Destructuring in js 

const course = {
    coursename: "js",
    price: 999,
    courseInstructor: "Anjana"
}

const {courseInstructor: instructor} = course

//console.log(instructor)

//Functions in js

//Adding two numbers using function

/*function addTwoNumbers(number1, number2){ //It is passing of parameter
     console.log(number1 + number2)
}*/

function addTwoNumbers(number1, number2){
    return number1 + number2
}

const result = addTwoNumbers(5, 6) //It is passing of argument
//console.log(result)

//String function

function LoggedIn(name){
    if(!name){
        console.log("Please enter username")
    }
    return `${name} just logged in`
}

const result2 = LoggedIn("Anjana")
//console.log(result2)

//Taking multiple argument in function

function addCartPrice(...num1){
    console.log(num1)   
}
//addCartPrice(200, 400, 500, 600)
/* In the similar way we can fix any number of argument. The fixed argument is must to be passed */

 function addPrice(var1, var2, ...num1){
//     console.log(var1, var2)
//     console.log(`variable length argument ${num1}`)
}

addPrice(200,300,400,500,1000,300,600)

//Scopes in JS

//Functions in js can be decalared in two ways

//console.log(addOne(5))//can be accessed here ........concept of hoisting
function addOne(num1){
    return num1+1
}
//console.log(addTwo(6)) //can't be accessed here
const addTwo = function(num1){
    return num1+2
}
//console.log(addTwo(6))

//flow control
const num = 10
if(num == 10){
    //console.log("success")
}

//for loop
for (let index = 1; index <= 10; index++) {
    if(index==5){
        //console.log("best number")
    }
   // console.log(index);
    
}

//printing table using for loop
for (let i= 1; i<=20; i++) {
    //console.log(`Table of ${i}`)
    for (let j= 1; j <=10; j++) {
        //console.log(`${i} * ${j} = ${i*j}`)
    }
    
}

//use of break and and continu

for (let index = 1; index < 10; index++) {
    if(index == 5){
      //  console.log("detected 5")
        break
    }
   // console.log(index)
}
for (let index = 1; index < 10; index++) {
   if(index == 5){
   // console.log("detected 5")
   }
    //console.log(index)
}

//while loop

let num1 = 1
while(num1 <= 10){
  //  console.log(num1)
    num1++
}
let score = 11
do{
   // console.log(score)
}while(score<=10)

//foreach loop

const coding = ["java", "python", "php", "javascript", "ruby"]

coding.forEach((item, index, arr)=>{
    //console.log(item, index, arr)
})

const myCoding =[
    {
        languageName: "java",
        extension: "java"
    },
    {
        languageName: "python",
        extension: "py"
    },
    {
        languageName: "javascript",
        extension: "js"
    }
]

myCoding.forEach((item)=>{
    //console.log(item.languageName)
})

//for of loop

const arr1 = [1,2,3,4,5]

for (const iterator of arr1) {
   // console.log(iterator)
}

const greetings = "hello world"

for (const iterator of greetings) {
   // console.log(iterator)
}

//maps in js

const map = new Map()
map.set("IN", "India")
map.set("US","United state of America")
map.set("fr", "France")

for (const iterator of map) {
    // console.log(iterator)
}

//forin loop

/*for (const [key] in map) {
    console.log(key)
    console.log(`${key} value is ${map[key]}`)
   // console.log(`${key} value is ${map[key]}`)
}*/

const myNewArray2 = [1,2,3,4,5,6,7,8,9,10]

 const myNewArray2Result = myNewArray2.filter((item) => item > 4 )

 //console.log(myNewArray2Result)

 //map function

 const arr2 = [1,2,3,4,5,6,7,8,9]

 const mapResult = arr2.map( (nums) => nums + 10 )

 //console.log(mapResult)

 //chaining og map and filter function 

 const chaining = arr2.map((nums) => nums * 10).map((nums) => nums + 1).filter((nums) => nums >= 40)

 console.log(chaining)