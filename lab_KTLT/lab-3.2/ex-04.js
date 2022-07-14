class Fraction {
    constructor(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    }
}

// Import/Export the array of fractions:
function inputArr (fracArr, n) {
    for (let i = 0; i < n; i++) {
        let newFracArr = new Fraction ();
        newFracArr.numerator = Number(prompt(`Fraction ${i+1} - Enter numerator: `));
        newFracArr.denominator = Number(prompt(`Fraction ${i+1} - Enter denominator: `));
        fracArr.push(newFracArr);
    }
}

function outputArr (fracArr, n) {
    for (let i = 0; i < n; i++) {
        console.log (fracArr[i]);
    }
}

// Count fractions including positive numerators
function countPositiveNumerator (fracArr, n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (fracArr[i].numerator > 0) {
            count += 1;
        } 
    }
    console.log (count);
}

// Find the index of largest fraction of the array
function findMaxFraction(fracArr, n) {
    let max = 0;
    for (let i = 0; i < n; i++) {
        if ((fracArr[i].numerator/fracArr[i].denominator) > (fracArr[max].numerator/fracArr[max].denominator));
        max = i;
    }
    return console.log("Max index of elements: ", max);
}

// Sort the array of ascending fractions
function sortAscending (fracArr,n) {
    for (let i = 0; i <= n - 2; i++) {
        for (let j = i + 1; j <= n - 1; j++) {
            if ((fracArr[i].numerator/fracArr[i].denominator) > (fracArr[j].numerator/fracArr[j].denominator)) {
                let temp = fracArr[i];
                fracArr[i] = fracArr[j];
                fracArr[j] = temp;
            }
        }
    }
    console.log (...fracArr)
}


function main() {
    let fracArr = [], n;
    do {
        n = Number(prompt("Enter the number of fractions n: "));
        if (isNaN(n) || n < 2) {
            alert('Oops!! The input value must be a number and larger than 2!!');
        }
    } while (isNaN(n) || n < 2);

    console.log (`\nRequest 1 & 2 - Import/Export the array of fractions`)
    inputArr(fracArr, n);
    outputArr(fracArr, n);

    console.log (`\nRequest 3 - Count fractions including positive numerators`)
    countPositiveNumerator (fracArr, n);

    console.log (`\nRequest 4 - Find the index of the largest fraction of the array`)
    console.log (findMaxFraction(fracArr, n));

    console.log (`\nRequest 5 - Arrange the array of ascending fractions`)
    sortAscending(fracArr,n);

}

main();