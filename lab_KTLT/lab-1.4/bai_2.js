// Cách 1
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


// Cách 2
function isPrime (n) {  // kiem tra 1 so co phai so nguyen to hay khong
  for (let i = 2; i < n ; i++)
  {
      if ( n % i === 0) {
          return false;
      }
      else {
          return true;
      }
  }
};

function listPrimeNumber () { 
  let n; // liet ke cac so nguyen to nho hon n
  do {
      n = Number(prompt("Enter n:"));  // nhap vao so nguyen to >2
  } while ( n<= 2)

  for ( let i = 2; i < n; i++) {  // xu ly liet ke cac so nguyen to trong khoang 2 -> n
      if(isPrime(i)){
          console.log("i is prime ", i)
      }
  }
}
console.log("Tất cả các số nguyên tố nhỏ hơn n là: ")
listPrimeNumber();