// Immediately Invoked Function Expression
// () these brackets and ; semicolon is important in IIFE
( function one() {  // Named IIFE
console.log("DB CONNECTED!")
} )
    ();

// with parameter

(function two(name) {
    console.log(`DB CONNECTED BY ${name}`)
})

    ("PIYUSH"); 

// FOR Arrow function

(() => {
    console.log("LIGHT IS ON !")
})
    ();

// Arrow function with paramter

  (  (name) => {

    console.log(`LIGHTS IS ON BY ${name}`)
} )
("SAM")



