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