const cart = ["pant", "kurta", "shirt"]

const promise = createOrder(cart); // orderId

promise.then(function (orderId) {
    console.log(orderId);
   // after succesfuuly getting orderId , now your next move is => proceedToPayment(orderId)
})
    .catch(function (err) {
        console.log(err.message);
    })


function createOrder(cart) {
    const pr = new Promise(function (resolve,reject) {
        
        if (validCardDetails) {
            const err = new Error("card is not valid");
            reject(err);
        }

        // now logic for createOrder
        const orderId = "12345";
        resolve(orderId);
    })

    return pr;
}    

function validCardDetails() {
    return true;
}