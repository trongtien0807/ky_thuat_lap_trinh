function inputArray (arr, n) {
    for (let i = 0; i < n; i++) {
        do {
            arr[i] = Number(prompt(`arr[${i}] - Enter any number: `));
        } while (arr[i] >= 100 && isNaN(arr[i]))
    } 
};

function outputArray (arr) {
    console.log (`\nInput value: `)
    console.log(...arr);
};


// REQUEST 1:
function sumOfElements (arr, n) {
    sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }
    console.log (`Sum of Elements in the array: ${sum}`);
};

// REQUEST 2:
function sumOfPostiveValues (arr, n) {
    sum = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            sum += arr[i]
        }
    }
    console.log (`Sum of Positive values in the Array: ${sum}`)
}

//REQUEST 3:

function findFirstOddNumber(m) {
    let unit, div;
    m = Math.abs(m);
    if (m >= 10) {
        unit = m % 10;
        div = (m - unit) / 10;
            if (div % 2 == 0) {
                return 0;
                } return 1;
    } 
    else if (m < 10) {
        if (m % 2 == 0) {
            return 0;
        } return 1;
    }
};

function sumOfFirstOddNumbers (arr, n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (findFirstOddNumber(arr[i]) === 1) {
            sum += arr[i];
        }
    }
    return console.log(sum);
}



// RESULT
function main() {
    let arr = [], n;

    do {
        n = Number(prompt("Enter a specific number of elements in the array: "));
        if (isNaN(n)) {
            alert('Oops!! The input value must be a number and larger than 4!!');
        }
    } while (isNaN(n) || n < 5);

    inputArray(arr, n);

    outputArray(arr, n);

    console.log (`\nRequest 1 - Write a function on sum of all elements in the array: `);
    sumOfElements (arr, n);

    console.log (`\nRequest 2 - Write a function on sum of postive value in the array: `);
    sumOfPostiveValues (arr, n);

    console.log (`\nRequest 3 - Write a function on sum of values whose first digit is an odd digit:  `)
    sumOfFirstOddNumbers (arr, n)
};

main();