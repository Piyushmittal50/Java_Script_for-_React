/*

* what is async ?  => async is a keyword which is used to create async function()
* what is await ?
* how async await works behind the scene
* example of using async/await
* Error handling
* Async/await vs promise.then/.catch

*/

// async function() always return a promise

async function data() {
    return new Promise(function (resolve, reject) {
        resolve("Nameste");
    })
}

const promise = data();

promise.then(function (data) {
    console.log(data);
})
// JS engine will not wait for promise to be resolved
console.log(promise);


async function getData() {
    return "piyush";   // here the javascript automatically convert this return data into a promise
}

const dataPromise = getData();
console.log(dataPromise); // promise object
dataPromise.then(function (data) {
    console.log('I got the data', data);
})