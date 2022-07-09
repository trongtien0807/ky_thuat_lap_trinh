let m = Number(prompt("Nhập tháng của 1 năm:"));
if (m<4) {
    console.log("Tháng" , m , "thuộc Quý I ");
} 
else if (m>=4&&m<7) {
    console.log("Tháng" , m , "thuộc Quý II ");
} 
else if (7<=m&&m<10) {
    console.log("Tháng" , m , "thuộc Quý III ");
}
else {
    console.log("Tháng" , m , "thuộc Quý IV ");
}


let month;
//cach 1
// while (month< 1 || month > 12) {
//     month = Number(prompt("Enter month : "));
// }
month = Number(prompt("Enter month : "));
switch (month) {
    case 1:
    case 2:
    case 3:
        console.log("Month is first quarter");
        break;
    case 4:
    case 5:
    case 6:
        console.log("Month is second quarter");
        break;
    case 7:
    case 8:
    case 9:
        console.log("Month is third quarter");
        break;
    case 10:
    case 11:
    case 12:
        console.log("Month is fourth quarter");
        break;
    //cach 2
    default:
        console.log("Invalid month");
        break;
}