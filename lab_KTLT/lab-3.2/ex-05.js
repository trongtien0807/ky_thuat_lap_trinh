class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

// Import/Export the array of points:
function inputArr (pointArr, n) {
    for (let i = 0; i < n; i++) {
        let newPointArr = new Point ();
        newPointArr.x = Number(prompt(`Point ${i+1} - Enter X: `));
        newPointArr.y = Number(prompt(`Point ${i+1} - Enter Y: `));
        pointArr.push(newPointArr);
    }
}

function outputArr (pointArr, n) {
    for (let i = 0; i < n; i++) {
        console.log (pointArr[i]);
    }
}

// Count points with Positive Abscissa
function countPositiveAbscissa (pointArr, n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (pointArr[i].x > 0) {
            count += 1;
        }
    }
    return console.log ("Number of Point(s) with a Positive Abscissa: ", count)
}

// Find the index with the largest Positive Abscissa in the array
function findMaxAbsscisa (pointArr, n) {
    let max = 0;
    for (let i = 0; i < n; i++) {
        if (pointArr[i].x > pointArr[max].x) {
            max = i;
        }
    }
    return console.log ("Max index of elements: ", max);
}


function main() {
    let pointArr = [], n;
    do {
        n = Number(prompt("Enter the number of points n: "));
        if (isNaN(n) || n < 2) {
            alert('Oops!! The input value must be a number and larger than 2!!');
        }
    } while (isNaN(n) || n < 2);

    console.log (`\nRequest 1 & 2 - Import/Export the array of points`)
    inputArr (pointArr, n);
    outputArr (pointArr, n);

    console.log (`\nRequest 3 - Count points with Positive Abscissa`)
    countPositiveAbscissa (pointArr, n);

    console.log (`\nRequest 4 - Find the index with the largest Positive Abscissa in the array`)
    findMaxAbsscisa (pointArr, n);


}
main();