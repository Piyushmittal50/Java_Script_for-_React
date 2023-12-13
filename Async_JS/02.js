// promises

var ans = new Promise((res,rej) => {
    if (true) {
        return res();
    }
    else {
        return rej();
    }
})

ans
    .then(function () {
        console.log("----resolve----");
    })
    .catch(function () {
        console.log("----rejected----");
   })



var temp = new Promise((res,rej) => {
    var n = Math.floor(Math.random() * 10);
    if (n < 5) {
        return res();
    }
    else {
        return rej();
    }
})  

temp
    .then(function () {
        console.log("Below--")
    })
    .catch(function () {
        console.log("above--")
    })