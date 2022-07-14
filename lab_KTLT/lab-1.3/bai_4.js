// S(n) = 1/2 + 1/4 + … + 1/2(n-1) + 1/2n


var n = Number(prompt("Nhập giá trị n"));
var i;
var S = 0;
for(i = 1; i <= n; i++) {
		S = S + 1/(2*i);
	}
console.log("Sum is: " , S);





var n = Number(prompt("Nhập giá trị n"));
var i;
var S = 0;
for(i = 2; i <= 2 * n; i += 2) {
		S = S + 1/i;
	}
console.log("Sum is: " , S);