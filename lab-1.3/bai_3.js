// S(n) = 1 + 2 + … + (n-1) + n
var n = Number(prompt("Nhập giá trị n"));
var i; 
var S = 0;
for (i = 1 ; i <= n ; i++) {
    S += i;
}
console.log("Sum is: " , S);