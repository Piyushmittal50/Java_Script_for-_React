// the main difference between promises v/s async/await is
// in promises {  JS Engine is not wait for promise is to be resolved first , it reaches to the next line , after promise is resolved it print it }

const p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("piyushmittal50");
    },5000)
})
function simplePromise() {
    
    p.then(function (data) {
        console.log(data);
    })
    console.log("namaste javascript");
}

//simplePromise();


// on the other hand in async / await , it wait for untill promise is resolved , then goes to next line

const newp = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("piyushmittal50");
    },5000)
})
async function simplePromises() {
    
    const val = await newp;
    console.log(val);
    console.log("namaste javascript");
}

simplePromises();

console.log("hello world!")