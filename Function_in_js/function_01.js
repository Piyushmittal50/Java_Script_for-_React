// JavaScript functions are defined with the function keyword
//  01                                         ---------
function greeting() {
    console.log("hello piyush")
}
greeting()

// 02
function addTwo(num1, num2) {
    console.log( num1 + num2);
}
addTwo(5, 10);

// 03
function squareOf(n) {
    return n * n;
}
const ans = squareOf(2);
console.log("ans is : ", ans)

// 04
function loggedIn(username) {
    if (username === undefined) {
        console.log("Please Enter a username !")
        return;
    }

    return `${username} just logged in`;
}
console.log(loggedIn("piyush"));

console.log(loggedIn()) // undefined just logged in


// 05 => by giving default values
function loggedout(username = "sam") {
    return `${username} is just logout`;
}
console.log(loggedout("piyush"))
console.log(loggedout())