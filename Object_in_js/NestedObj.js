// nested objects
const life = {
    name : "Ayush",
    age: 24,
    city: "New Dehli",
    
    cars: {
        car1: "oddi",
        car2: "honda",
        car3: "Benz"
    }
}

console.log(life.cars.car2)


// Array inside object

const ambani = {
    name: "Mukesh",
    age: 60,
    city: "Mumbai",
    cars: [
        { name: "honda", model: ["city", "swift", "baleno"] },
        { name: "TaTa", model: ["safari", "punch", "nexon"] },
        {name : "Manindra",model:["scarpio","Bolero","jipsi"]}
    ]
}

console.log(ambani.cars[0].name)