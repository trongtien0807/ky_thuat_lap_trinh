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