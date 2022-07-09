// Exercise 1 - Initialize an Array of Objects to store cars' objects using Property Shorthand & Computed Property Names.

let n = "name";

let firstCar = {[n]: 'BMW', color: 'Red', capacity: 4};
let secondCar = {[n]: 'Audi', color: 'Green', capacity: 8};
let thirdCar = {[n]: 'BMW', color: 'Blue', capacity: 6};
let fourthCar = {[n]: 'Merc', color: 'Green', capacity: 4}

console.log ("\nExercise 1 - Initialize an Array of Objects to store cars' objects");

var modelCars = [{...firstCar}, {...secondCar}, {...thirdCar}, {...fourthCar}];
console.log (...modelCars);



//Exercise 2 - Initialize getter/setter functions of name, color & capatity properties using Method Property
console.log ("\nExercise 2 - Initialize getter/setter functions:");

let carSpecification = {
    name: 'BMW',
    color: "Red",
    capacity: 4,
    setSpecification (name,color,capacity) {
        this.name = name;
        this.color = color;
        this.capacity = capacity;
        return ({name, color, capacity})
    },
    getResult () {
        return {
            'name': this.name,
            'color': this.color,
            'capacity': this.capacity
        }
    }
};

console.log ("1st car's specification: ")
console.log(carSpecification.getResult());

console.log ("2nd car's specification: ")
carSpecification.setSpecification('Audi', 'Green', 8);
console.log(carSpecification.getResult());

console.log ("3rd car's specification: ")
carSpecification.setSpecification('BMW', 'Blue', 6);
console.log(carSpecification.getResult());

console.log ("4rd car's specification: ")
carSpecification.setSpecification('Merc', 'Green', 4);
console.log(carSpecification.getResult());


//Exercise 3 - Initialize another car object with 2 properties Name & Color using Destructuring Assignment techniques
console.log ("\nExercise 3 - Initialize KiA object: ");

var newCar = () => {
    return [
        {name: "KiA"},
        {color: "White"}
    ]
}

var [{name}, {color}] = newCar();

console.log (...[{"name": name}, {"color": color}]);


//Exercise 4:
console.log ("\nExercise 4 - Calculate an specified exponent ");

let calculateExponent = function (n,x) {
    let t = 1;
    for (let i = 1; i <= n; i++) {
        t = t * x;
        console.log (`Value of exponent ${x}^${i}: ${t} `);
    }
};

setTimeout(calculateExponent, 3000 , 5 , 5);


// Exercise 5:
setTimeout(function ex5Alert() {
    console.log ("\nExercise 5: Check whether a is larger than b!! ")
}, 5000);


let a = 4;
let b = 5;

async function myDisplay () {
    let myPromise = new Promise (function(myResolve) {
        if (a > b) {
            setTimeout(function () {myResolve("True");}, 6000)
        } else if (a < b || a === b) {
            setTimeout(function () {myResolve("False");}, 6000)
        }
    });
    console.log (`Result of ${a} > ${b}: ${await myPromise}`);
};

myDisplay();