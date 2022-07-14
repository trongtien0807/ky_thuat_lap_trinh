// Bai 1
// Cách 1
var n = Number(prompt("Nhập giá trị của số nguyên dương n:"));
console.log("Tất cả các ước số của số nguyên dương n là: ");
for (let i = 1 ; i <= n ; i++)
{
    if (n % i == 0) 
    {
        console.log(i);
    };
}


// Cách 2
function divisor () {
    let n;
// function divisor (n) {
    do {
        n = Number (prompt("Enter n :"));
    } while ( n <= 0)

    for (let i = 1; i <= n; i++) {
        if ( n % i === 0) {  // Kiem tra n co chia het cho i khong? ( Hoac i co phai uoc so cua n khong )
            console.log(i);
        }
    }
}
console.log("Tất cả các ước số của số nguyên dương n là: ");
divisor();


// // bai 1 Uoc so
const a = prompt("Input:");
const divisor =(n,a) => {
    if(a % n == 0) return true;
    else return false;
    }

for(var i = 0; i <= a; i ++){
    if(divisor(i,a) == true) console.log(i);
}

// Bai 3

const c = prompt ("Input: ");
var total = 0;
for(var i = 0; i <= c; i ++){
    if (divisor(i,c) == true&& i % 2 == 0) total+= Number(i);
}
console.log(total);

// Bai 4 

const d = prompt ("Input: ");
let count = 0;
for(var i = 0; i <=d; i ++){
    if (divisor(i,d) == true && i % 2 == 0) count++;
}
console.log(count);


// Bai 3 khong dùng hàm của bài 1
var n = Number(prompt("Nhập giá trị của số nguyên dương n:"));
var sum = 0;
for (let i = 1 ; i <= n ; i++)
{
    if (n % i == 0 && i % 2 == 0) 
    {
        sum += i
    }
}
console.log("Tổng tất cả “ước số chẵn” của số nguyên dương n là: " , sum);


// Bai 4 khong dùng hàm của bài 1
var n = Number(prompt("Nhập giá trị của số nguyên dương n:"));
var count = 0;
for (let i = 1 ; i <= n ; i++)
{
    if (n % i == 0 && i % 2 == 0) 
    {
        count++
    }
}
console.log("Số lượng “ước số chẵn” của số nguyên dương n là: " , count);
