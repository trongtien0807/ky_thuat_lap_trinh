class Plate {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
}

class Stack {
    constructor(plts, capacity) {
        this.plts = [];
        this.capacity = 10;
    }
}
let plate01 = new Plate("Dĩa 1", "Vừa");
let plate02 = new Plate("Dĩa 2", "Vừa");
let plate03 = new Plate("Dĩa 3", "Vừa");
let plate04 = new Plate("Dĩa 4", "Vừa");
let plate05 = new Plate("Dĩa 5", "Vừa");
let plates = new Stack()
plates = {plts : [plate01, plate02, plate03, plate04, plate05], capacity : 10};

function isFull() {
    if(plates.plts.length == plates.capacity) {return 1}
    else {return 0}
}
isFull();

function isEmpty() {
    if(plates.plts.length == 0) {return 1}
    else {return 0}
}

let plate = new Plate("Dĩa 6", "to");
function push(plate) {
    if (isFull() == 1) console.log("Plates stack is full.");
    else plates.plts.push(plate);
}

function pop() {
    if (isEmpty() == 1 ) console.log("Plates stack is empty.");
    return plates.plts.pop();
}
//isFull();
//isEmpty();
//push(plate);
//pop();
//Uncaught ReferenceError: các câu còn lại không có giá trị để so sánh và sắp xếp. vui lòng xem ở exercise 4