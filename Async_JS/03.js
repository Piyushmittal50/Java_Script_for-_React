// phele ghar jao
// gate open karo
// close karo
// khana khao
// so jao

var ans = new Promise((res,rej) => {
    return res("phele ghar jao")
})
var ans01 = ans.then(function (data) {
    console.log(data);

    return new Promise((res,rej) => {
        return res("gate open karo");
    })
})

var ans02 = ans01.then(function (data) {
    console.log(data);

    return new Promise((res, rej) => {
        return res("close karo")
    })
})

ans02.then((data) => {
    console.log(data)
    return new Promise((res, rej) => {
        return res("")
    })
})