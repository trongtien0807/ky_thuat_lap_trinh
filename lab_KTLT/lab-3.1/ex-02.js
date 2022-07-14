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
function findFirstPositiveValue (arr,n) {
    let flag = -1;
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            flag = arr[i];
            break;
        }
    } console.log ("First positive value: " + flag);
}

// REQUEST 2:
function findLastEvenNumber (arr, n) {
    let flag = -1;
    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 === 0) {
            flag = arr[i];
        }
    } console.log ("Last even value: " + flag);
}

// REQUEST 3:
function getIndexOfSmallestElement (arr) {
    let min = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[min]) min = i;
    }
    return min;
};

// REQUEST 4:
function getTheSmallestPositiveValue(arr, n) {
    for (let i = 0; i < n; i++) {
            if (arr[i] < 0)
            arr.splice(i, 1);
    }
    for (let i = 0; i <= n - 2; i++) {
        for (let j = i + 1; j <= n - 1; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            };
        }
    }
    console.log(`arr = [${arr}]`);
    console.log (`Min postive value: ${arr[0]}`);
}; 


// RESULT: 
function main() {
    let arr = [], n;

    do {
        n = Number(prompt("Enter a specific number of elements in the array (at least 5): "));
        if (isNaN(n) || n < 5) {
            alert('Oops!! The input value must be a number and larger than 4!!');
        }
    } while (isNaN(n) || n < 5);


    inputArray(arr, n);

    outputArray(arr,n);

    console.log (`\nRequest 1 - Find the 1st positive value in the array: `)
    findFirstPositiveValue(arr, n);

    console.log (`\nRequest 2 - Find the last even number in the array: `)
    findLastEvenNumber(arr,n);

    console.log (`\nRequest 3 - Find the index whose value is the smallest in the array: `)
    console.log(`The smallest index of element: arr[${getIndexOfSmallestElement(arr, n)}] = ${arr[getIndexOfSmallestElement(arr, n)]}`);

    console.log (`\nRequest 4 - Find the smallest positive value in the array:`)
    getTheSmallestPositiveValue(arr, n);
};

main();