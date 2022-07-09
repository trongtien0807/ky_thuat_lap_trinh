alert ("Enter original fraction's value: ")

// Import/Export Fraction
console.log (`\nRequest 1 & 2 - Import and Export the specified fraction:`)

let originalFraction = new Object ();
originalFraction.numerator = 0;
originalFraction.denominator = 0;

function input(newFraction) {
    newFraction.numerator = Number(prompt("Enter numerator: "));
    newFraction.denominator = Number(prompt("Enter denominator: "));
}

function output(newFraction) {
console.log("Original fraction: " + newFraction.numerator + "/" + newFraction.denominator);
}

input(originalFraction);
output(originalFraction);


// Find The Greatest Common Divisor 
console.log (`\nRequest 3 - Find the greatest common divisor: `)

function findMaxDivisors (arr) {
    max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function findGreatestCommonDivisors (newFraction) {
    let numerator = newFraction.numerator;
    let denominator = newFraction.denominator;
    let findLargerNumber = (numerator > denominator) ? numerator : denominator;

    let arr = [];

    for (let i = 0; i < findLargerNumber; i++) {
        if (numerator % i === 0 && denominator % i === 0) {
            arr[arr.length] = i;
        }
    }
    return findMaxDivisors(arr);
}
console.log (`Greatest common divisor: ${findGreatestCommonDivisors(originalFraction)}`);


// Reduce The Fraction
console.log (`\nRequest 4 - Reduce the fraction`)
function reduceFraction(newFraction) {
    let largestDivisor = findGreatestCommonDivisors(newFraction);
    newFraction.numerator = newFraction.numerator / largestDivisor;
    newFraction.denominator = newFraction.denominator / largestDivisor;
    return console.log (newFraction.numerator + "/" + newFraction.denominator)
}

reduceFraction(originalFraction);


// Sum of 2 fractions
console.log (`\nRequest 5 - Sum of 2 fractions A & B`);

alert ("Enter fraction A's value: ")
let fractionA = new Object ();
fractionA.numerator = Number(prompt("Enter numerator A: "));
fractionA.denominator = Number(prompt("Enter denominator A: "));

alert ("Enter fraction B's value: ")
let fractionB = new Object ();
fractionB.numerator = Number(prompt("Enter numerator B: "));
fractionB.denominator = Number(prompt("Enter denominator B: "));

function sumFractions (fractionA, fractionB) {
    let fractionTemp = new Object();
    fractionTemp.numerator = (fractionA.numerator * fractionB.denominator) + (fractionB.numerator * fractionA.denominator);
    fractionTemp.denominator = fractionA.denominator * fractionB.denominator;
    return console.log (fractionTemp.numerator + "/" + fractionTemp.denominator);

}
sumFractions (fractionA, fractionB);


// Product of 2 fractions
console.log (`\nRequest 6 - Product of 2 fractions A & B`);

function multiplyFractions (fractionA, fractionB) {
    let fractionTemp = new Object();
    fractionTemp.numerator = fractionA.numerator * fractionB.numerator;
    fractionTemp.denominator = fractionA.denominator * fractionB.denominator;
    return console.log (fractionTemp.numerator + "/" + fractionTemp.denominator);
}
multiplyFractions (fractionA, fractionB);


// Check whether it's a simplest fraction
console.log (`\nRequest 7 - Is this fraction simplest?`)

function isSimplestFraction () {
    let result = reduceFraction(originalFraction);
    if (result == 1) {
        return console.log (1);
    } else return console.log (0);
};
isSimplestFraction();


// Check whether it's a positive fraction
console.log (`\nRequest 8 - Is this positive fraction?`)

function isPositiveFraction (newFraction) {
    console.log (newFraction.numerator + "/" + newFraction.denominator)
    if (newFraction.numerator * newFraction.denominator > 0) {
        return console.log (`This is a positive fraction`);
    } else if (newFraction.numerator * newFraction.denominator < 0) {
        return console.log (`This is a negative fraction`);
    } else return console.log (`Result: 0 `);
};
isPositiveFraction(originalFraction);


// Homogenize the denominator of 2 fractions
console.log (`\nRequest 9 - Homogenize the denominator of 2 fractions`)

function homogenizeDenominator (fractionA, fractionB) {
    let bc = fractionA.denominator * fractionB.denominator;
    fractionA.numerator = fractionA.numerator * fractionB.denominator;
    fractionB.numerator = fractionB.numerator * fractionA.denominator;
    fractionA.denominator = bc;
    fractionB.denominator = bc;
    console.log ("Output: " + fractionA.numerator + "/" + fractionA.denominator + " & " + fractionB.numerator + "/" + fractionB.denominator);
}

homogenizeDenominator(fractionA, fractionB);


// Make a comparison of fraction A & fraction B
console.log (`\nRequest 10 - Make a comparison of fraction A & fraction B`)

function compareFractions (fractionA, fractionB) {
    let a = fractionA.numerator / fractionA.denominator;
    let b = fractionB.numerator / fractionB.denominator;
        if (a > b) { 
            return console.log ('a > b'); 
        } else if (a < b) { 
            return console.log ('a < b'); 
        } else return 0;
    };

compareFractions(fractionA, fractionB);





