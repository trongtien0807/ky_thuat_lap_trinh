function inputArray (arr, n) {
    for (let i = 0; i < n; i++) {
        arr[i] = Number(prompt(`arr[${i}] - Enter any number: `));
    } 
};

function outputArray (arr) {
    console.log (`\nInput value: `)
    console.log(...arr);
};

// REQUEST 1:
function countEvenNumbers (arr, n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 === 0) {
            count += 1;
        }
    }
    console.log (`Number of EVEN numbers: ${count}`);
};

// REQUEST 2:
function countPositiveValueDivisibleBy7 (arr, n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0 && arr[i] % 7 === 0) {
            count += 1;
        } 
    }
    console.log (`Number of POSTIVE numbers divisible by 7: ${count}`);
};

// REQUEST 3:
function countOccurrencesOf24 (arr, n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] === 24) {
            count += 1;
        }
    }
    console.log (`Occurrences Of 24: ${count}`);
}


// RESULT
function main() {
    let arr = [], n;

    do {
        n = Number(prompt("Enter a specific number of elements in the array (at least 5): "));
        if (isNaN(n) || n < 5) {
            alert('Oops!! The input value must be a number and larger than 4!!');
        }
    } while (isNaN(n) || n < 5);


    inputArray(arr, n);

    outputArray(arr, n);

    console.log (`\nRequest 1 - Count even numbers `)
    countEvenNumbers (arr, n);

    console.log (`\nRequest 2 - Count positive number divisible by 7 `);
    countPositiveValueDivisibleBy7(arr, n);

    console.log (`\nRequest 3 - Count occurences of 24`)
    countOccurrencesOf24 (arr, n)
}

main()