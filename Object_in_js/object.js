/*

object : is collection of unordered properties
-----object peroperties ---- 
1. object Access  => person.age
2. object assign value => person.age = 25
3. object delete property => delete person.age

*/

// method 01 to create object
const person = {}  // empty object
person.firstName = "piyush"
person.lastName = "Kumar"
person.age = 25
person.height = 5.6
person.hobbies = ["Reading", "Writing", "Swimming"]

console.log("Hobbies are : ", person.hobbies)

const x = person  // here x is person but not object   // person is actually a object
x.firstname = "Ram"

console.log("first name is : ", person.firstName)
console.log("first name is : ", x.firstName)


// method 02 to create object => object literal
const student = {
    firstname: "Sam",
    lastname: "Altman",
    "full name":"AI Master",
    age: 20,
    Roll : 124
}

console.log(student["full name"])

student.BookStatus = function () {
console.log("Book Issued by "+this.firstname)
}
console.log(student.BookStatus())

// method 03 to create object
const shop = new Object();
shop.name = "TechnoShop"
shop.address = "123 Main ST"
shop.owner = "Mr. RamKesh Dilkush"

console.log("shopName is : ", shop.name)


// you can also freeze your object
Object.freeze(shop)
shop.name = "MotherIndia"
console.log("shopName is : ", shop.name) // => ans is "TechnoShop"


// merge two objects
const obj1 = { name: "piyush", last: "mittal" }
const obj2 = { age: 20, gender: "male" }
const merge = { ...obj1, ...obj2 }
console.log(merge)


// all data of object => ans is in array format
console.log(Object.keys(obj1))
console.log(Object.values(obj1))

