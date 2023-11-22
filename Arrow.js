
function dosomething(p1, p2) {
    let c = "peach"
    return p1 * p2;
}

let a = 2;
let b = 3;

let ans = dosomething(a, b);
console.log("ans is : " + ans);

a = "piyush"
b = "mittal"
a += b;
console.log(a);

let f = "piyush"
f = {
    name: 'piyush',
    last: 'Mittal',
    age: 20,
    fullname: function () {
        return this.name + " " + this.last;
    }
}
console.log(f.name + f.age);
f.age = 21;
console.log(f.age);
console.log(f.fullname());

let string = "piyush 'mittal'";
ans = string.length;
console.log(ans);

const arr = ['i', 'am', 'not', 'sure']
arr[0] = "piyush i"
console.log(arr[0]);
console.log(arr[1]);
console.log(arr);

// when array have numbers 
const num = [10, 2, 1, 7, 5, 4, 4]
// use compare function
num.sort(function(a,b) {return a-b});  // assecending order
//num.sort(function (a, b) { return b - a });// decending order

console.log(num);

console.log("length is : ",num.length)


num.push(50);
num.push(100);
num.sort(function (a, b) { return a - b });
console.log(num);