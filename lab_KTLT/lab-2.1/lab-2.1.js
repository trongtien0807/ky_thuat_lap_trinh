// Bai 1

class Car {
    constructor (name , color , capacity) {
        this.name = name
        this.color = color
        this.capacity = capacity
    };
};

// Cach 1
// let car1 = new Car ("BMW" , "Red" , 4);
// let car2 = new Car ("Audi" , "Green" , 8);
// let car3 = new Car ("BMW" , "Blue" , 6);
// let car4 = new Car ("Merc" , "Green" , 4);

// const allCar = [car1 , car2, car3 , car4];
// console.log("outputArrayCars" , allCar);

// Cach 2
let n; // So luong doi tuong Car
let allCar = [];
n = Number(prompt("Nhap vao so luong Car: "));
for (let i = 0 ; i < n ; i++) {
    const name = prompt(`Nhap ten car ${i+1}: `);
    const color = prompt(`Nhap mau car ${i+1}: `);
    const capacity = Number(prompt(`Nhap so luong ghe ngoi car ${i+1}: `));
    const car = new Car(name , color , capacity); // Khai bao 1 doi tuong tu lop Car
    allCar.push(car); // Them vao mang phan tu car vua khai bao (dung lenh push)
};
console.log("outputArrayCars: " , allCar);

// Bai 2

function listOutBMWCars () {
    for (let i = 0 ; i < allCar.length ; i++) {
        if(allCar[i].name === "BMW") {
            console.log("listOutBMWCars: " , allCar[i])
        };
    };
};
listOutBMWCars ();

// Bai 3

function sumCarCapacities () {
    let sum = 0;
    for (let i = 0 ; i < allCar.length ; i++) {
        sum += allCar[i].capacity
    };
    return sum;
};
console.log("sumCarCapacities: " , sumCarCapacities());

// Bai 4

function countGreenCars () {
    let count = 0;
    for (let i = 0 ; i < allCar.length ; i++) {
        if(allCar[i].color === "Green") {
            count ++
        };
    };
    return count;
};
console.log("countGreenCars: " , countGreenCars());

// Bai 5

function findMaxCapacity () {
    let max = allCar[0].capacity;
    for (let i = 0 ; i < allCar.length ; i++) {
        if (allCar[i].capacity > max) {
            max = allCar[i].capacity
        };
    };
    return max;
};
console.log("findMaxCapacity: " , findMaxCapacity());