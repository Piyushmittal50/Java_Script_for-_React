// fetch() gives a promise
// and then this promise was resolve , then it gives a response object, which is not more readble
// so we have to convert it into json format , and this json() is also gives a promise
// so once the promise will be resloved , it gives result(jsonValue)


// Error handling => 01
const api = "https://api.github.com/users/piyushmittal50";
async function handlePromise() {
    try {
        const data = await fetch(api);
        const result = await data.json();
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }
}

handlePromise();

// 02
const api_URL = "https://api.github.com/users/piyushmittal50";
async function handlePromise() {
    
        const data = await fetch(api_URL);
        const result = await data.json();
        console.log(result);
}

handlePromise().catch(function (err) {
    console.log(err);
})
