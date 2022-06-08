var a = Number(prompt("Nhập điểm môn Toán:"));
var b = Number(prompt("Nhập điểm môn Lý:"));
var c = Number(prompt("Nhập điểm môn Hoá:"));
var TotalScore = a + b + c;
var GPA = TotalScore/3;
console.log("Tổng điểm 3 môn là:" , TotalScore , "điểm");
console.log("Điểm trung bình cộng 3 môn là:" , GPA , "điểm");