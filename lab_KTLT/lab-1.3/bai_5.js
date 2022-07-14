// T(x,n) = xn
var x = Number(prompt("Nhập giá trị x"));
var n = Number(prompt("Nhập giá trị n"));
var i;
var T = 1;
for (i = 1 ; i <= n ; i++) {
    T *= x;
};
console.log("T = " , T);