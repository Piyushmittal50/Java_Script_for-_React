// rest operator passing in function
function calculateCartPrice(...num) {
    return num;
}

console.log(calculateCartPrice(100, 200, 300, 400));   // basically it gives me answer in [array] format


// function with object
const user = {
    username: "piyush",
    age: 20
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and his age is ${anyobject.age}`);
}
handleObject(user);


// function with Array
const arr = [10, 20, 30, 40];
function handleArray(anyarray) {
    return anyarray[1];
}
console.log("second ele is : ", handleArray(arr));