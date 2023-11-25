const person = {
    name: "piyush",
    age: "20",
    gender: "Male",
    bankAccount: "12345",
    bankBalance : "1000",
    fullDiscription: function () {
        return this.name + " is " + this.age + " years old";
    }
}
const ans = person.fullDiscription()
console.log(ans)


// add karna hai ek method into object

person.bankStatus = function () {
    return this.name + " bank account number is " + this.bankAccount + " and balance is " + this.bankBalance; 
}

const status = person.bankStatus();
console.log(status)