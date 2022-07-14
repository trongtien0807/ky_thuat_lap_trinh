var iphoneX = Number(prompt("Nhập giá tiền iphoneX:"));
var sạc = Number(prompt("Nhập giá tiền cục sạc:"));
var voucher = Number(prompt("Nhập giá của phiếu giảm giá:"));
const VAT = 0.08;
confirm("Bạn đã nhập đầy đủ thông tin các món hàng chưa?");
var totalprice = (iphoneX + sạc)+((iphoneX + sạc)* VAT) - voucher;
alert(totalprice);
console.log("Tổng số tiền thanh toán là" , totalprice , "VND");