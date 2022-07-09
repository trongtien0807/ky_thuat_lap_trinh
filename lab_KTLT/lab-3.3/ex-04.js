class Ticket {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Queue {
    constructor(tckts, size) {
        this.tckts = [];
        this.size = 10;
    }
}
let ticket01 = new Ticket("Vé 1", 50000);
let ticket02 = new Ticket("Vé 2", 60000);
let ticket03 = new Ticket("Vé 3", 40000);
let ticket04 = new Ticket("Vé 4", 50000);
let ticket05 = new Ticket("Vé 5", 70000);
let tickets = new Queue();
tickets = {tckts : [ticket01, ticket02, ticket03, ticket04, ticket05], size : 10};
function isFull() {
    if(tickets.tckts.length == tickets.size) {return 1}
    else {return 0}
}
function isEmpty() {
    if(tickets.tckts.length == 0) {return 1}
    else {return 0}
}
// them ve vao hang doi
let ticket = new Ticket("Vé 5", 100000);
function push(ticket) {
    if (isFull() == 1) console.log("Tickets Queue is full.");
    else tickets.tckts.push(ticket);
}
// xoa ve tu hang doi
function shift() {
    if (isEmpty() == 1) {
        console.log("Tickets Queue is empty");
    } else {
        tickets.tckts.shift(tickets);
    }
}
// sap xep hang doi tang dan theo Price.
function SortAscengding(n, arr) { // sắp xếp mảng tăng dần
    for (var i = 0; i <= n-2; i++) {
        for (var j = i + 1; j <= n - 1; j++) {
            if (Number(arr[i].price) > Number(arr[j].price)) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
function AscengdingQueue(arr) {
    SortAscengding(arr.length, arr);
    console.log(arr);
}
// sap xep hang doi giam dan theo Price.
function SortDecengding(n, arr) { // sắp xếp mảng tăng dần
    for (var i = 0; i <= n-2; i++) {
        for (var j = i + 1; j <= n - 1; j++) {
            if (Number(arr[i].price) < Number(arr[j].price)) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
function DecengdingQueue(arr) {
    SortDecengding(arr.length, arr);
    console.log(arr);
}
// tim ve co gia lon nhat trong hang doi
function findMax(arr) {
    let max = arr[0].price;
    for (let i = 1 ; i <arr.length; i++) {
        if (max < arr[i].price) {
            max = arr[i].price;
        }
    }
    return max;
}
function MaxElement(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].price == findMax(arr)) {
            console.log(arr[i]);
        }
    }
}
//isFull();
//isEmpty();
//push(ticket);
//shift()
//AscengdingQueue(tickets.tckts);
//DecengdingQueue(tickets.tckts);
//MaxElement(tickets.tckts);