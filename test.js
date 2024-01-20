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
console.log(var1.substring(0,4))
console.log(var1.slice(-2, 5))
const newString = "       Anjana        "
console.log(newString.trim())
const url = "https://Anjana.com"
console.log(url.replace('Anjana', 'singh'))
const var2 = "anjana Kumari singh"
console.log(var2.split(" "))