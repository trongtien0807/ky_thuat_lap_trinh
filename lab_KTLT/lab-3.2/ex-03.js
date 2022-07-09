class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
}

// Import/Export the triangle
console.log (`\nRequest 1 & 2 - Import/Export the triangle`)

let triangle = [];

function input() {
    for (let i = 0; i < 3; i++) {
        let newPoint = new Point();
        newPoint.x = Number(prompt(`Point ${i+1} - Enter abscissa x: `)); 
        newPoint.y = Number(prompt(`Point ${i+1} - Enter ordinate y: `)); 
        triangle.push(newPoint);
    }
}

function output() {
    console.log(`Three points of the triangle:`, triangle);
}

input();
output();


// Calculate the Parameter of the triangle
console.log (`\nRequest 3 - Calculate the parameter of the triangle`);

function distance(point1, point2) {
    let d = Math.sqrt(Math.pow(point1.x - point2.x, 2)) + Math.pow(point1.y - point2.y, 2);
    return d;
}

function perimeter(){
    let d1 = distance(triangle[0], triangle[1]);
    let d2 = distance(triangle[0], triangle[2]);
    let d3 = distance(triangle[1], triangle[2]);
    let p = d1 + d2 + d3;
    console.log("Perimeter of triangle: ", p);
}

perimeter();


// Calculate the Area of the triangle
console.log (`\nRequest 4 - Calculate the Area of the triangle`)

function area() {
    let s = Math.abs((triangle[1].x - triangle[0].x) * (triangle[2].y - triangle[0].y) - (triangle[2].x - triangle[0].x)*(triangle[1].y - triangle[0].x)) / 2;
    console.log("Area of triangle: ", s);
}

area();

// Calculate the sum of the distance from P(x,y) to 3 vertices:
console.log ('\nRequest 5');

function sumDistance() {
    let pointP = new Point (Number(prompt("Enter X of P: ")), Number(prompt("Enter Y of P: ")));
    let d1 = distance(triangle[0], pointP);
    let d2 = distance(triangle[1], pointP);
    let d3 = distance(triangle[2], pointP);
    let sum = d1 + d2 + d3;
    console.log("Sum of the distance from P(x,y) to 3 vertices: ", sum);
}

sumDistance();
