// REQUEST 1:
function inputArray (arr, n) {
    for (let i = 0; i < n; i++) {
        arr[i] = Number(prompt(`arr[${i}] - Enter any number: `));
    } 
};

function outputArray (arr) {
    
    console.log(...arr);
};

// REQUEST 2:
function listOddValues (arr, n) {
    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 === 1) {
            console.log (arr[i]);
        }
    }
}

// REQUEST 3:
function sumOfNegativeValues (arr, n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] < 0) {
            sum += arr[i];
        }
    } console.log (`Sum of Negative Values in the array: ${sum}`);
};

// REQUEST 4:
function countPrimeNumbers (arr, n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] > 1 && arr[i] % 2 === 1 && arr[i] % arr[i] === 0 && arr[i] < 100) {
            count += 1;
        }
    }
    console.log (`Number of Prime Numbers: ${count}`);
}

// REQUEST 5:
function findMaxValue (arr, n) {
    let max = arr[0];
    for (let i = 0; i < n; i++) {
        if (arr[i] > max) {
        max = arr[i];
        };
    } 
    console.log(`Max value of the array: ${max}`);
};

// REQUEST 6:
function findAnEvenValue (arr, n) {
    let flag = false;
    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 === 0 && arr[i] < 100) {
            flag = arr[i];
            break;
        }
    }
    return console.log(`First even value smaller than 100: ${flag}`);
    
}


// RESULT:
function main() {
    let arr = [], n;

    do {
        n = Number(prompt("Enter a specific number of elements in the array (at least 5): "));
        if (isNaN(n) || n < 5) {
            alert('Oops!! The input value must be a number and larger than 4!!');
        }
    } while (isNaN(n) || n < 5);

    console.log (`\nRequest 1 - Write an input & output array:`)
    inputArray(arr, n);
    outputArray(arr);

    console.log (`\nRequest 2 - List out odd values in the array:`)
    listOddValues (arr, n);

    console.log (`\nRequest 3 - Write a sum function of negative values:`)
    sumOfNegativeValues(arr,n);

    console.log (`\nRequest 4 - Write a count function of prime numbers: `)
    countPrimeNumbers(arr,n);

    console.log (`\nRequest 5 - Find max value in the array`);
    findMaxValue(arr,n);

    console.log (`\nRequest 6 - Check whether there'a EVEN value smaller than 100:  `)
    findAnEvenValue(arr,n);

};

main();