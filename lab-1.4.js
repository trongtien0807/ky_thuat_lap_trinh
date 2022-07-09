// Bai 1
var n = Number(prompt("Nhập giá trị của số nguyên dương n:"));
console.log("Tất cả các ước số của số nguyên dương n là: ");
for (let i = 1 ; i <= n ; i++)
{
    if (n % i == 0) 
    {
        console.log(i);
    };
};

// Bai 2
var n = Number(prompt("Nhập giá trị của số n:"));
var PrimeNumber1 = (n) => {
  if (n < 2) {return false};

  for (let i = 2; i < n; i++) 
  {
    if (n % i == 0) {
      return false;
    }
    else {
      return true;
    };
  };
};

var PrimeNumber2 = () => {
  for (let i = 0; i < n; i++) {
    if (PrimeNumber1(i)) {
      console.log(i);
    };
  };
};
console.log("Tất cả các số nguyên tố nhỏ hơn n là: ")
PrimeNumber2();


// Bai 3
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


// Bai 4
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



// Bai 5
const Input= ()  => {
    let arr = [];
    const arr_length = prompt("Length of array: ");
    for(var i = 0; i < arr_length; i++){
        arr[i] = prompt(`Input ${i+1}: `);
    }
    return arr;
}
const Output = (arr) => {
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
Output(Input());

// Bai 6

const odd = (arr) => {
    console.log("Odd: ");
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0) console.log(arr[i]);
    }
}

const even = (arr) => {
    console.log("Even: ");
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0) console.log(arr[i]);
    }
}

let arr2 = Input();
odd(arr2);
even(arr2);


// Bai 7
total = 0;
for(var i = 0; i < arr2.length; i++){
    if(arr2[i] % 2 != 0) total+= Number(arr2[i]);
}
console.log(total);