// async / await combo is used to handle promises
// await keyword is written in front of a promise , and this will resolve() the promise
// await keyword is only used inside a async function()
const p = new Promise(function (resolve, reject) {
    resolve("piyushmittal50");
})
async function promiseHandle() {
    const val = await p;
    console.log(val);
}

promiseHandle();