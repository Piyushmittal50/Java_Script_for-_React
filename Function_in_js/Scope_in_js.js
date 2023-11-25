/*
Scope  =>  Scope shows the accessiblity(visibility) of variable.
Scope is nothing but { }
------types of Scope -----
1. Globel scope  =>  Variables declared Globally (outside any function) have Global Scope.
                     Global variables can be accessed from anywhere in a JavaScript program. 
2. Function Scope  =>  Local variables have Function Scope.
                       Local Variables can be declared within a JavaScript function(), They can only be accessed from within the function.

3. Block Scope  =>  Variables declared inside a { } block cannot be accessed from outside the block.
                    let and const These two keywords provide Block Scope in JavaScript.
*/

{
    let x = 2;
    const y = 3;
    // var z = 4;
} // we can not access the x and y variable outside the scope


const username = "Piyush"  // Globel variable
function customer() {
    const price = 1000;    // Local variable
    console.log(`${username} buy ${price} Rupee Shoes.`);
}

customer();
// console.log(price); we can not access the local variable outside the function



// Scope Level

if (true) {
    const username01 = "piyush"
    if (username01 == "piyush") {
        const website = "youtube"
        console.log(`Welcome to Youtube ,${username01}`);
    }
    // console.log(website); => we can not access it
}

// console.log(username01); => we can not access the variables outside the scope