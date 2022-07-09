// Tính giá trị tuyệt đối thông qua hàm sẵn có:
// const absoluteN = Math.abs(n);   
var n = Number(prompt("Nhập giá trị của số nguyên n"));
var absoluteN = Math.abs(n);    
console.log("|n| = " , absoluteN);

// Tính giá trị tuyệt đối thông qua If else
var n = Number(prompt("Nhập giá trị của số nguyên n"));
var absoluteN;
if (n<0) {
    absoluteN = n*(-1);
}
else {
    absoluteN = n;
}
console.log("|n| = " , absoluteN);
