// EXERCISE 1:
let mapOfCars = new Map ([
    ["1st Car", {name: 'BMW', color: 'Red', capacity: 4}],
    ["2nd Car", {name: 'Audi', color: 'Green', capacity: 8}],
    ["3rd Car", {name: 'BMW', color: 'Blue', capacity: 6}],
    ["4th Car", {name: 'Merc', color: 'Green', capacity: 4}]
]);

console.log("Exercise 1 - Initialize a Map to store a list of car objects");
console.log (...mapOfCars);


// EXERCISE 2:
console.log ("Exercise 2 - Make a change of the 3rd object");

let mapOfCars2 = new Map ([
    ["1st Car", {name: 'BMW', color: 'Red', capacity: 4}],
    ["2nd Car", {name: 'Audi', color: 'Green', capacity: 8}],
    ["3rd Car", {name: 'BMW', color: 'Blue', capacity: 6}],
    ["4th Car", {name: 'Merc', color: 'Green', capacity: 4}]
]);

mapOfCars2.set ("3rd Car", {name: 'Ford', color: 'Gray', capacity: 8});

console.log (...mapOfCars2);


// EXERCISE 3: 
console.log ("Exercise 3 - Initialize a Set to store a list of car objects");

let setOfCars = new Set ();
setOfCars.add ({name: 'BMW', color: 'Red', capacity: 4});
setOfCars.add ({name: 'Audi', color: 'Green', capacity: 8});
setOfCars.add ({name: 'BMW', color: 'Blue', capacity: 6});
setOfCars.add ({name: 'Merc', color: 'Green', capacity: 4});

console.log(...setOfCars);


//EXERCISE 4: 
console.log("Exercise 4 - Make a change of the 4th object: ");

// As Set Method doesn't allow user to delete object, so I made up my mind to convert Set to an Array in order to switch "Merc" properties to  "Vinfast" ones. Then convert it back to Set to meet the requirements.
let arr = [...setOfCars]; 
arr[3] = ({name: 'Vinfast', color: 'Black', capacity: 4});

let convertedsetOfCars = new Set (arr);
console.log(...convertedsetOfCars);


// EXERCISE 5:
console.log ('Exercise 5 - Convert Map from Exercise 1 to a Set: ')

let convertedsetOfCars2 = new Set (mapOfCars);
console.log (...convertedsetOfCars2);