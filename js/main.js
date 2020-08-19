//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function parseObj(object){
    for(let i=0; i < Object.values(person3).length; i++){
        console.log(Object.values(person3)[i])
    }
}
console.log(parseObj(person3))


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name,age){
    this.name = name;
    this.age = age;

// Use an arrow to create the printInfo method
    this.printInfo = () => {
        return `This person's name is ${name} and they are ${age} years old.`
    }

// Create another arrow function for the addAge method that takes a single parameter
    this.addAge = (inc) => {
        age++;
        return `${name} is now ${age} years old.`
    }

//Additional practice function
    this.oldEnough = () => {
        if(this.age >= 21){
            return `${name} is old enough to buy alcohol.`
        } else {
            return `${name} is not old enough to buy alcohol. They need to wait ${21-age} years.`
        }
    }
}

//defining the People
let nate = new Person('Nate',26)
let claire = new Person('Claire',18)
console.log(nate.printInfo())
console.log(claire.printInfo())

// Adding the age
console.log(claire.addAge())

//Testing other function
console.log(claire.oldEnough())


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const isTen = (str) => {
    return new Promise((resolve,reject) => {
        if(str.length > 10){
            resolve(true)
        }else if(str.length < 10){
            reject(false)
        }
    })
}

isTen('Establishment').then((result) => {
    console.log('Big word')
}).catch((error) => {
    console.log('Small Number')
})