class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
}

// Import & export x,y
console.log (`\nRequest 1 - Import & Export X & Y`);
alert ('Enter X & Y coordinates');

let point = new Point ();

function inputXY() {
    point.x = Number(prompt("Enter X: "));
    point.y = Number(prompt("Enter Y: "));
    return point;
}

function outputXY(point) {
    console.log(`Output of x,y: (${point.x},${point.y})`);
}

inputXY();
outputXY(point);


// Calculate the distance between a & b
alert('Before jumping into next request, please enter coordinates x,y of pointA & pointB ')

let pointA = new Point(Number(prompt("Point A - Enter X coordinate: ")),Number(prompt("Point A - Enter Y coordinate: ")));
let pointB = new Point(Number(prompt("Point B - Enter X coordinate: ")),Number(prompt("Point B - Enter Y coordinate: ")));

console.log(`\nRequest 2 - Calculate the distance between a & b`)

function distanceAB(pointA, pointB) {
    let d = Math.sqrt(Math.pow((pointA.x-pointB.x),2) + Math.pow((pointA.y-pointB.y),2));
    console.log(`Distance between 2 points: ${d.toFixed(2)}`);
}

distanceAB(pointA, pointB);


// Calculate the distance between 2 points in the direction of "Ox"
console.log (`\nRequest 3 - Calculate the distance between 2 points in the direction of "Ox"`)

function distanceOx(pointA, pointB) {
    let dOx = Math.abs(pointB.x - pointA.x);
    console.log(`Distance between 2 points in the direction of "Ox": ${dOx}`);
}
distanceOx(pointA, pointB);


// Calculate the distance between 2 points in the direction of "Oy"
console.log (`\nRequest 4 - Calculate the distance between 2 points in the direction of "Ox"`)

function distanceOy(pointA, pointB) {
    let dOy = Math.abs(pointA.y - pointB.y);
    console.log(`Distance between 2 points in the direction of "Ox": ${dOy}`);
}
distanceOy(pointA, pointB);


// Find the coordinates of the symmetrical point 
console.log (`\nRequest 5 - Find the coordinates of the symmetrical point `)
function symmetricalPoint(pointA){
    pointA.x = pointA.x * -1;
    pointA.y = pointA.y * -1;
    console.log(`Result: (${pointA.x}, ${pointA.y}})`)
}
symmetricalPoint(pointA);





