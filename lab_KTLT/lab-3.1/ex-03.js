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
function listOutXToYValues (arr, x, y) {
    console.log (...arr.slice(x,y))
}

// REQUEST 2:
function getLargestIndex (arr, n) {
    let max = 0;
    for (let i = 1; i < n; i++) {
        if (arr[i] > arr[max]) max = i;
    }
    return max;
};



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
    
    alert ("List out values ranging from x to y");
    console.log (`\nRequest 1 - List out values ranging from x to y`);
    listOutXToYValues (arr, Number(prompt("Enter x: ")), Number(prompt("Enter y: ")));

    console.log (`\nRequest 2 - Find the index whose value is the largest in the array: `)
    console.log(`The largest index of elements: arr[${getLargestIndex(arr,n)}] =  ${arr[getLargestIndex(arr, n)]}`);
}

main()