console.log("hey 1") // sync code
console.log("hey 2") // sync code
setTimeout(function () {
    console.log("hey 3")  // call back function  async code
}, 5000)

setTimeout(function () {   // call back function   async code
    console.log("hey 4") 
}, 2000)



console.log("hmm 1")
console.log("hmm 2")
setTimeout(function () {
    console.log("hey 3")
}, 0)
console.log("hmm 4")