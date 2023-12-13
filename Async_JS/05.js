const cart = ["pant", "kurta", "shirt"]

// orderId

createOrder(cart)
   .then(function (orderId) {
       console.log(orderId);
       return orderId;
       // after succesfuuly getting orderId , now your next move is => proceedToPayment(orderId)
   })
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
    })
    .catch(function (err) {
        console.log(err.message);
    })


function createOrder(cart) {
    const pr = new Promise(function (resolve,reject) {
        
        if (validCardDetails()) {
            const err = new Error("card is not valid");
            reject(err);
        }
        else {
            // now logic for createOrder
            const orderId = "12345";
            resolve(orderId);
        }
    })

    return pr;
}    

function validCardDetails() {
    return false;
}

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        resolve("payment is sucessful");
    })
}