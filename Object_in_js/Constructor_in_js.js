//  object constructor function() => is basically a bluePrint for object
function Person(first, last, age, gender, nation) {
    this.firstName = first
    this.lastName = last
    this.age = age
    this.gender = gender
    this.nation = nation

    // method inside a constructor
    this.changename = function (lastname) {
     this.lastname = lastname
    }
}

// for this blueprint we can create multiple objects of same type
const FatherName = new Person("manoj", "mittal", "47", "male", "india")
const MotherName = new Person("mithlesh", "mittal", "49", "female", "india")


// you can add a new property
FatherName.home = "bayana"
MotherName.home = "Gangapur"
console.log("myfather house in : ",FatherName.home)

FatherName.changename("Kumar")
MotherName.changename("Kaur")


console.log(FatherName.lastname)
console.log(MotherName.lastname)