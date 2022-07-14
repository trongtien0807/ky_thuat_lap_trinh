//1 khai bao
let queue = [24,45,23,13,43,-1];
var capacity = 10;
// 2 kiem tra ngan xep day
function IsFull() {
    if(queue.length == capacity) {
        return 1;
    } else {return 0}
}
// 3 kiem tra rong
function IsEmpty() {
    if(queue.length == 0) {
        return 1;
    } else {return 0}
}
// 4 them phan tu
function PushElement(x) {
    if(IsFull() == 1) {
        console.log("Stack is full")
    } else {queue.push(x)}
}
// 5 xoa phan tu
function shift() {
    if (IsEmpty() == 1) {
        console.log("stack is empty");
    } else {
        queue.shift();
    }
}
// 6 liet ke phan tu chan
function ListOutEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            console.log(arr[i])
        }
    }
}
// 7 sap xep ngan xep tang dan
function SortAscengding(n, arr) { // sắp xếp mảng tăng dần
    for (var i = 0; i <= n-2; i++) {
        for (var j = i + 1; j <= n - 1; j++) {
            if (Number(arr[i]) > Number(arr[j])) {
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
// 8 sap xep ngan xep giam dan
function SortDecengding(n, arr) { // sắp xếp mảng giam dần
    for (var i = 0; i <= n-2; i++) {
        for (var j = i + 1; j <= n - 1; j++) {
            if (Number(arr[i]) < Number(arr[j])) {
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
// 9 tim phan tu lon nhat
function findMax(arr) {
    let max = arr[0];
    for (let i = 1 ; i <arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
function MaxElement(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == findMax(arr)) {
            console.log(arr[i]);
        }
    }
}
// 10 tong phan tu chan
function SumEven(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
           sum = sum + arr[i];
        }
    }
    return sum;
}
IsFull();
IsEmpty();
PushElement(10);
pop();
ListOutEven(queue);
AscengdingQueue(queue);
DecengdingQueue(queue);
MaxElement(queue);
SumEven(queue);