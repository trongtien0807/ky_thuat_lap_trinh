// đa thức có dạng: P(x) = ax + b => tìm nghiệm: P(x) = ax + b = 0 
//                                                    => x = -b/a
var a = Number(prompt("Nhập giá trị của số nguyên a:"));
var b = Number(prompt("Nhập giá trị của số nguyên b:"));
var result;

if(a==0 && b==0) {
    result = "Có vô số nghiệm";
}
else if (a==0) {
    result = "Vô nghiệm";
} else {
    if (b==0) {
        result = "Có nghiệm x = 0";
    }
    else {
        result = "Có 1 nghiệm x = " + -b/a;
    }
}

console.log(result);